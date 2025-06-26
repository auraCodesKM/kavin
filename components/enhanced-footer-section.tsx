"use client"
import { motion } from "framer-motion"
import { Boxes } from "@/components/ui/background-boxes"
import { Github, Linkedin, Twitter, Mail, Heart, Code, Coffee } from "lucide-react"

export function EnhancedFooterSection() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/auraCodesKM", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/kavin070810", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/kavinthakur", label: "Twitter" },
    { icon: Mail, href: "mailto:kavinthakur@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative w-full overflow-hidden bg-slate-900 dark:bg-black">
      <div className="absolute inset-0 w-full h-full bg-slate-900 dark:bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="relative z-20 py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2 lg:col-span-2"
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">Kavin Thakur</h3>
              <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 max-w-md leading-relaxed">
                Full-stack developer passionate about creating innovative solutions with AI and modern web technologies.
                Always learning, always building.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1"
            >
              <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base block py-1"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-1"
            >
              <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "AI/ML"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 rounded-md text-xs md:text-sm text-gray-300 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-6 md:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 text-xs md:text-sm flex items-center gap-2 text-center sm:text-left"
              >
                © {currentYear} Kavin Thakur. Made with{" "}
                <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500 animate-pulse" /> and{" "}
                <Code className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
              </motion.p>

              {/* Fun Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs md:text-sm text-gray-400"
              >
                <div className="flex items-center gap-1">
                  <Coffee className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Powered by coffee</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
