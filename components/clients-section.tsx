"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectMapCarousel() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [startIndex, setStartIndex] = useState(0)

  const locations = [
"Juanda International Airport - Jl. Ir. Haji Juanda, Betro, Sidoarjo, Jawa Timur 61253",
"PLTU Paiton - Area Sawah, Bhinor, Probolinggo, Jawa Timur 67291",
"Masjid Agung Kauman - Jl. Aloon-Aloon Barat No.2, Magelang, Jawa Tengah 56121",
"Moritz Hill Borobudur Resort - Bumi Segoro, Borobudur, Magelang, Jawa Tengah 56553",
"Senjadi Café - Jl. Raya Manisrenggo - Prambanan, Klaten, Jawa Tengah 57454",
"Kakung Sableng Resto - Jl. Raya Tengah No.7A, Jakarta Timur 13760",
"Taman Wisata Soko Alas - Nganjat, Polanharjo, Klaten, Jawa Tengah 57474",
"Umbul Kemanten - Boto, Wunut, Klaten, Jawa Tengah 57482",
"Sasana Kridha Jaya - Karangmalang, Sragen, Jawa Tengah 57282",
"Sindu Kusuma Edupark - Jl. Jambon, Sleman, DIY 55284",
"Bakpia Tugu Factory - Cupuwatu I, Sleman, DIY",
"Balai Pengujian Laik Jalan - Cibitung, Bekasi, Jawa Barat 17520",
"Sewu Padi Hotel - Kaliurang, Sleman, DIY / Gianyar, Bali 80572",
"D’Salvatore Hotel - Maguwoharjo, Sleman, DIY 55281",
"PT. Santoso Cipta Sejahtera - Godean, Yogyakarta",
"Joglo Tobong Café - Wonosari, Gunungkidul, DIY",
"Keraton Surakarta - Baluwarti, Surakarta, Jawa Tengah 57144",
"Tawangsari Waterboom - Karanganyar, Surakarta",
"Mutiara SIS Al-Jufri Airport - Palu, Sulawesi Tengah 94111",
"Kawasan Industri Panbil - Batam 29433",
"Kintamani, Bali",
"Denpasar, Bali",
"Kuta, Bali",
"Surakarta Hadiningrat Palace",
  ]

  const visibleCards = 3

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - visibleCards))
  }

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= locations.length ? 0 : prev + visibleCards
    )
  }

  return (
    <section ref={ref} className="w-full py-16 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-6">Project Locations</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            We’ve delivered our work across various key sites throughout Indonesia.
          </p>
        </motion.div>

        {/* Map Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-full max-w-6xl mx-auto aspect-[16/9] rounded-xl overflow-hidden mb-12"
        >
          <Image
            src="/map-indonesia5.jpg" // Ganti sesuai path gambarmu
            alt="Indonesia Project Map"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Slider - 3 cards */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {locations.slice(startIndex, startIndex + visibleCards).map((location, index) => (
              <motion.div
                key={startIndex + index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-6 bg-white border border-green-100 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="h-2 w-2 rounded-full bg-green-600 mb-2"></div>
                <p className="text-gray-700">{location}</p>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white rounded-full shadow hidden md:flex"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white rounded-full shadow hidden md:flex"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
