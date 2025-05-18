"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { SectionDecoration } from "./section-decoration"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <SectionDecoration position="top-right" />
      <SectionDecoration position="bottom-left" />

      <div ref={ref} className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800"
          >
            Message from the Director
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 md:text-lg">
            At PT Buana Raya Wardani, we believe that creating green, beautiful spaces is not just a business—it's our
            commitment to enhancing life and the environment. Since our humble beginnings, our vision has been rooted in
            excellence, professionalism, and sustainability.
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-700 md:text-lg">
            We understand that every garden tells a story, and behind each project is a unique vision that deserves
            thoughtful execution. With the support of our skilled team and loyal partners, we've grown into a trusted
            name in landscaping and plant supply.
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-700 md:text-lg">
            We are dedicated to continuously learning, innovating, and improving so we can better serve our clients and
            make meaningful contributions to greener communities across Indonesia.
          </motion.p>
        </motion.div>
        <div className="space-y-4 lg:pl-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-lg overflow-hidden shadow-xl mb-8"
          >
            <Image
              src="/hero-1.jpeg"
              alt="Landscaping project"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-700 md:text-lg"
          >
            PT Buana Raya Wardani is a trusted company specializing in the supply of ornamental plants and comprehensive
            landscape solutions. Backed by a team of professionals experienced in planning and execution, we provide
            high-quality services ranging from modern minimalist gardens, landscape gardens, to dry garden
            installations.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-700 md:text-lg"
          >
            Since our establishment, we have continuously grown and adapted through years of experience and learning.
            Our commitment to excellence, support from strategic partners, and an effective management system have
            positioned us as a reliable partner in greening various environments across Indonesia.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
