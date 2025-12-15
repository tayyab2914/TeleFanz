"use client"

import { Button } from "@/components/ui/button"
import { Bell, X } from "lucide-react"
import { getDeviceStoreLink } from "@/lib/store-links"

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  const handleDownloadClick = () => {
    window.open(getDeviceStoreLink(), "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl mx-4 rounded-3xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a0a2e_0%,_#0d0015_50%,_#050008_100%)]" />

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-violet-600/20 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-10 py-12 sm:py-16">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>

          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <Bell className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Coming Soon</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Sign In is <span className="text-gradient">Coming Soon</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
              We're working hard to bring you an amazing sign-in experience. Stay tuned for updates and be the first to
              know when it's ready!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">

              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 rounded-2xl border-white/20 hover:bg-white/10 bg-white/5 text-white hover:text-white "
                onClick={handleDownloadClick}
              >
                Download App Instead
              </Button>
            </div>

            {/* Social proof */}
            <p className="text-white/40 text-sm mt-8">
              In the meantime, download our app and start connecting with millions of creators!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
