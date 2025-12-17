import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: "Adesh Ingale",
  description: "Adesh Ingale - Software Engineer",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      
      <body>{children}</body>
    </html>
  )
}
