"use client"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { Cover } from "@/components/ui/cover"
import { WorldMap } from "@/components/ui/world-map"
import { motion } from "framer-motion"

export function ContactSection() {
  const dots = [
    {
      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
      end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    },
    {
      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
      end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    },
    {
      start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London
      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    },
  ]

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-24 relative overflow-hidden">
      <GoogleGeminiEffect>
        <BackgroundBeamsWithCollision>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 md:mb-16 lg:mb-20"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Amazing
                </span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                I'm always excited to work on new projects and collaborate with amazing people. Whether you need AI
                solutions, web applications, or just want to chat about technology, I'd love to hear from you and
                respond <Cover>at warp speed</Cover>!
              </motion.p>
            </motion.div>

            {/* Call to Action Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mb-12 md:mb-16 lg:mb-20"
            >
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center max-w-md mx-auto">
                <motion.a
                  href="mailto:kavinthakur@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>

            {/* World Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                  Global Connections
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Connecting with clients and collaborators worldwide to create impactful digital solutions
                </p>
              </div>

              <div className="h-64 md:h-80 lg:h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-6">
                <WorldMap dots={dots} />
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 md:mt-16 lg:mt-20"
            >
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-4">
                Ready to start your next project?
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
              >
                <span>Let's make it happen</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </BackgroundBeamsWithCollision>
      </GoogleGeminiEffect>
    </section>
  )
}
