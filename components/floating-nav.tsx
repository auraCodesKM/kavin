"use client"
import { FloatingDock } from "@/components/ui/floating-dock"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconMail,
  IconStar,
} from "@tabler/icons-react"

export function FloatingNav() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-gray-500 dark:text-gray-300" />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full text-gray-500 dark:text-gray-300" />,
      href: "#about",
    },
    {
      title: "Skills",
      icon: <IconCode className="h-full w-full text-gray-500 dark:text-gray-300" />,
      href: "#skills",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full text-gray-500 dark:text-gray-300" />,
      href: "#projects",
    },
    {
      title: "Experience",
      icon: <IconBriefcase className="h-full w-full text-gray-500 dark:text-gray-300" />,
      href: "#experience",
    },
    {
      title: "Testimonials",
      icon: <IconStar className="h-full w-full text-gray-500 dark:text-gray-300" />,
      href: "#testimonials",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full text-gray-500 dark:text-gray-300" />,
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-gray-500 dark:text-gray-300" />,
      href: "https://github.com/auraCodesKM",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-gray-500 dark:text-gray-300" />,
      href: "https://linkedin.com/in/kavin970810",
    },
  ]

  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  )
}
