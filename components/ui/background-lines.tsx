"use client"
import { cn } from "@/lib/utils"
import type React from "react"

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode
  className?: string
  svgOptions?: {
    duration?: number
  }
}) => {
  return (
    <div className={cn("relative flex items-center justify-center w-full h-full", className)}>
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1065_8)">
            <line
              x1="0"
              y1="350"
              x2="700"
              y2="350"
              stroke="url(#paint0_linear_1065_8)"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
            <line
              x1="350"
              y1="0"
              x2="350"
              y2="700"
              stroke="url(#paint1_linear_1065_8)"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          </g>
          <defs>
            <linearGradient id="paint0_linear_1065_8" x1="0" y1="350" x2="700" y2="350" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="0.5" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_1065_8" x1="350" y1="0" x2="350" y2="700" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="0.5" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_1065_8">
              <rect width="700" height="700" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
