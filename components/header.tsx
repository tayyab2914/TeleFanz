"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { getDeviceStoreLink } from "@/lib/store-links"
import Image from "next/image"

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#for-users", label: "For Users" },
  { href: "/#for-creators", label: "For Creators" },
  { href: "/news", label: "News" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleDownloadClick = () => {
    window.open(getDeviceStoreLink(), "_blank")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/80 backdrop-blur-2xl border-b border-border/30" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Image src="/images/logo.png" alt="Telefanz Logo" width={160} height={40} />
            <div className="relative">
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 xl:px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">

            <Button
              className="bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 border-0"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>

          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-5 h-5">
              <Menu
                className={cn(
                  "absolute inset-0 text-white transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 text-white transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/10">
            <Button
              className="w-full h-12 bg-gradient-to-r from-purple-500 to-violet-600 text-white border-0"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
