"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { navLinks } from "./nav-links"

export function NavbarDesktop() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 hidden md:block",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white",
      )}
    >
      {/* Top bar with contact info */}
      <div className="bg-green-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>0856-4304-2043</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Jl. Manisrenggo Km 3, Prambanan, Klaten</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="text-xs hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo1.png?height=50&width=50"
              alt="PT Buana Raya Wardani Logo"
              width={50}
              height={50}
              className="rounded"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold md:text-lg">PT BUANA RAYA WARDANI</span>
              <span className="text-xs text-muted-foreground">Your Trusted Landscape & Horticulture Partner</span>
            </div>
          </Link>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-green-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      </div>
    </header>
  )
}
