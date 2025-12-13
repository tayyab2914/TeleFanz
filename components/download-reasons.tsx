"use client"

import { Check, Apple, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FlowingLines } from "./wave-decoration"
import { STORE_LINKS } from "@/lib/store-links"
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const reasons = [
  "Watch endless number of videos",
  "Explore videos & photos, just one scroll away",
  "Search Verified Content Creators",
  "Send & Receive gifts during livestreams",
  "Earn Coinzz when joining Telefanz",
  "Pause recording multiple times in one video",
  "Be entertained and inspired by a global community of Verified Content Creators",
  "Add your favorite music or sound to your videos for free",
  "Obtain free access to LIVE Streams to better interact with hosts!",
  "Better Coinzz purchase and redeem plans – Just More Affordable",
]

export function DownloadReasons() {
  return (
    <section id="download" className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a0a2e_0%,_#0d0015_50%,_#050008_100%)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[200px]" />

      <FlowingLines className="left-0 top-0 h-full w-[150px] opacity-15" />
      <FlowingLines className="right-0 top-0 h-full w-[150px] opacity-15 scale-x-[-1]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              Get Started Today
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Download <span className="text-gradient">Telefanz</span>?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
              Telefanz is your platform for exciting, spontaneous, genuine videos & photos.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 mb-10">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/80 text-sm sm:text-base leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl sm:text-2xl font-semibold text-white mb-6">So, what are you waiting for?</p>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Download the TeleFanz app today and start enjoying a world of connections easily made.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-white/90 gap-3 h-16 sm:h-18 px-6 sm:px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <a href={STORE_LINKS.appStore} target="_blank" rel="noopener noreferrer">
                  <FaApple className="w-7! h-7!" />
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs opacity-60 leading-none">Download on the</div>
                    <div className="font-semibold text-sm sm:text-base leading-tight">App Store</div>
                  </div>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-3 h-16 sm:h-18 px-6 sm:px-8 border-white/20 hover:bg-white/10 bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:-translate-y-1 text-white hover:text-white"
              >
                <a href={STORE_LINKS.playStore} target="_blank" rel="noopener noreferrer">
                  <BiLogoPlayStore className="w-7! h-7!" fill="currentColor" />
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs opacity-60 leading-none">Get it on</div>
                    <div className="font-semibold text-sm sm:text-base leading-tight">Google Play</div>
                  </div>
                </a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
