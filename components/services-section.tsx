"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Flower, Shovel, Scissors, PenTool } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { SectionDecoration } from "./section-decoration"

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Ornamental Plant Supply",
      description:
        "Wide selection of healthy and well-maintained plants for residential, commercial, and public spaces.",
      icon: <Flower className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Garden Construction",
      description:
        "Design and build outdoor spaces using modern and traditional techniques, including Landscape Gardens, Minimalist Modern Gardens, and Dry Gardens.",
      icon: <Shovel className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Garden Maintenance",
      description: "Routine and specialized maintenance services to keep gardens vibrant and healthy year-round.",
      icon: <Scissors className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Custom Landscaping Solutions",
      description: "Tailored garden concepts with 2D/3D designs, plant suggestions, and full project execution.",
      icon: <PenTool className="h-10 w-10 text-green-600" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <SectionDecoration position="top-left" className="rotate-45" />
      <SectionDecoration position="bottom-right" className="-rotate-45" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">Our Services</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-lg">
              We offer a full range of professional services in landscaping and horticulture, tailored to various
              environments and client needs:
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-2 border-green-100 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="flex flex-col space-y-4 p-6">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="rounded-full bg-green-50 p-4 w-fit"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-green-800">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
