"use client"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import type React from "react"

import { BackgroundBoxes } from "@/components/ui/background-boxes"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { Cover } from "@/components/ui/cover"
import { IconBrandPython, IconBrandReact, IconDatabase, IconBrain, IconCode } from "@tabler/icons-react"

export function SkillsSection() {
  const skills = [
    {
      title: "Programming Languages",
      description: "Python, JavaScript, HTML/CSS, C++",
      header: <SkillCard icon={<IconCode className="h-20 w-20 text-indigo-500" />} />,
      className: "md:col-span-2",
      icon: <IconBrandPython className="h-4 w-4 text-gray-500" />,
    },
    {
      title: "Frontend Development",
      description: "React, Next.js, Tailwind CSS, Framer Motion",
      header: <SkillCard icon={<IconBrandReact className="h-20 w-20 text-teal-500" />} />,
      className: "md:col-span-1",
      icon: <IconBrandReact className="h-4 w-4 text-gray-500" />,
    },
    {
      title: "Backend & Databases",
      description: "Flask, Node.js, PostgreSQL, MongoDB",
      header: <SkillCard icon={<IconDatabase className="h-20 w-20 text-purple-500" />} />,
      className: "md:col-span-1",
      icon: <IconDatabase className="h-4 w-4 text-gray-500" />,
    },
    {
      title: "AI & Machine Learning",
      description: "TensorFlow, PyTorch, Scikit-learn, OpenCV",
      header: <SkillCard icon={<IconBrain className="h-20 w-20 text-indigo-400" />} />,
      className: "md:col-span-2",
      icon: <IconBrain className="h-4 w-4 text-gray-500" />,
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <GoogleGeminiEffect>
        <BackgroundBoxes />
        <div className="relative z-20 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-16">
            Mastering technologies <Cover>at warp speed</Cover>
          </p>
          <BentoGrid className="max-w-4xl mx-auto">
            {skills.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </GoogleGeminiEffect>
    </section>
  )
}

const SkillCard = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <CardSpotlight className="h-96 w-full">
      <div className="flex items-center justify-center h-full">{icon}</div>
    </CardSpotlight>
  )
}
