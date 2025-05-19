"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const processes = [
    {
      number: "01",
      title: "Consultation & Site Visit",
      description: "Understanding client needs and site evaluation.",
    },
    {
      number: "02",
      title: "Concept & Design Planning",
      description: "Create design concepts with 2D/3D visualization.",
    },
    {
      number: "03",
      title: "Quotation & Agreement",
      description: "Provide transparent offers and work agreements.",
    },
    {
      number: "04",
      title: "Plant Selection & Procurement",
      description: "Selecting and obtaining quality plants.",
    },
    {
      number: "05",
      title: "Implementation & Installation",
      description: "Design execution by professionals.",
    },
    {
      number: "06",
      title: "Finishing & Quality Control",
      description: "Final inspection to ensure quality and conformity.",
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">Our Process</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-lg">
              How we work to deliver exceptional results for every project
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-2 border-green-100 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-700"></div>
                <CardContent className="flex flex-col space-y-4 p-6">
                  <span className="text-4xl font-bold text-green-600">{process.number}</span>
                  <h3 className="text-xl font-bold text-green-800">{process.title}</h3>
                  <p className="text-gray-700">{process.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
