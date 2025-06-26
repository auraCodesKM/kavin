"use client"
import { Timeline } from "@/components/ui/timeline"
import { GlowingStarsCard } from "@/components/ui/glowing-stars-card"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { Cover } from "@/components/ui/cover"

export function ExperienceSection() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <GlowingStarsCard>
          <div className="p-4 md:p-6">
            <h3 className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Promotions Member - NSS
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-3 md:mb-4">
              Chitkara University, Patiala
            </p>
            <ul className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base list-disc list-inside space-y-1 md:space-y-2">
              <li>Public Relations & Community Engagement</li>
              <li>Event Promotion & Outreach</li>
              <li>Organizing social cause drives</li>
            </ul>
          </div>
        </GlowingStarsCard>
      ),
    },
    {
      title: "Dec. 2024 - Jan. 2025",
      content: (
        <GlowingStarsCard>
          <div className="p-4 md:p-6">
            <h3 className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Intern - Data Science
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-3 md:mb-4">
              Infomo Digital Media Pvt Ltd, Dehradun
            </p>
            <ul className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base list-disc list-inside space-y-1 md:space-y-2">
              <li>Exploratory Data Analysis (EDA)</li>
              <li>Analyzed and summarized datasets to uncover patterns and insights</li>
              <li>Worked on organizing and classifying data for machine learning model training</li>
            </ul>
          </div>
        </GlowingStarsCard>
      ),
    },
    {
      title: "Aug. 2024 - Present",
      content: (
        <GlowingStarsCard>
          <div className="p-4 md:p-6">
            <h3 className="text-gray-800 dark:text-gray-200 text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Team Lead - Competitions
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-2.5">Team M_2_S</p>
            <ul className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base list-disc list-inside space-y-1 md:space-y-2">
              <li>Led winning teams in multiple hackathons including Hackathon 3.0 and The Innovation Nexus</li>
              <li>Coordinated technical development and project management</li>
              <li>Mentored team members in AI/ML and web development</li>
            </ul>
          </div>
        </GlowingStarsCard>
      ),
    },
  ]

  return (
    <section id="experience" className="py-12 md:py-20">
      <GoogleGeminiEffect>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-16">
            Growing professionally <Cover>at warp speed</Cover>
          </p>
          <Timeline data={data} />
        </div>
      </GoogleGeminiEffect>
    </section>
  )
}
