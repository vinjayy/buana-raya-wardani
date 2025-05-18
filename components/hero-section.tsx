"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Main background image - replace '/hero-bg.png' with your own image */}
      <div className="absolute inset-0 bg-[url('/hero-1.jpeg?height=1080&width=1920')] bg-cover bg-center bg-no-repeat brightness-50"></div>

      {/* Decorative elements - replace these images with your own */}
      <div className="absolute inset-0 overflow-hidden">

      </div>

      <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Your Trusted Landscape & Horticulture Partner Update nih guys
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl"
        >
          Creating beautiful, sustainable green spaces across Indonesia with expertise and passion
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <Link href="#contact">
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 transition-all duration-300 transform hover:scale-105"
            >
              Hubungi Kami
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
