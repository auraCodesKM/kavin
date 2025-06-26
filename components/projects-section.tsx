"use client"
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel"
import { EvervaultCard } from "@/components/ui/evervault-card"
import { LayoutGrid } from "@/components/ui/layout-grid"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { Cover } from "@/components/ui/cover"

export function ProjectsSection() {
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
    <section id="projects" className="py-20 relative">
      <GoogleGeminiEffect>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-16">
            Building innovative solutions <Cover>at warp speed</Cover>
          </p>
          <AppleCardsCarousel items={cards} />

          <div className="mt-20">
            <h3 className="text-2xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Project Gallery
            </h3>
            <LayoutGrid cards={layoutCards} />
          </div>
        </div>
      </GoogleGeminiEffect>
    </section>
  )
}

const ProjectContent = ({ title, description, tags }: { title: string; description: string; tags: string[] }) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-gray-600 dark:text-gray-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-gray-700 dark:text-gray-200">{title}</span> {description}
    </p>
    <div className="flex gap-2 mt-4 flex-wrap">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

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
