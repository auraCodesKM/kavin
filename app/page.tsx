import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingNav } from "@/components/floating-nav"
import { StickyBanner } from "@/components/ui/sticky-banner"

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black flex justify-center items-center flex-col overflow-hidden mx-auto">
      <StickyBanner />
      <FloatingNav />
      <div className="max-w-7xl w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </main>
  )
}
