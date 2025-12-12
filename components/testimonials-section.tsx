"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    handle: "@sarahj_creates",
    content:
      "Telefanz changed my life! I went from 0 to 100k followers in just 3 months. The community is so supportive and the live streaming feature is amazing.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    handle: "@marcusmusic",
    content:
      "As a musician, the music library feature is incredible. I can add licensed tracks to my videos without any copyright issues. Game changer!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    handle: "@em_fitness",
    content:
      "The video editor is so intuitive! I love being able to pause and resume recording. My content has never looked better.",
    rating: 5,
  },
  {
    name: "James Wilson",
    handle: "@jameswilson",
    content:
      "Finally a social platform that prioritizes safety. I feel comfortable sharing my life here knowing my data is protected.",
    rating: 5,
  },
  {
    name: "Aria Kim",
    handle: "@aria_style",
    content:
      "The gift system during live streams has helped me earn while doing what I love. Telefanz truly cares about creators.",
    rating: 5,
  },
  {
    name: "David Martinez",
    handle: "@davidm_vlogs",
    content:
      "Best app I've ever used for connecting with my audience. The chat features are seamless and the UI is beautiful.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a0a2e_0%,_#0d0015_100%)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
            <span className="text-sm font-medium text-purple-300">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Loved by Creators <span className="text-gradient-purple">Worldwide</span>
          </h2>
          <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            See what our community has to say about their Telefanz experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-3xl glass-card hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-purple-500/20 group-hover:text-purple-500/40 transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-base text-white/70 leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author - purple only gradient */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/40">{testimonial.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
