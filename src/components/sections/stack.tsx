import { Badge } from "@/components/ui/badge"
import { skillGroups, education } from "@/lib/content"

export function Stack() {
  return (
    <section id="stack" className="border-b border-border px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-body-md text-muted-foreground">Stack</p>

      <div className="mt-10 divide-y divide-border border-t border-border">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-1 gap-3 py-6 lg:grid-cols-12 lg:gap-6"
          >
            <h4 className="text-body-md text-muted-foreground lg:col-span-3">
              {group.label}
            </h4>
            <div className="flex flex-wrap gap-2 lg:col-span-9">
              {group.items.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-6">
        <p className="text-body-md text-muted-foreground lg:col-span-3">Education</p>
        <div className="lg:col-span-9">
          <p className="text-base font-medium text-foreground">{education.degree}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {education.school} &middot; {education.years}
          </p>
        </div>
      </div>
    </section>
  )
}
