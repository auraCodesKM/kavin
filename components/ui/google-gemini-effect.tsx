"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type React from "react"
import { useRef } from "react"

export const GoogleGeminiEffect = ({
  children,
  className,
  pathLengths = [0.38, 0.51, 0.25],
}: {
  children: React.ReactNode
  className?: string
  pathLengths?: number[]
}) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className={cn("relative h-full w-full", className)} ref={ref}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0,400 Q360,200 720,400 T1440,400"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: pathLengths[0], opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />

        <motion.path
          d="M0,300 Q360,100 720,300 T1440,300"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: pathLengths[1], opacity: 1 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />

        <motion.path
          d="M0,500 Q360,300 720,500 T1440,500"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: pathLengths[2], opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </svg>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
