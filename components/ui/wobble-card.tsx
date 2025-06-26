"use client"
import { cn } from "@/lib/utils"
import type React from "react"

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode
  containerClassName?: string
  className?: string
}) => {
  return (
    <div className={cn("mx-auto w-full bg-indigo-800 relative rounded-2xl overflow-hidden", containerClassName)}>
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <motion.div
          style={{
            transform: "translateZ(0)",
          }}
          className={cn("h-full px-4 py-20 sm:px-10", className)}
        >
          <Noise />
          {children}
        </motion.div>
      </div>
    </div>
  )
}

const Noise = () => {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 0 }}
      animate={{
        scale: [1, 1.1, 1.2],
        opacity: [0, 0.05, 0.1],
        rotate: [0, 1, 0],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute inset-0 w-full h-full transform [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage:
          "url(data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E)",
      }}
    />
  )
}

import { motion } from "framer-motion"
