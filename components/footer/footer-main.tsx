"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { navLinks } from "../navbar/nav-links"

export function FooterMain() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
       <div className="flex items-center gap-3 mb-4">
  <div className="bg-white p-1 rounded">
    <Image
      src="/logo1.png"
      alt="PT Buana Raya Wardani Logo"
      width={40}
      height={40}
      className="rounded"
    />
  </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold">PT BUANA RAYA WARDANI</span>
              <span className="text-xs text-gray-300">Your Trusted Landscape & Horticulture Partner</span>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            PT Buana Raya Wardani is a trusted company specializing in the supply of ornamental plants and comprehensive
            landscape solutions.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="h-4 w-4" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#services"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <ChevronRight className="h-4 w-4" />
                Ornamental Plant Supply
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <ChevronRight className="h-4 w-4" />
                Garden Construction
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <ChevronRight className="h-4 w-4" />
                Garden Maintenance
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <ChevronRight className="h-4 w-4" />
                Custom Landscaping Solutions
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-300">
                Jl. Manisrenggo Km 3, Kebondalem Lor, Prambanan, Klaten, Central Java – Indonesia
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm text-gray-300">+62 856-4304-2043 (Ririn Arini)</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm text-gray-300">businessdevelopment@buanarayawardani.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
