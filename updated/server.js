import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  const token = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
    { headers: { Authorization: `Basic ${token}` } }
  );
  return res.data.access_token;
}

// 🎧 Get Currently Playing Song
app.get("/spotify/current", async (req, res) => {
  const access = await getAccessToken();
  try {
    const playback = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${access}` }
    });

    if (playback.status === 204) return res.json({ isPlaying: false });

    res.json(playback.data);
  } catch {
    return res.json({ isPlaying: false });
  }
});

// ▶️ Send Play/Pause Command
app.get("/spotify/playpause", async (req, res) => {
  const access = await getAccessToken();
  await axios.put("https://api.spotify.com/v1/me/player/pause", {}, {
    headers: { Authorization: `Bearer ${access}` }
  });
  res.json({ success: true });
});

app.listen(5000, () => console.log("Spotify server running on port 5000"));
