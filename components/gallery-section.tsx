"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function GallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/hero-1.jpeg",
      alt: "Landscape project 1",
      category: "Residential",
    },
    {
      src: "/hero-1.jpeg",
      alt: "Landscape project 2",
      category: "Commercial",
    },
    {
      src: "/hero-1.jpeg",
      alt: "Landscape project 3",
      category: "Public Space",
    },
    {
      src: "/hero-1.jpeg",
      alt: "Landscape project 4",
      category: "Residential",
    },
    {
      src: "/hero-1.jpeg",
      alt: "Landscape project 5",
      category: "Commercial",
    },
    {
      src: "/hero-1.jpeg",
      alt: "Landscape project 6",
      category: "Public Space",
    },
  ]

  return (
    <section id="gallery" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
              Project Gallery
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-lg">
              Explore our portfolio of beautiful landscape projects across Indonesia
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-6xl mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-white font-medium">{image.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
              >
                <X className="h-8 w-8" />
              </button>
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged gallery image"
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
