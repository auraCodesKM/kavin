"use client"
import { useRef } from "react"
import { motion } from "framer-motion"

interface Point {
  lat: number
  lng: number
  label?: string
}

interface WorldMapProps {
  dots?: Array<{
    start: Point
    end: Point
  }>
  lineColor?: string
}

export const WorldMap = ({ dots = [], lineColor = "#6366f1" }: WorldMapProps) => {
  const svgRef = useRef<SVGSVGElement>(null)

  const projectPoint = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 800
    const y = ((90 - lat) / 180) * 400
    return { x, y }
  }

  return (
    <div className="w-full h-full bg-white dark:bg-black relative overflow-hidden">
      <svg ref={svgRef} viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* World map outline */}
        <path
          d="M158 206c-1-3-2-6-2-10 0-4 1-7 2-10l2-6c1-2 2-4 2-6 0-3-1-5-3-7-2-2-5-3-8-3-4 0-7 2-9 5-2 3-3 7-3 11 0 5 1 9 4 13 2 3 5 5 9 6 3 1 6 1 9 0 2-1 4-2 5-4l1-2c0-1-1-2-2-2s-2 1-2 2c0 1 0 1-1 2-1 1-2 1-4 1-2 0-4-1-5-2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gray-300 dark:text-gray-700"
        />

        {/* Animated dots and lines */}
        {dots.map((dot, index) => {
          const start = projectPoint(dot.start.lat, dot.start.lng)
          const end = projectPoint(dot.end.lat, dot.end.lng)

          return (
            <g key={index}>
              {/* Connection line */}
              <motion.line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke={lineColor}
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.5 }}
              />

              {/* Start point */}
              <motion.circle
                cx={start.x}
                cy={start.y}
                r="3"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              />

              {/* End point */}
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="3"
                fill={lineColor}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.5 + 1 }}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
