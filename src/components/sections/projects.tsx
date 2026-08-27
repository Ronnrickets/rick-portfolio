import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedProjectCard } from "@/components/featured-project-card"
import { InternalProjectList } from "@/components/project-list"
import { featuredProjects, internalProjects } from "@/lib/content"

const PREVIEW_COUNT = 5

export function Projects() {
  const preview = internalProjects.slice(0, PREVIEW_COUNT)
  const remaining = internalProjects.length - preview.length

  return (
    <section id="work" className="border-b border-border px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-body-md text-muted-foreground">Selected work</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.name} project={project} />
        ))}
      </div>

      {/* Internal / company systems — maintained but not publicly linkable */}
      <div className="mt-20">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-body-md text-muted-foreground">
            Internal systems built &amp; maintained
          </p>
          <p className="text-body-md text-muted-foreground">
            {preview.length} of {internalProjects.length}
          </p>
        </div>

        <div className="mt-6">
          <InternalProjectList projects={preview} />
        </div>

        {remaining > 0 && (
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <a href="/projects">
                View all {internalProjects.length} projects
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
