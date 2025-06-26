"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-500 to-teal-500 text-white py-3 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">🚀 Available for new projects and collaborations!</span>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-white hover:text-gray-200 transition-colors">
            <X size={20} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
