"use client"

import type React from "react"

import Link from "next/link"
import { Instagram } from "lucide-react"
import { getDeviceStoreLink } from "@/lib/store-links"
import Image from "next/image"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "For Users", href: "#for-users" },
    { label: "For Creators", href: "#for-creators" },
    { label: "News", href: "/news" },
  ],
  company: [{ label: "Contact", href: "/contact" }],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
}

const socialLinks = [{ icon: Instagram, href: "https://www.instagram.com/telefanz.official/", label: "Instagram" }]

export function Footer() {
  const handleDownloadClick = (e: React.MouseEvent, href: string) => {
    if (href === "download") {
      e.preventDefault()
      window.open(getDeviceStoreLink(), "_blank")
    }
  }

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050008]" />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-10 sm:gap-12 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/images/logo.png" alt="Telefanz Logo" width={120} height={40} />
            </Link>
            <p className="mt-6 text-white/40 max-w-xs text-base leading-relaxed">Social Media Made Better.</p>

            {/* Social links */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all duration-300"
                  aria-label={social.label}
                  rel="noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href === "download" ? "#" : link.href}
                    onClick={(e) => handleDownloadClick(e, link.href)}
                    className="text-white/40 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 hover:text-purple-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 hover:text-purple-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm text-center sm:text-left">
            © Copyright {new Date().getFullYear()} All rights reserved by Telefanz Portal.
          </p>
          <p className="text-white/30 text-sm text-center sm:text-right">Made with love for creators everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
