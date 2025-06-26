"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type React from "react"
import { useRef } from "react"

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number
  opacities?: number[]
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
}) => {
  return (
    <div className={cn("h-full relative bg-white dark:bg-black w-full", containerClassName)}>
      <div className="h-full w-full">
        {showGradient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-gray-900 to-[84%]"
          />
        )}
        <DotMatrix
          colors={colors ?? [[0, 255, 255]]}
          dotSize={dotSize ?? 3}
          opacities={opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]}
          shader={`
            float animation_speed_factor = ${animationSpeed.toFixed(1)};
            float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
            opacity *= step(intro_offset, u_time * animation_speed_factor);
            opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
          `}
          center={["x", "y"]}
        />
      </div>
    </div>
  )
}

interface DotMatrixProps {
  colors?: number[][]
  opacities?: number[]
  totalSize?: number
  dotSize?: number
  shader?: string
  center?: ("x" | "y")[]
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [1],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 h-full w-full">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dotMatrix" x="0" y="0" width={totalSize} height={totalSize} patternUnits="userSpaceOnUse">
            <circle
              cx={totalSize / 2}
              cy={totalSize / 2}
              r={dotSize / 2}
              fill={`rgb(${colors[0]?.join(",") ?? "0,0,0"})`}
              fillOpacity={opacities[0] ?? 1}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotMatrix)" />
      </svg>
    </div>
  )
}
