import { profile } from "@/lib/content"

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <p className="text-body-md text-muted-foreground lg:col-span-3">About</p>
        <div className="space-y-6 lg:col-span-8">
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-foreground/85 sm:text-xl">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
