"use client"

import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export default function ClientsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const clients = [
    { name: "Client 1", logo: "/logo1.png?height=100&width=200" },
    { name: "Client 2", logo: "/logo1.png?height=100&width=200" },
    { name: "Client 3", logo: "/logo1.png?height=100&width=200" },
    { name: "Client 4", logo: "/logo1.png?height=100&width=200" },
    { name: "Client 5", logo: "/logo1.png?height=100&width=200" },
    { name: "Client 6", logo: "/logo1.png?height=100&width=200" },
    { name: "Client 7", logo: "/logo1.png?height=100&width=200" },
    { name: "Client 8", logo: "/logo1.png?height=100&width=200" },
  ]

  return (
    <section id="clients" ref={ref} className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">Our Clients</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-lg">
              Trusted by leading organizations across Indonesia
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={200}
                  height={100}
                  className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
