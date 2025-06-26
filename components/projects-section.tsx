"use client"
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel"
import { EvervaultCard } from "@/components/ui/evervault-card"
import { LayoutGrid } from "@/components/ui/layout-grid"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { Cover } from "@/components/ui/cover"
import { motion } from "framer-motion"
import { useState } from "react"

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      category: "AI/EdTech",
      title: "OWL - Open World Learning",
      src: "/placeholder.svg?height=500&width=800",
      content: (
        <ProjectContent
          title="OWL - Open World Learning"
          description="AI-powered decentralized edtech platform for personalized and inclusive learning with 10+ innovative features including voice navigation and hand sign detection for accessibility."
          tags={["Web3", "Next.js", "AI", "EdTech"]}
        />
      ),
    },
    {
      category: "HealthTech/AI",
      title: "VocaWall",
      src: "/placeholder.svg?height=500&width=800",
      content: (
        <ProjectContent
          title="VocaWall"
          description="AI-powered medical diagnosis platform with advanced features including spectrograms, MFCC analysis, and confidence scores for voice-based health assessment."
          tags={["Python", "Flask", "ML", "Healthcare"]}
        />
      ),
    },
    {
      category: "Automation/AI",
      title: "Arvya - AI Automation",
      src: "/placeholder.svg?height=500&width=800",
      content: (
        <ProjectContent
          title="Arvya - AI Automation"
          description="AI-driven platform for intelligent automation with predictive models for real-time decision-making and two AI bots for enhanced functionality."
          tags={["Next.js", "Python", "Flask", "Automation"]}
        />
      ),
    },
  ]

  const cards = projects.map((project, index) => ({
    ...project,
    key: index,
  }))

  return (
    <section id="projects" className="py-12 md:py-20 relative">
      <GoogleGeminiEffect>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Building innovative solutions <Cover>at warp speed</Cover>
            </p>
          </motion.div>

          <div className="mb-8 md:mb-16">
            <AppleCardsCarousel items={cards} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 md:mt-20"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 md:mb-12">
              Project Gallery
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
              {enhancedLayoutCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative group cursor-pointer ${card.className}`}
                  onMouseEnter={() => setHoveredProject(card.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 h-64 md:h-80 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                            {card.category}
                          </span>
                        </div>

                        <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {card.title}
                        </h4>

                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{card.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-4">
                        {card.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-4 right-4 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="px-2 md:px-0">
              <LayoutGrid cards={layoutCards} />
            </div>
          </motion.div>
        </div>
      </GoogleGeminiEffect>
    </section>
  )
}

const ProjectContent = ({ title, description, tags }: { title: string; description: string; tags: string[] }) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 md:p-8 lg:p-14 rounded-3xl mb-4">
    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-gray-700 dark:text-gray-200">{title}</span> {description}
    </p>
    <div className="flex gap-1 sm:gap-2 mt-3 md:mt-4 flex-wrap">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 sm:px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs sm:text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

const enhancedLayoutCards = [
  {
    id: 1,
    title: "OWL Platform",
    category: "AI/EdTech",
    description: "AI-powered decentralized edtech platform for personalized learning",
    tags: ["Web3", "Next.js", "AI"],
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "VocaWall",
    category: "HealthTech/AI",
    description: "AI-powered medical diagnosis platform with voice analysis",
    tags: ["Python", "Flask", "ML"],
    className: "col-span-1",
  },
  {
    id: 3,
    title: "Arvya AI",
    category: "Automation/AI",
    description: "AI-driven platform for intelligent automation",
    tags: ["Next.js", "Python", "AI"],
    className: "col-span-1",
  },
]

const layoutCards = [
  {
    id: 1,
    content: <EvervaultCard text="OWL Platform" />,
    className: "md:col-span-2",
    thumbnail: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 2,
    content: <EvervaultCard text="VocaWall" />,
    className: "col-span-1",
    thumbnail: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    content: <EvervaultCard text="Arvya AI" />,
    className: "col-span-1",
    thumbnail: "/placeholder.svg?height=300&width=300",
  },
]
