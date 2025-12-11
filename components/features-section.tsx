"use client"

import { Video, MessageCircle, Music, Camera, Shield, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Video,
    title: "Watch Endless Videos",
    description: "Scroll endlessly — new videos appear every second. Discover trending content tailored just for you.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: MessageCircle,
    title: "Chat & Connect",
    description: "Stay in touch with your friends and family through seamless in-app messaging with voice notes.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Music,
    title: "Music & Sound Library",
    description: "Add music & sounds to your videos — for free! Access thousands of trending tracks and sound effects.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Camera,
    title: "Photo & Video Editor",
    description: "Pause & resume recording in a single video. Apply stunning filters and effects to stand out.",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your privacy matters. Advanced security features keep your data protected at all times.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Users,
    title: "Go Live & Earn",
    description: "Go live and connect with everyone. Send & receive gifts while streaming to your audience.",
    gradient: "from-purple-500 to-pink-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a0a2e_0%,_#0d0015_100%)]" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-300">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Everything You Need to <span className="text-gradient">Create & Connect</span>
          </h2>
          <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Powerful features designed to help you express yourself and build meaningful connections.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative p-6 sm:p-8 rounded-3xl",
                "glass-card",
                "hover:border-purple-500/30 transition-all duration-500",
                "hover:-translate-y-2",
              )}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div
                  className={cn(
                    "w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6",
                    "bg-gradient-to-br shadow-lg",
                    feature.gradient,
                    "group-hover:scale-110 group-hover:shadow-xl transition-all duration-500",
                  )}
                >
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
