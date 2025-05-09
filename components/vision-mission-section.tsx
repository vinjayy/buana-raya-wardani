"use client"

import { CheckCircle } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function VisionMissionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const missions = [
    "To provide premium ornamental plants that meet market demands.",
    "To deliver reliable, customized, and high-quality landscaping services.",
    "To support environmental sustainability through innovative green designs.",
    "To build long-term partnerships based on trust and satisfaction.",
    "To continually develop the skills and professionalism of our team.",
  ]

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">Vision</h2>
            <div className="relative p-6 bg-green-50 rounded-lg border-l-4 border-green-600 shadow-md">
              <p className="text-gray-700 md:text-lg italic">
                "To be a leading and sustainable landscape and horticultural company in Indonesia, known for quality,
                creativity, and commitment to green living."
              </p>
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-green-600 rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-green-600 rounded-full"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">Mission</h2>
            <ul className="space-y-3">
              {missions.map((mission, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{mission}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
