import type { Project } from "@/lib/content"

export function InternalProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="divide-y divide-border border-t border-border">
      {projects.map((project) => (
        <div
          key={project.name}
          className="flex flex-col gap-2 py-5 lg:flex-row lg:items-baseline lg:justify-between lg:gap-6"
        >
          <div className="flex items-center gap-2 lg:w-1/3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
            <h4 className="text-base font-medium text-foreground">{project.name}</h4>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground lg:w-1/3">
            {project.description}
          </p>
          <p className="text-body-md text-muted-foreground lg:w-1/4 lg:text-right">
            {project.stack.join(" / ")}
          </p>
        </div>
      ))}
    </div>
  )
}
