"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    
  ]

  const projectImages = [
    {
      src: "/hero-1.jpeg?height=600&width=800",
      alt: "Project 1",
    },
    {
      src: "/product-1.jpeg?height=600&width=800",
      alt: "Project 2",
    },
    {
      src: "/project-8.jpeg?height=600&width=800",
      alt: "Project 3",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, projectImages.length])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, projectImages.length])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="projects" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">Key Projects</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-lg">
              Over the years, PT Buana Raya Wardani has proudly contributed to a wide range of landscaping and plant
              supply projects. Our dedication to quality and customer satisfaction has led us to collaborate with
              various public and private institutions across Indonesia.
            </p>
          </div>
        </motion.div>

        {/* Project Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 mb-16 relative max-w-5xl mx-auto"
        >
          <div className="overflow-hidden rounded-lg shadow-xl">
            <div className="relative aspect-[16/9] w-full">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{image.title}</h3>
                    <p className="text-white/80 max-w-2xl">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {projectImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-green-600 w-6" : "bg-gray-300"
                }`}
                onClick={() => {
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 500)
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Project List */}
        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2 p-4 bg-white rounded-lg border-2 border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-300"
              >
                <div className="h-2 w-2 rounded-full bg-green-600"></div>
                <span className="text-gray-700">{project}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
