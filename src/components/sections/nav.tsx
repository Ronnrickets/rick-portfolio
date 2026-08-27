"use client"

import * as React from "react"
import { Menu, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { nav, profile } from "@/lib/content"

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-5 sm:px-8">
        <a
          href="/#top"
          className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.12em] text-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-body-md text-muted-foreground transition-colors hover:text-secondary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={profile.resumeUrl} download>
              <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
              Resume
            </a>
          </Button>

          <ThemeToggle />

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full border-l border-border bg-background sm:max-w-xs"
              >
                <SheetHeader>
                  <div className="flex items-center justify-between">
                    <SheetTitle className="font-mono text-sm uppercase tracking-[0.12em] text-foreground">
                      {profile.name}
                    </SheetTitle>
                    <ThemeToggle />
                  </div>
                </SheetHeader>
                <nav className="mt-10 flex flex-col gap-1">
                  {nav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className="text-body-md border-b border-border py-4 text-foreground"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <a
                      href={profile.resumeUrl}
                      download
                      className="text-body-md mt-4 flex items-center gap-2 text-primary"
                    >
                      <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
                      Download resume
                    </a>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
