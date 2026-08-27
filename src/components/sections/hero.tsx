import { ArrowUpRight, Mail, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LocalClock } from "@/components/local-clock"
import { Particles } from "@/components/particles"
import { profile, stats } from "@/lib/content"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <Particles
        colorVar="--primary"
        glow
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]"
      />

      <div className="relative grid grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-8">
          <LocalClock className="text-body-md inline-flex items-center text-secondary" />

          <h1 className="mt-8 font-sans text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
            {profile.name}
          </h1>

          <p className="text-body-md mt-4 text-muted-foreground">
            {profile.role} — {profile.location}
          </p>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                Get in touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#work">
                View work
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={profile.resumeUrl} download>
                <Download className="h-4 w-4" strokeWidth={1.75} />
                Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Status panel — glass shell, echoes the "Global Status" concept */}
        <div className="lg:col-span-4">
          <div className="glass-shell">
            <div className="glass-surface flex h-full flex-col justify-between gap-8 p-6">
              <div className="flex items-center justify-between">
                <span className="text-body-md text-muted-foreground">Status</span>
                <span className="flex items-center gap-1.5 text-body-md text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Online
                </span>
              </div>

              <dl className="grid grid-cols-1 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-body-md text-muted-foreground">{s.label}</dt>
                    <dd className="font-sans text-2xl font-semibold text-foreground">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
