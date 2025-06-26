"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { Cover } from "@/components/ui/cover"

export function TestimonialsSection() {
  const testimonials = [
    {
      user: "Dr. Sarah Johnson",
      company: "AI Research Lab",
      image: "/placeholder.svg?height=100&width=100",
      text: "Kavin's work on AI-powered healthcare solutions is exceptional. His ability to translate complex medical requirements into functional applications is remarkable.",
    },
    {
      user: "Prof. Michael Chen",
      company: "Chitkara University",
      image: "/placeholder.svg?height=100&width=100",
      text: "One of the most dedicated students I've worked with. Kavin's projects consistently demonstrate innovation and technical excellence.",
    },
    {
      user: "Alex Rodriguez",
      company: "Tech Startup Founder",
      image: "/placeholder.svg?height=100&width=100",
      text: "Collaborated with Kavin on a fintech project. His understanding of both AI and web technologies made him an invaluable team member.",
    },
  ]

  const movingTestimonials = [
    {
      quote: "Kavin's AI solutions are game-changing. His work on our edtech platform exceeded all expectations.",
      name: "Emma Thompson",
      title: "Product Manager, EduTech Inc",
    },
    {
      quote: "Exceptional problem-solving skills and deep understanding of machine learning algorithms.",
      name: "David Kim",
      title: "CTO, HealthTech Solutions",
    },
    {
      quote: "His ability to deliver complex projects at warp speed is truly impressive.",
      name: "Lisa Wang",
      title: "Engineering Lead, FinTech Corp",
    },
  ]

  return (
    <section id="testimonials" className="py-20 relative">
      <GoogleGeminiEffect>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-16">
            Building relationships <Cover>at warp speed</Cover>
          </p>

          <AnimatedTestimonials testimonials={testimonials} />

          <div className="mt-20">
            <InfiniteMovingCards items={movingTestimonials} direction="right" speed="slow" />
          </div>
        </div>
      </GoogleGeminiEffect>
    </section>
  )
}
