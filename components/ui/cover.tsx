"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type React from "react"

export const Cover = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 1,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-teal-300 to-indigo-300 dark:from-teal-500 dark:to-indigo-500`,
        className,
      )}
    >
      {children}
    </motion.span>
  )
}
