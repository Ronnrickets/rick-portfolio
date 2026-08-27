import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

import { Nav } from "@/components/sections/nav"
import { Footer } from "@/components/sections/footer"
import { FeaturedProjectCard } from "@/components/featured-project-card"
import { InternalProjectList } from "@/components/project-list"
import { featuredProjects, internalProjects, profile } from "@/lib/content"

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: `Every project and internal system ${profile.name} has built or maintained.`,
}

export default function ProjectsPage() {
  return (
    <>
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10" />
      <Nav />
      <main>
        <section className="border-b border-border px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
          <a
            href="/#work"
            className="text-body-md inline-flex items-center gap-1.5 text-muted-foreground hover:text-secondary"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
            Back
          </a>

          <h1 className="mt-6 font-sans text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            All projects
          </h1>
          <p className="text-body-md mt-4 text-muted-foreground">
            {featuredProjects.length + internalProjects.length} projects — live client work and
            internal systems built and maintained
          </p>
        </section>

        <section className="border-b border-border px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-body-md text-muted-foreground">Live</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-body-md text-muted-foreground">
            Internal systems built &amp; maintained ({internalProjects.length})
          </p>
          <div className="mt-6">
            <InternalProjectList projects={internalProjects} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
