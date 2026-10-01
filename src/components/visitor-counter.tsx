"use client"

import { useEffect, useState } from "react"

type VisitResponse = {
  count?: number
}

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function recordVisit() {
      try {
        const response = await fetch("/api/visits", {
          method: "POST",
          signal: controller.signal,
        })

        if (!response.ok) return

        const data = (await response.json()) as VisitResponse

        if (typeof data.count === "number") {
          setCount(data.count)
        }
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          console.error("Unable to load visit count.", error)
        }
      }
    }

    void recordVisit()

    return () => controller.abort()
  }, [])

  if (count === null) return null

  return (
    <>
      <span aria-hidden="true">/</span>
      <span aria-label={`${count.toLocaleString()} total portfolio visits`}>
        {count.toLocaleString()} visits
      </span>
    </>
  )
}
