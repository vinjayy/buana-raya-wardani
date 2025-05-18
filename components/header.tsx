"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#gallery", label: "Gallery" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo1.png" alt="PT Buana Raya Wardani Logo" width={40} height={40} className="rounded" />
            <div className="flex flex-col">
              <span className="text-sm font-bold md:text-base">PT BUANA RAYA WARDANI</span>
              <span className="text-xs text-muted-foreground hidden md:inline-block">
                Your Trusted Landscape & Horticulture Partner
              </span>
            </div>
          </Link>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-green-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:flex items-center gap-4 text-xs"
        >
          <div className="flex items-center gap-1">
            <Phone className="h-3 w-3 text-green-700" />
            <span>0856-4304-2043</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-green-700" />
            <span>Jl. Manisrenggo Km 3, Prambanan, Klaten</span>
          </div>
        </motion.div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t"
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-700"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 text-sm border-t pt-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-700" />
                <span>0856-4304-2043</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-700" />
                <span>Jl. Manisrenggo Km 3, Prambanan, Klaten</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
