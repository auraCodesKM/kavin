"use client"
import { cn } from "@/lib/utils"
import type React from "react"
import { useState } from "react"

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string
  revealText: string
  children?: React.ReactNode
  className?: string
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = event.currentTarget.getBoundingClientRect()
    const mouseX = event.clientX
    const newWidthPercentage = ((mouseX - left) / width) * 100
    setWidthPercentage(newWidthPercentage)
  }

  const handleMouseLeave = () => {
    setWidthPercentage(0)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "bg-[#1d1c20] border border-white/[0.08] w-[40rem] rounded-lg p-8 relative overflow-hidden",
        className,
      )}
    >
      <div className="relative flex items-center overflow-hidden">
        <div
          className="absolute bg-[#323238] inset-0 transition-all duration-300 ease-out"
          style={{
            width: `${widthPercentage}%`,
          }}
        />
        <div className="relative z-20 text-white text-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="text-white">{text}</span>
          <div
            className="absolute inset-0 text-white transition-all duration-300 ease-out overflow-hidden"
            style={{
              width: `${widthPercentage}%`,
            }}
          >
            {revealText}
          </div>
        </div>
      </div>
      <div className="mt-4 text-neutral-300">{children}</div>
    </div>
  )
}
