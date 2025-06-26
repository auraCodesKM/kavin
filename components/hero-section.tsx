"use client"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { Cover } from "@/components/ui/cover"
import { FlipWords } from "@/components/ui/flip-words"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { motion } from "framer-motion"
import { Spotlight } from "@/components/ui/spotlight"

export function HeroSection() {
  const words = ["AI Solutions", "FinTech Apps", "Web3 Platforms", "HealthTech Tools", "Automation Systems"]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <GoogleGeminiEffect>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#6366f1" />

        <HeroHighlight>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kavin-xAVh77qcqwBUFs5RV2yP4JrjXwrbL2.jpeg"
                alt="Kavin Thakur"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-2xl"
              />
            </div>
            Hi, I'm <Highlight className="text-gray-900 dark:text-white">Kavin Thakur</Highlight>
            <br />I build <FlipWords words={words} className="text-indigo-500 dark:text-indigo-400" />
            <br />
            <Cover>at warp speed</Cover>
          </motion.div>
        </HeroHighlight>
      </GoogleGeminiEffect>
    </section>
  )
}
