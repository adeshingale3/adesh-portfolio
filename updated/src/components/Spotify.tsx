"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady?: () => void;
  }
}

type SpotifyImage = {
  url: string;
  width: number;
  height: number;
};

type SpotifyArtist = {
  name: string;
};

type SpotifyTrack = {
  name: string;
  artists: SpotifyArtist[];
  album: {
    images: SpotifyImage[];
  };
  external_urls?: {
    spotify?: string;
  };
};

type PlaybackState = {
  isPlaying: boolean;
  source: "currently" | "recently";
  track: SpotifyTrack;
};

type StoredToken = {
  access_token: string;
  refresh_token?: string;
  expires_at: number;
};

const SCOPES = [
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
].join(" ");
const TOKEN_KEY = "spotify_token_data_v1";
const VERIFIER_KEY = "spotify_code_verifier_v1";

const envRedirect = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI || "";
const isBrowser = typeof window !== "undefined";

if (isBrowser && typeof window.onSpotifyWebPlaybackSDKReady !== "function") {
  window.onSpotifyWebPlaybackSDKReady = () => {};
}

function base64UrlEncode(buffer: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function createCodeChallenge(codeVerifier: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return base64UrlEncode(digest);
}

function generateCodeVerifier(length = 128) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  let result = "";
  const randomValues = crypto.getRandomValues(new Uint8Array(length));
  randomValues.forEach((value) => {
    result += chars[value % chars.length];
  });
  return result;
}

function getRedirectUri() {
  if (envRedirect) {
    return envRedirect.trim().replace(/\/$/, "");
  }
  if (!isBrowser) return "";
  return window.location.origin;
}

function saveToken(data: {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
}) {
  const expires_at = Math.floor(Date.now() / 1000) + data.expires_in - 30;
  const stored: StoredToken = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at,
  };
  if (isBrowser) {
    window.localStorage.setItem(TOKEN_KEY, JSON.stringify(stored));
  }
}

function loadToken(): StoredToken | null {
  if (!isBrowser) return null;
  const raw = window.localStorage.getItem(TOKEN_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredToken;
  } catch {
    return null;
  }
}

async function refreshAccessToken(
  clientId: string,
  stored: StoredToken
): Promise<string | null> {
  if (!stored.refresh_token) return null;

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: stored.refresh_token,
    client_id: clientId,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!res.ok) return null;
  const data = await res.json();
  saveToken({
    access_token: data.access_token,
    expires_in: data.expires_in,
    refresh_token: data.refresh_token ?? stored.refresh_token,
  });
  return data.access_token as string;
}

async function getValidAccessToken(clientId: string): Promise<string | null> {
  const stored = loadToken();
  if (!stored) return null;

  const now = Math.floor(Date.now() / 1000);
  if (stored.expires_at > now) {
    return stored.access_token;
  }

  return refreshAccessToken(clientId, stored);
}

async function exchangeCodeForToken(code: string, clientId: string) {
  if (!isBrowser) return null;
  const verifier = window.localStorage.getItem(VERIFIER_KEY);
  const redirectUri = getRedirectUri();
  if (!verifier || !redirectUri) return null;

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: verifier,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!res.ok) return null;
  const data = await res.json();
  saveToken({
    access_token: data.access_token,
    expires_in: data.expires_in,
    refresh_token: data.refresh_token,
  });
  window.localStorage.removeItem(VERIFIER_KEY);
  return data.access_token as string;
}

