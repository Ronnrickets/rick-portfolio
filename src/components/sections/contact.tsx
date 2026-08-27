import { ArrowUpRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { profile } from "@/lib/content"

export function Contact() {
  return (
    <section id="contact" className="border-b border-border px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-body-md text-muted-foreground">Contact</p>

      <h2 className="mt-6 font-sans text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
        Have a project in mind?
        <br />
        <span className="text-muted-foreground">Let&apos;s talk.</span>
      </h2>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Button asChild size="lg">
          <a href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <a href={profile.resumeUrl} download>
            <Download className="h-4 w-4" strokeWidth={1.75} />
            Download resume
          </a>
        </Button>
      </div>
    </section>
  )
}
