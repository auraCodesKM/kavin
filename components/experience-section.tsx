"use client"
import { Timeline } from "@/components/ui/timeline"
import { GlowingStarsCard } from "@/components/ui/glowing-stars-card"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { Cover } from "@/components/ui/cover"
import { motion } from "framer-motion"

export function ExperienceSection() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <GlowingStarsCard>
            <div className="p-4 md:p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">
                    Promotions Member - NSS
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base md:text-lg mb-3 md:mb-4 font-semibold">
                    Chitkara University, Patiala
                  </p>
                  <ul className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base list-none space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      Public Relations & Community Engagement
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Event Promotion & Outreach
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      Organizing social cause drives
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </GlowingStarsCard>
        </motion.div>
      ),
    },
    {
      title: "Dec. 2024 - Jan. 2025",
      content: (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <GlowingStarsCard>
            <div className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950 dark:to-teal-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">
                    Intern - Data Science
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm sm:text-base md:text-lg mb-3 md:mb-4 font-semibold">
                    Infomo Digital Media Pvt Ltd, Dehradun
                  </p>
                  <ul className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base list-none space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Exploratory Data Analysis (EDA)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      Analyzed and summarized datasets to uncover patterns and insights
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      Worked on organizing and classifying data for machine learning model training
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </GlowingStarsCard>
        </motion.div>
      ),
    },
    {
      title: "Aug. 2024 - Present",
      content: (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <GlowingStarsCard>
            <div className="p-4 md:p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">
                    Team Lead - Competitions
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm sm:text-base md:text-lg mb-3 md:mb-4 font-semibold">
                    Team M_2_S
                  </p>
                  <ul className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base list-none space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      Led winning teams in multiple hackathons including Hackathon 3.0 and The Innovation Nexus
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Coordinated technical development and project management
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                      Mentored team members in AI/ML and web development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </GlowingStarsCard>
        </motion.div>
      ),
    },
  ]

  return (
    <section id="experience" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <GoogleGeminiEffect>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-16 max-w-3xl mx-auto">
              Growing professionally and making impact <Cover>at warp speed</Cover>
            </p>
          </motion.div>
          <Timeline data={data} />
        </div>
      </GoogleGeminiEffect>
    </section>
  )
}