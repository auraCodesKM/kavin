"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const ContainerTextFlip = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <motion.div
      initial={{ rotateX: 90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("perspective-1000", className)}
    >
      {text}
    </motion.div>
  )
}
