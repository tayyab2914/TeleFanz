"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Crown, ArrowRight, Sparkles } from "lucide-react"
import { getDeviceStoreLink } from "@/lib/store-links"

const benefits = [
  {
    icon: Sparkles,
    title: "We make it easy for you",
    description: "Discover and create your own original videos & photos by providing easy-to-use tools",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Crown,
    title: "Main Benefit",
    description: "Be entertained and inspired by a global community of Verified Content Creators",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Authentic Connections",
    description: "Develop authentic connections with your Fanz on the safest social media platform in the world",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Every moment counts",
    description: "Share your joy with the world on Telefanz - capture your daily moments effortlessly",
    gradient: "from-purple-600 to-violet-600",
  },
]

export function ForCreators() {
  const handleDownloadClick = () => {
    window.open(getDeviceStoreLink(), "_blank")
  }

  return (
    <section id="for-creators" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a0a2e_0%,_#0d0015_100%)]" />

      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Main phone */}
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-violet-500/40 to-purple-600/50 rounded-[3rem] blur-[60px] scale-90" />
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-violet-500 to-purple-600 rounded-[3rem] opacity-60 blur-sm" />
                  <Image
                    src="/images/300x650bb-20-281-29.webp"
                    alt="Creator Profile on Telefanz"
                    width={280}
                    height={606}
                    className="relative z-10 rounded-[2.5rem] shadow-2xl w-[240px] sm:w-[280px] lg:w-[300px] h-auto"
                  />
                </div>
              </div>

              {/* Secondary phone */}
              <div
                className="absolute -right-4 sm:-right-16 lg:-right-24 top-16 sm:top-20 z-20 hidden sm:block animate-float-delayed"
                style={{ animationDelay: "1s" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-violet-500/40 rounded-[2.5rem] blur-[40px] scale-90" />
                <Image
                  src="/images/300x650bb-20-286-29.webp"
                  alt="Music Library"
                  width={200}
                  height={433}
                  className="relative rounded-[2rem] shadow-xl w-[160px] sm:w-[180px] lg:w-[200px] h-auto border border-white/10"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm ">
              <Crown className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">For Users & Creators</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight ">
              With Telefanz <span className="text-gradient">You Can Do More</span>
            </h2>

            <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
              You can develop authentic connections with your Fanz on the safest social media platform in the world.
            </p>

                        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-10">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-5 sm:p-6 rounded-3xl glass-card hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                    >
                      <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-white text-lg sm:text-xl mb-3 group-hover:text-purple-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>


            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadClick}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 h-14 px-8 rounded-2xl group border-0"
              >
                Download Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
