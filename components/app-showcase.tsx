"use client"

import Image from "next/image"

const showcaseItems = [
  {
    image: "/images/300x650bb-20-282-29.webp",
    title: "Watch Endless Videos",
    description: "Scroll endlessly — new videos appear every second.",
  },
  {
    image: "/images/300x650bb-20-283-29.webp",
    title: "Go Live & Connect",
    description: "Send & receive gifts while you go live.",
  },
  {
    image: "/images/300x650bb-20-285-29.webp",
    title: "Chat & Connect",
    description: "Stay in touch through in-app messaging.",
  },
  {
    image: "/images/300x650bb-20-284-29.webp",
    title: "Photo & Video Editor",
    description: "Pause & resume recording in a single video.",
  },
]

export function AppShowcase() {
  return (
    <section id="for-users" className="py-20 sm:py-28 lg:py-36 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1a0a2e_0%,_#0d0015_100%)]" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-300">For Users</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Your Personalized <span className="text-gradient-purple">Social Experience</span>
          </h2>
          <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Share your moments — there&apos;s always a place for you on Telefanz.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-3xl p-2 sm:p-3">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />

                {/* Phone mockup */}
                <div className="relative aspect-[9/19.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-purple-500/30 transition-all duration-500">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 25vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="mt-4 sm:mt-6 text-center">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/40 mt-1 leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
