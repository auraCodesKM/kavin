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
    <section id="about" className="py-20 relative">
      <GoogleGeminiEffect>
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <div className="max-w-6xl mx-auto">
            <ContainerTextFlip
              text="Education & Learning"
              className="text-4xl md:text-6xl font-bold text-center mb-16 text-gray-900 dark:text-white"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chitkara University */}
              <FollowingPointer>
                <WobbleCard containerClassName="col-span-1 min-h-[500px] bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-500">
                  <div className="flex flex-col items-center gap-6 h-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt="Chitkara University"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-center"
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Chitkara University</h2>

                      <div className="space-y-4 text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">Bachelor of Engineering in Computer Science - AI</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">Duration: Aug. 2024 - Aug. 2028</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">Location: Patiala, Punjab</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">Specialization: AI & Machine Learning</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">
                            Learning <Cover>at warp speed</Cover> in cutting-edge technologies
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </WobbleCard>
              </FollowingPointer>

              {/* IIT Ropar */}
              <FollowingPointer>
                <WobbleCard containerClassName="col-span-1 min-h-[500px] bg-gradient-to-br from-teal-500 via-indigo-500 to-purple-500">
                  <div className="flex flex-col items-center gap-6 h-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      className="flex-shrink-0"
                    >
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt="IIT Ropar"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-center"
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">IIT Ropar</h2>

                      <div className="space-y-4 text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">Minor in Artificial Intelligence</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">Duration: Dec. 2024 - Oct. 2025</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">Location: Ropar, Punjab</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">Focus: Advanced AI Algorithms & Research</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/90">
                            Mastering AI concepts <Cover>at warp speed</Cover>
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
