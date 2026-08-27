import { ArrowUpRight } from "lucide-react"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/content"

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.href} target="_blank" rel="noreferrer" className="group block">
      <Card interactive className="h-full">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-lg">{project.name}</CardTitle>
            <ArrowUpRight
              className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              strokeWidth={1.5}
            />
          </div>
          <span className="flex items-center gap-1.5 text-body-md text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Live
          </span>
          <CardDescription className="leading-relaxed">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Badge key={s} variant="outline">
              {s}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </a>
  )
}
