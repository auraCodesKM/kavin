"use client"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import type React from "react"

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"
import { FileUpload } from "@/components/ui/file-upload"
import { WorldMap } from "@/components/ui/world-map"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import { Cover } from "@/components/ui/cover"
import { useState } from "react"

export function ContactSection() {
  const placeholders = [
    "What's your name?",
    "What's your email?",
    "Tell me about your project...",
    "What services do you need?",
    "How can I help you?",
  ]

  const [email, setEmail] = useState("")
  const [files, setFiles] = useState<File[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submitted", email)
    setEmail("")
  }

  const handleFileUpload = (files: File[]) => {
    setFiles(files)
    console.log(files)
  }

  const dots = [
    {
      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
      end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    },
    {
      start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
      end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    },
    {
      start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
      end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London
      end: { lat: 28.6139, lng: 77.209 }, // New Delhi
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
    },
    {
      start: { lat: 28.6139, lng: 77.209 }, // New Delhi
      end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <GoogleGeminiEffect>
        <BackgroundBeamsWithCollision>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people. Whether you need AI
              solutions, web applications, or just want to chat about technology, I'd love to hear from you and respond{" "}
              <Cover>at warp speed</Cover>!
            </p>

            <div className="mb-12">
              <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
            </div>

            <div className="mb-12">
              <FileUpload onChange={handleFileUpload} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">kavinthakur@gmail.com</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+91 70876 67900</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Patiala, Punjab</p>
              </div>
            </div>

            <div className="h-96 w-full">
              <WorldMap dots={dots} />
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </GoogleGeminiEffect>
    </section>
  )
}
