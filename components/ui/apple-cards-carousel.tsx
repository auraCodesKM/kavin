"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

export const AppleCardsCarousel = ({
  items,
  initialScroll = 0,
}: {
  items: {
    category: string
    title: string
    src: string
    content: React.ReactNode
  }[]
  initialScroll?: number
}) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="absolute right-0 top-0 h-full w-[5%] overflow-hidden bg-gradient-to-l" />

        <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
            >
              <Card card={item} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Card = ({
  card,
  index,
}: {
  card: {
    category: string
    title: string
    src: string
    content: React.ReactNode
  }
  index: number
}) => {
  return (
    <motion.button
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      whileHover={{
        y: -10,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-8">
        <motion.p className="text-white text-sm md:text-base font-medium font-sans text-left">{card.category}</motion.p>
        <motion.p className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
          {card.title}
        </motion.p>
      </div>
      <BlurImage src={card.src} alt={card.title} fill className="object-cover absolute z-10 inset-0" />
    </motion.button>
  )
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: {
  height?: number
  width?: number
  src: string
  className?: string
  alt?: string
  [key: string]: any
}) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <img
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src || "/placeholder.svg"}
      width={width}
      height={height}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  )
}
