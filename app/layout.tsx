import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kavin Thakur - AI Developer & Data Scientist",
  description: "Portfolio of Kavin Thakur - Building AI solutions at warp speed",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <DarkModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