export default function SpotifyNowPlaying() {
  const [playback, setPlayback] = useState<PlaybackState | null>(null);
  const [loading, setLoading] = useState(false);
  const [authInProgress, setAuthInProgress] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clientId = isBrowser
    ? process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
    : undefined;

  useEffect(() => {
    if (!clientId || !isBrowser) return;

    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const handled = url.searchParams.get("spotify_auth");

    const loadPlayback = async (accessToken: string) => {
      try {
        setLoading(true);
        setError(null);

        const currentRes = await fetch("https://api.spotify.com/v1/me/player", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        if (currentRes.ok && currentRes.status !== 204) {
          const current = await currentRes.json();
          if (current?.item) {
            setPlayback({
              isPlaying: Boolean(current.is_playing),
              source: current.is_playing ? "currently" : "recently",
              track: current.item as SpotifyTrack,
            });
            setLoading(false);
            return;
          }
        }

        const recentRes = await fetch(
          "https://api.spotify.com/v1/me/player/recently-played?limit=1",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        if (!recentRes.ok) {
          throw new Error("Unable to load recent tracks");
        }

        const recent = await recentRes.json();
        const item = recent.items?.[0]?.track as SpotifyTrack | undefined;
        if (item) {
          setPlayback({
            isPlaying: false,
            source: "recently",
            track: item,
          });
        } else {
          setPlayback(null);
        }
      } catch (err) {
        console.error(err);
        setError("Could not load Spotify data.");
      } finally {
        setLoading(false);
      }
    };

    const handleAuthCallback = async () => {
      if (!code || handled === "1") return;
      setAuthInProgress(true);
      const token = await exchangeCodeForToken(code, clientId);
      if (token) {
        url.searchParams.delete("code");
        url.searchParams.delete("state");
        url.searchParams.delete("spotify_auth");
        window.history.replaceState({}, "", url.toString());
        await loadPlayback(token);
      } else {
        setError("Could not complete Spotify login.");
      }
      setAuthInProgress(false);
    };

    const loadExisting = async () => {
      const token = await getValidAccessToken(clientId);
      if (token) {
        await loadPlayback(token);
      }
    };

    handleAuthCallback();
    loadExisting();
  }, [clientId]);

  const startLogin = async () => {
    if (!clientId || !isBrowser) {
      setError(
        "Missing Spotify client ID. Set NEXT_PUBLIC_SPOTIFY_CLIENT_ID in your env."
      );
      return;
    }

    const verifier = generateCodeVerifier();
    const challenge = await createCodeChallenge(verifier);
    window.localStorage.setItem(VERIFIER_KEY, verifier);

    const params = new URLSearchParams({
      response_type: "code",
      client_id: clientId,
      scope: SCOPES,
      redirect_uri: getRedirectUri(),
      code_challenge_method: "S256",
      code_challenge: challenge,
      spotify_auth: "1",
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  const statusLabel = playback
    ? playback.isPlaying
      ? "Listening now"
      : "Last played"
    : "Not connected";

  const track = playback?.track;
  const imageUrl = track?.album?.images?.[0]?.url;
  const artistNames = track?.artists.map((artist) => artist.name).join(", ") ?? "";

  return (
    <div className="mt-4 w-full max-w-xl rounded-xl border border-white/10 bg-[#121212] px-4 py-3 text-sm shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-6 items-center gap-1 rounded-full bg-[#1DB954]/10 px-2">
            <span className="h-2 w-2 rounded-full bg-[#1DB954]" />
            <span className="text-[11px] font-medium text-[#1DB954]">
              Spotify
            </span>
          </div>
          <span className="text-[11px] text-white/40">{statusLabel}</span>
        </div>
        <button
          onClick={startLogin}
          className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-white/80 transition hover:bg-white/10"
          disabled={authInProgress}
        >
          {authInProgress ? "Connecting…" : "Connect"}
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-md bg-white/5">
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={track?.name ?? "Album art"}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[10px] text-white/40">
                No art
              </div>
            )}
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-white">
              {loading ? "Loading track…" : track?.name ?? "No track yet"}
            </div>
            <div className="mt-1 truncate text-[12px] text-white/40">
              {artistNames || (error ? "" : "Connect to see your music")}
            </div>
          </div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80">
          <div className="ml-[2px] h-0 w-0 border-y-8 border-l-10 border-y-transparent border-l-white" />
        </div>
      </div>

      {error && (
        <p className="mt-2 text-[11px] text-red-400/80">{error}</p>
      )}
    </div>
  );
}

