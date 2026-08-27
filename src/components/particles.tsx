"use client"

import * as React from "react"

type Particle = {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  r: number
  baseAlpha: number
}

/**
 * A field of small dots drifting slowly across the container. On hover,
 * nearby particles are pushed away from the cursor and brighten — a soft
 * "atmospheric dust" effect, colored from a CSS variable so it stays in
 * sync with the active design system. Respects prefers-reduced-motion by
 * rendering a static field with no animation or hover response.
 */
export function Particles({
  className,
  colorVar = "--foreground",
  glow = false,
}: {
  className?: string
  /** CSS custom property (on :root) to read the particle color from. */
  colorVar?: string
  /** Adds a soft glow around each particle — used for the accent-tinted variant. */
  glow?: boolean
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const particlesRef = React.useRef<Particle[]>([])
  const mouseRef = React.useRef<{ x: number; y: number } | null>(null)
  const rafRef = React.useRef<number | null>(null)
  const sizeRef = React.useRef({ width: 0, height: 0 })

  React.useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const getForeground = () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue(colorVar)
        .trim() || "#0a0a0a"

    let foreground = getForeground()

    const seedParticles = (width: number, height: number) => {
      const density = 9000 // px^2 per particle
      const count = Math.min(170, Math.max(40, Math.floor((width * height) / density)))
      particlesRef.current = Array.from({ length: count }, () => {
        const x = Math.random() * width
        const y = Math.random() * height
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() * 1.3 + 0.7,
          baseAlpha: Math.random() * 0.4 + 0.18,
        }
      })
    }

    const resize = () => {
      const { width, height } = container.getBoundingClientRect()
      sizeRef.current = { width, height }
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seedParticles(width, height)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const { width, height } = sizeRef.current
      if (x < 0 || y < 0 || x > width || y > height) {
        mouseRef.current = null
      } else {
        mouseRef.current = { x, y }
      }
    }
    const onMouseLeave = () => {
      mouseRef.current = null
    }
    // Listen on window (not just the canvas) so hover still registers when
    // the cursor is over text/buttons layered on top of the particle field.
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseleave", onMouseLeave)

    const themeObserver = new MutationObserver(() => {
      foreground = getForeground()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    const HOVER_RADIUS = 160
    const REPEL_STRENGTH = 46

    const draw = () => {
      const { width, height } = sizeRef.current
      ctx.clearRect(0, 0, width, height)
      const mouse = mouseRef.current

      for (const p of particlesRef.current) {
        if (!prefersReducedMotion) {
          // gentle idle drift
          p.baseX += p.vx
          p.baseY += p.vy
          if (p.baseX < 0 || p.baseX > width) p.vx *= -1
          if (p.baseY < 0 || p.baseY > height) p.vy *= -1
          p.baseX = Math.max(0, Math.min(width, p.baseX))
          p.baseY = Math.max(0, Math.min(height, p.baseY))

          let targetX = p.baseX
          let targetY = p.baseY
          let alpha = p.baseAlpha
          let radius = p.r
          let force = 0

          if (mouse) {
            const dx = p.baseX - mouse.x
            const dy = p.baseY - mouse.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < HOVER_RADIUS) {
              force = 1 - dist / HOVER_RADIUS
              const angle = Math.atan2(dy, dx)
              targetX = p.baseX + Math.cos(angle) * force * REPEL_STRENGTH
              targetY = p.baseY + Math.sin(angle) * force * REPEL_STRENGTH
              alpha = Math.min(1, p.baseAlpha + force * 0.85)
              radius = p.r + force * 2.2
            }
          }

          p.x += (targetX - p.x) * 0.12
          p.y += (targetY - p.y) * 0.12

          ctx.beginPath()
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
          ctx.fillStyle = foreground
          ctx.globalAlpha = alpha
          if (glow) {
            ctx.shadowColor = foreground
            ctx.shadowBlur = 6 + force * 10
          }
          ctx.fill()
          if (glow) ctx.shadowBlur = 0
        } else {
          ctx.beginPath()
          ctx.arc(p.baseX, p.baseY, p.r, 0, Math.PI * 2)
          ctx.fillStyle = foreground
          ctx.globalAlpha = p.baseAlpha
          ctx.fill()
        }
      }
      ctx.globalAlpha = 1

      if (!prefersReducedMotion) {
        rafRef.current = requestAnimationFrame(draw)
      }
    }

    draw()

    return () => {
      ro.disconnect()
      themeObserver.disconnect()
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseleave", onMouseLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [colorVar, glow])

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
