import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { profile } from "@/lib/content"

import "./globals.css"

// Headline/body text uses the platform's own UI font ("System Font" per the
// design spec) — no webfont needed there. Geist Mono covers the spec's
// SFMono-Regular interface copy (labels, nav, badges, meta).
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
