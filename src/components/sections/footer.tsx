import { profile } from "@/lib/content"
import { VisitorCounter } from "@/components/visitor-counter"

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col-reverse items-center gap-4 px-5 py-10 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-8">
        <div className="flex items-center gap-3 font-mono">
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          <VisitorCounter />
        </div>
        <div className="flex items-center gap-5 font-mono uppercase tracking-[0.1em]">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-secondary">
            GitHub
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-secondary">
              LinkedIn
            </a>
          )}
          <a href={`mailto:${profile.email}`} className="hover:text-secondary">
            Email
          </a>
          <a href={profile.resumeUrl} download className="hover:text-secondary">
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
