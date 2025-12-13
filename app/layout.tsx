import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Telefanz - The Safest Social Platform for Real Connections",
  description:
    "Join Telefanz to create, share, and connect with millions. Go live, chat with friends, watch endless videos, and turn your passion into a career. Download free on iOS & Android.",
  keywords: [
    "social media",
    "live streaming",
    "video sharing",
    "content creation",
    "social platform",
    "creators",
    "messaging app",
  ],
  authors: [{ name: "Telefanz" }],
  icons: {
    icon: [
      { url: "/icon-192.png" },
    ],
  },
  openGraph: {
    title: "Telefanz - The Safest Social Platform for Real Connections",
    description: "Create, share, and connect with millions. Go live, chat, and turn your passion into a career.",
    type: "website",
    siteName: "Telefanz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telefanz - The Safest Social Platform",
    description: "Create, share, and connect with millions worldwide.",
  },
  robots: "index, follow",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8B5CF6" },
    { media: "(prefers-color-scheme: dark)", color: "#7C3AED" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
