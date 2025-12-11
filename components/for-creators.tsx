"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Gift, TrendingUp, DollarSign, Users, Crown, ArrowRight } from "lucide-react"

const benefits = [
  {
    icon: Gift,
    title: "Receive Gifts",
    description: "Fans can send virtual gifts during your live streams",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Audience",
    description: "Powerful discovery tools to reach new followers",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: DollarSign,
    title: "Monetize Content",
    description: "Turn your passion into income with multiple revenue streams",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Create a loyal fanbase with exclusive content",
    gradient: "from-purple-500 to-violet-500",
  },
]

export function ForCreators() {
  return (
    <section id="for-creators" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a0a2e_0%,_#0d0015_100%)]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Main phone */}
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-purple-500/50 rounded-[3rem] blur-[60px] scale-90" />
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 rounded-[3rem] opacity-60 blur-sm" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 to-purple-500/40 rounded-[2.5rem] blur-[40px] scale-90" />
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

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
              <Crown className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">For Creators & Partners</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Turn Your Passion <span className="text-gradient">Into a Career</span>
            </h2>

            <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
              Join thousands of creators who are building their brand and earning on Telefanz. Our platform provides all
              the tools you need to succeed.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-10">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex gap-4 p-4 sm:p-5 rounded-2xl glass-card hover:border-purple-500/30 transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base sm:text-lg">{benefit.title}</h3>
                    <p className="text-sm text-white/40 mt-1 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 h-14 px-8 rounded-2xl group border-0"
              >
                Apply as Creator
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-2xl border-white/20 hover:bg-white/10 bg-white/5 text-white hover:text-white"
              >
                Partner with Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
