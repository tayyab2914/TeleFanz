"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Play, Download, Users, Star } from "lucide-react"
import { FlowingLines } from "./wave-decoration"
import { STORE_LINKS } from "@/lib/store-links"
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a0a2e_0%,_#0d0015_50%,_#050008_100%)]" />

      <div className="absolute top-1/4 left-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-600/30 rounded-full blur-[100px] sm:blur-[150px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-[5%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-purple-600/20 rounded-full blur-[100px] sm:blur-[150px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />

      {/* Flowing lines decoration */}
      <FlowingLines className="left-0 top-0 h-full w-[200px] opacity-20" />
      <FlowingLines className="right-0 top-0 h-full w-[200px] opacity-20 scale-x-[-1]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="text-center lg:text-left order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-purple-300">Now Available on iOS & Android</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              <span className="block">Social Media</span>
              <span className="block">Made <span className="text-gradient">Better.</span></span>
              
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Your platform for exciting, spontaneous, genuine videos & photos. Watch and engage with what you like.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-white/90 gap-3 h-16 sm:h-18 px-6 sm:px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
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
                className="gap-3 h-16 sm:h-18 px-6 sm:px-8 border-white/20 hover:bg-white/10 bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-white hover:text-white"
              >
                <a href={STORE_LINKS.playStore} target="_blank" rel="noopener noreferrer">
                  <BiLogoPlayStore  className="w-7! h-7!" />
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs opacity-60 leading-none">Get it on</div>
                    <div className="font-semibold text-sm sm:text-base leading-tight">Google Play</div>
                  </div>
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-10 sm:mt-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">17K+</div>
                  <div className="text-xs sm:text-sm text-white/50">Downloads</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">9K+</div>
                  <div className="text-xs sm:text-sm text-white/50">Active Users</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">2.9K+</div>
                  <div className="text-xs sm:text-sm text-white/50">Verified Creators</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center order-2 lg:order-2">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-violet-500/40 to-purple-600/50 rounded-[3rem] blur-[60px] sm:blur-[80px] scale-90" />

              {/* Phone frame */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-violet-500 to-purple-600 rounded-[3rem] opacity-60 blur-sm" />
                <Image
                  src="/images/hero-img.webp"
                  alt="Telefanz App - Social Feed"
                  width={300}
                  height={650}
                  className="relative z-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl w-[260px] sm:w-[300px] lg:w-[320px] xl:w-[340px] h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
