"use client"
import { BackgroundLines } from "@/components/ui/background-lines"
import { WobbleCard } from "@/components/ui/wobble-card"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { FollowingPointer } from "@/components/ui/following-pointer"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { Cover } from "@/components/ui/cover"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 relative">
      <GoogleGeminiEffect>
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="max-w-7xl mx-auto w-full">
            <ContainerTextFlip
              text="Education & Learning"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-8 md:mb-16 text-gray-900 dark:text-white"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Chitkara University */}
              <FollowingPointer>
                <WobbleCard containerClassName="col-span-1 min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-500">
                  <div className="flex flex-col items-center gap-4 md:gap-6 h-full p-4 md:p-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src="/chitkara.jpg"
                        alt="Chitkara University"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=150&width=150"
                        }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-center flex-1"
                    >
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                        Chitkara University
                      </h2>

                      <div className="space-y-2 md:space-y-4 text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">
                            Bachelor of Engineering in Computer Science - AI
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">Aug. 2024 - Aug. 2028</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">Patiala, Punjab</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">
                            Learning <Cover>at warp speed</Cover>
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </WobbleCard>
              </FollowingPointer>

              {/* IIT Ropar */}
              <FollowingPointer>
                <WobbleCard containerClassName="col-span-1 min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-500">
                  <div className="flex flex-col items-center gap-4 md:gap-6 h-full p-4 md:p-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src="/iit-ropar.jpg"
                        alt="IIT Ropar"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=150&width=150"
                        }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-center flex-1"
                    >
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                        IIT Ropar
                      </h2>

                      <div className="space-y-2 md:space-y-4 text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">Minor in AI</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">Dec. 2024 - Oct. 2025</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">Ropar, Punjab</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">
                            Advancing <Cover>at warp speed</Cover>
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </WobbleCard>
              </FollowingPointer>

              {/* Harvard University */}
              <FollowingPointer>
                <WobbleCard containerClassName="col-span-1 lg:col-span-2 xl:col-span-1 min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500">
                  <div className="flex flex-col items-center gap-4 md:gap-6 h-full p-4 md:p-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src="/harvard.jpg"
                        alt="Harvard University"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=150&width=150"
                        }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-center flex-1"
                    >
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                        Harvard University
                      </h2>

                      <div className="space-y-2 md:space-y-4 text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">
                            Aspire Institute Leadership Program
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">Jan. 2025 - Mar. 2025</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">Cambridge, Massachusetts, USA</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="flex items-start gap-2 md:gap-3"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90 text-xs sm:text-sm md:text-base">
                            Leading <Cover>at warp speed</Cover>
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </WobbleCard>
              </FollowingPointer>
            </div>
          </div>
        </BackgroundLines>
      </GoogleGeminiEffect>
    </section>
  )
}
