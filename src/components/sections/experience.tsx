import { experience } from "@/lib/content"

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border px-5 py-16 sm:px-8 sm:py-24"
    >
      <p className="text-body-md text-muted-foreground">Experience</p>

      <div className="mt-10 divide-y divide-border border-t border-border">
        {experience.map((item) => (
          <div
            key={item.title + item.org}
            className="grid grid-cols-1 gap-4 py-10 lg:grid-cols-12 lg:gap-6"
          >
            <div className="lg:col-span-3">
              <p className="font-mono text-sm text-primary">{item.year}</p>
              <p className="mt-1 text-body-md text-muted-foreground">{item.org}</p>
            </div>
            <div className="lg:col-span-9">
              <h3 className="font-sans text-2xl font-semibold text-foreground sm:text-3xl">
                {item.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {item.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/80 sm:text-base"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
