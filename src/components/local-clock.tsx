"use client"

import * as React from "react"

import { profile } from "@/lib/content"

const TIME_ZONE = "Asia/Manila"

export function LocalClock({ className }: { className?: string }) {
  const [time, setTime] = React.useState<string | null>(null)

  React.useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: TIME_ZONE,
      }).format(new Date())

    setTime(format())
    const id = setInterval(() => setTime(format()), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={className} suppressHydrationWarning>
      <span className="relative mr-2 inline-flex h-1.5 w-1.5 align-middle">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-40" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      </span>
      {profile.location} — {time ?? "--:--"} local
    </span>
  )
}
