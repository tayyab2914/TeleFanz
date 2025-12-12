"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bell, Sparkles } from "lucide-react"
import { getDeviceStoreLink } from "@/lib/store-links"


export default function ComingSoonPage() {
  const handleDownloadClick = () => {
    window.open(getDeviceStoreLink(), "_blank")
  }

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a0a2e_0%,_#0d0015_50%,_#050008_100%)]" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[150px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">


          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8">
            <Bell className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Coming Soon</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Sign In is <span className="text-gradient">Coming Soon</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
            We're working hard to bring you an amazing sign-in experience. Stay tuned for updates and be the first to
            know when it's ready!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 h-14 px-8 rounded-2xl border-0"
            >
              <Link href="/">Return Home</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 rounded-2xl border-white/20 hover:bg-white/10 bg-white/5 text-white hover:text-white"
              onClick={handleDownloadClick}
            >
              Download App Instead
            </Button>
          </div>

          {/* Social proof */}
          <p className="text-white/40 text-sm mt-12">
            In the meantime, download our app and start connecting with millions of creators!
          </p>
        </div>
      </div>
    </main>
  )
}
