"use client"

import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import { FlowingLines } from "./wave-decoration"

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600" />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Flowing lines */}
      <FlowingLines className="left-0 top-0 h-full w-[150px] opacity-30" />
      <FlowingLines className="right-0 top-0 h-full w-[150px] opacity-30 scale-x-[-1]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-sm font-medium text-white">Join 10M+ Users Worldwide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight">
            Ready to Join the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Community?</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 sm:h-4 bg-white/20 -z-0 rounded" />
            </span>
          </h2>

          <p className="text-white/80 mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Download Telefanz today and start connecting with millions of creators and fans around the world. Your
            audience is waiting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-white/90 gap-3 h-16 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Apple className="w-7 h-7" />
              <div className="text-left">
                <div className="text-xs opacity-70 leading-none">Download on the</div>
                <div className="font-semibold text-base leading-tight">App Store</div>
              </div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 gap-3 h-16 px-8 bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto hover:text-white"
            >
              <Play className="w-7 h-7" fill="currentColor" />
              <div className="text-left">
                <div className="text-xs opacity-70 leading-none">Get it on</div>
                <div className="font-semibold text-base leading-tight">Google Play</div>
              </div>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Free to download
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
