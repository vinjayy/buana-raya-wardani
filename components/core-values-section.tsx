"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Leaf } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function CoreValuesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      title: "Excellence",
      description: "We strive to exceed expectations in quality, service, and project outcomes.",
      icon: <Award className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Integrity",
      description: "We uphold honesty and transparency in every aspect of our business.",
      icon: <Heart className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices in landscaping and plant cultivation.",
      icon: <Leaf className="h-10 w-10 text-green-600" />,
    },
  ]

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">Core Values</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-lg">
              The principles that guide our work and relationships
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="border-2 border-green-100 overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="rounded-full bg-green-50 p-4"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-green-800">{value.title}</h3>
                  <p className="text-center text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
