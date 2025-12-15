"use client"

import { Shield, Users, Coins, CheckCircle, Search, Globe, DollarSign, Gift } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Coins,
    title: "More Earnings",
    description: "Earn Coinzz when signing up or when Fanz support what you post",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: CheckCircle,
    title: "Plus+ Verification",
    description: "Get noticed by having your profile Verified in few easy steps",
    gradient: "from-purple-500 to-blue-600",
  },
  {
    icon: Gift,
    title: "Live Stream Revenue",
    description: "Get paid for being Live & Enjoy gifts during live streams up to 50,000 Coinzz per gift",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Clean Community",
    description: "Every post is checked before going live to make sure we keep a safe environment",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Easy Verification",
    description: "No minimum Fanz required for profile verification or to start posting content",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Search,
    title: "Search By Category",
    description: "Find Verified Content Creators by their category in a simple click",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Variety Matters",
    description: "Apps are available in multiple different languages",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: DollarSign,
    title: "Get More For Less",
    description: "Better Coinzz Purchase Plans - Just More Affordable",
    gradient: "from-purple-600 to-violet-600",
  },
  {
    icon: Coins,
    title: "Earn More & More & More",
    description: "Redeem 50% of your revenue to the bank account you choose",
    gradient: "from-blue-600 to-purple-600",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a0a2e_0%,_#0d0015_100%)]" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-300">What Makes us Different</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Your Personalized <span className="text-gradient-purple">Social Experience</span>
          </h2>
          <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Whether you are a Celebrity, Content Creator or a Streamer that loves to share moments, there is always a
            place for you on Telefanz.
          </p>
         
        </div>

        <div className="grid place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                "group relative p-6 sm:p-8 rounded-3xl",
                "glass-card",
                "hover:border-purple-500/30 transition-all duration-500",
                "hover:-translate-y-2",
                "max-w-sm w-full" 
              )}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col items-center text-center">
                <div
                  className={cn(
                    "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6",
                    "bg-gradient-to-br shadow-lg",
                    feature.gradient,
                    "group-hover:scale-110 group-hover:shadow-xl transition-all duration-500"
                  )}
                >
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-white/50 leading-relaxed text-left w-full">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
