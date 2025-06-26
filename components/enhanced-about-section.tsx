"use client"
import { Tabs } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { Calendar, MapPin, GraduationCap, Award, BookOpen, Users, ExternalLink, Star } from "lucide-react"

export function EnhancedAboutSection() {
  const tabs = [
    {
      title: "Chitkara University",
      value: "chitkara",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 via-indigo-800 to-violet-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 h-full"
          >
            {/* University Image with enhanced styling */}
            <div className="flex-shrink-0 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.img
                src="/chitkara.jpg"
                alt="Chitkara University"
                className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white/30 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=300&width=300"
                }}
              />
              <motion.div
                className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full p-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-4 h-4 md:w-6 md:h-6" />
              </motion.div>
            </div>

            {/* University Details with enhanced layout */}
            <div className="flex-1 space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
              >
                Chitkara University
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base lg:text-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
                  <span>Bachelor of Engineering in Computer Science - AI</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-green-300" />
                  <span>Aug. 2024 - Aug. 2028</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
                  <span>Patiala, Punjab</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-pink-300" />
                  <span>AI & Machine Learning Focus</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-lg backdrop-blur-sm border border-white/20"
              >
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  Currently pursuing my undergraduate degree with a specialization in Artificial Intelligence. Engaging
                  in cutting-edge research and practical applications of AI technologies.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 flex items-center gap-2 text-yellow-300 hover:text-yellow-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Learn More</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "IIT Ropar",
      value: "iit",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 via-teal-800 to-cyan-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 h-full"
          >
            {/* University Image with enhanced styling */}
            <div className="flex-shrink-0 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full blur-xl opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <motion.img
                src="/iit-ropar.jpg"
                alt="IIT Ropar"
                className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white/30 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=300&width=300"
                }}
              />
              <motion.div
                className="absolute -top-2 -right-2 bg-orange-400 text-black rounded-full p-2"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-4 h-4 md:w-6 md:h-6" />
              </motion.div>
            </div>

            {/* University Details */}
            <div className="flex-1 space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              >
                IIT Ropar
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base lg:text-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
                  <span>Minor in Artificial Intelligence</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-green-300" />
                  <span>Dec. 2024 - Oct. 2025</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
                  <span>Ropar, Punjab</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-pink-300" />
                  <span>Research & Development</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-lg backdrop-blur-sm border border-white/20"
              >
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  Pursuing advanced studies in AI at one of India's premier technical institutions. Focusing on
                  cutting-edge research in machine learning and artificial intelligence.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Learn More</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Harvard University",
      value: "harvard",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-700 via-rose-800 to-pink-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 h-full"
          >
            {/* University Image with enhanced styling */}
            <div className="flex-shrink-0 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur-xl opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
              <motion.img
                src="/harvard.jpg"
                alt="Harvard University"
                className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white/30 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=300&width=300"
                }}
              />
              <motion.div
                className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full p-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <GraduationCap className="w-4 h-4 md:w-6 md:h-6" />
              </motion.div>
            </div>

            {/* University Details */}
            <div className="flex-1 space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent"
              >
                Harvard University
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base lg:text-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-yellow-300" />
                  <span>Aspire Institute Leadership Program</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-green-300" />
                  <span>Jan. 2025 - Mar. 2025</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
                  <span>Cambridge, Massachusetts, USA</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center gap-3 text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-pink-300" />
                  <span>Leadership Development</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 p-4 bg-gradient-to-r from-white/10 to-white/5 rounded-lg backdrop-blur-sm border border-white/20"
              >
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  Participating in Harvard's prestigious leadership program, developing strategic thinking and
                  leadership skills alongside global peers and industry experts.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 flex items-center gap-2 text-red-300 hover:text-red-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Learn More</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ),
    },
  ]

  return (
    <section id="about" className="py-12 md:py-20 relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Learning
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey across prestigious institutions, building expertise in AI and technology
          </p>
        </motion.div>

        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
          <Tabs
            tabs={tabs}
            containerClassName="mb-8"
            activeTabClassName="bg-gradient-to-r from-blue-500 to-purple-600"
            tabClassName="text-sm md:text-base font-medium transition-all duration-300 hover:scale-105"
            contentClassName="mt-8"
          />
        </div>
      </div>
    </section>
  )
}