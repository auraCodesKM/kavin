"use client"
import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export const FollowingPointer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [isInside, setIsInside] = useState<boolean>(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile || !rect) return
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      setPosition({
        x: e.clientX - rect.left + scrollX,
        y: e.clientY - rect.top + scrollY,
      })
    },
    [rect, isMobile],
  )

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return
    setIsInside(false)
  }, [isMobile])

  const handleMouseEnter = useCallback(() => {
    if (isMobile || !rect) return
    setIsInside(true)
  }, [rect, isMobile])

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [])

  if (isMobile) {
    return <div className={cn("relative", className)}>{children}</div>
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>{isInside && <FollowPointer x={position.x} y={position.y} />}</AnimatePresence>
      {children}
    </div>
  )
}

export const FollowPointer = ({ x, y }: { x: number; y: number }) => {
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50 pointer-events-none bg-indigo-500/80 shadow-lg"
      style={{ top: y, left: x }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.1 }}
    />
  )
}
