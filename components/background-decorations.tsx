"use client"

import { Leaf, Flower, Wind } from "lucide-react"
import { motion } from "framer-motion"

export function BackgroundDecorations() {
  return (
    <>
      {/* Top-right decoration */}
      <div className="fixed top-20 right-0 w-64 h-64 opacity-5 pointer-events-none z-0">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 10 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Leaf className="w-full h-full text-green-800" strokeWidth={0.5} />
        </motion.div>
      </div>

      {/* Bottom-left decoration */}
      <div className="fixed bottom-0 left-0 w-80 h-80 opacity-5 pointer-events-none z-0">
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 5 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Flower className="w-full h-full text-green-700" strokeWidth={0.5} />
        </motion.div>
      </div>

      {/* Middle-right decoration */}
      <div className="fixed top-1/2 -translate-y-1/2 right-10 w-40 h-40 opacity-5 pointer-events-none z-0">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Wind className="w-full h-full text-green-600" strokeWidth={0.5} />
        </motion.div>
      </div>

      {/* Floating shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-800 opacity-5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ y: Math.random() * 100 - 50 }}
            animate={{ y: Math.random() * 100 - 50 }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  )
}
