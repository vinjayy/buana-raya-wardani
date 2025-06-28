"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { SectionDecoration } from "./section-decoration"

export default function ProductsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const products = [
    {
      name: "Pucuk Merah (Red Shoot)",
      description: "Hedge or border plant with green and red leaves.",
      image: "/pucuk-merah.jpeg?height=400&width=300",
    },
    {
      name: "Bambu Kuning",
      description: "Vertical stem plants for a modern/minimalist garden style.",
      image: "/ekor-kuda.jpeg?height=400&width=300",
    },
    {
      name: "Sirih Gading (Golden Pothos)",
      description: "A tough climbing plant for walls or ground cover.",
      image: "/sirih-gading.jpeg?height=400&width=300",
    },
    {
      name: "The-Tehan",
      description: "Versatile shrub for hedges and garden accents.",
      image: "/tehtehan.jpeg?height=400&width=300",
    },
    {
      name: "Rumput Jepang (Japanese Grass)",
      description: "Fine grass for a neat lawn appearance.",
      image: "/rumput-jepang.jpeg?height=400&width=300",
    },
  ]

  return (
    <section id="products" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <SectionDecoration position="bottom-left" className="rotate-180" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">Our Products</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-lg">
              Premium ornamental plants for every landscape need
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <Card className="overflow-hidden border-2 border-green-100 h-full">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full object-cover h-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-800">{product.name}</h3>
                  <p className="mt-2 text-gray-700">{product.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
