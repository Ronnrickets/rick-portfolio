# Ronnrick Alcedo — Portfolio

A personal portfolio built with **Next.js**, **Tailwind CSS**, and hand-built **shadcn/ui**-style
components, skinned in the **"Nexus Core — Global Status"** design system (see
`Nexus-Core-Global-Status-DESIGN.md`): dark, glassy, full-bleed grid, mint/teal/amber accents.
Mobile-first, downloadable resume built in.

## Design notes

This is a from-spec redesign — the visual system follows `Nexus-Core-Global-Status-DESIGN.md`
directly rather than an original direction. A few calls needed judgment where the spec was
ambiguous or (in one case) internally inconsistent; each is called out below and commented in
`globals.css` at the point it matters.

- **Palette:** dark mode is black background with mint-green primary (`#3FE8A8`), teal secondary
  (`#5FE6CF`), amber tertiary (`#FFB454`, reserved accent) — straight from the spec.
- **Light mode:** the spec only defines dark/glass tokens, so light mode is an original extension
  built to match — same accent hues carried through for brand consistency, deepened slightly
  (`#12B981` primary, `#0E7C6B` secondary) so they stay legible on a light surface instead of
  washing out. Background is a soft mint-tinted off-white (`#F5FBF9`) rather than plain white, as
  a quiet nod back to the primary accent. Toggle lives in the nav (desktop) and the mobile sheet
  menu header; defaults to dark on first visit, persists your choice after that.
- **Contrast fix:** the spec's `text-primary` (`#3E6A70`) is too low-contrast on black for
  paragraph text, so it's used here for muted/meta text instead; a near-white handles primary
  readable copy, and `text-secondary` (`#5FE6CF`) is used for bright mono labels — see the
  comment block at the top of `globals.css`.
- **Type system:** headline/body text uses the platform's own UI font (the spec's literal
  "System Font" — no webfont needed there); `Geist Mono` covers the spec's `SFMono-Regular`
  interface copy (nav, labels, badges, meta) at the exact spec'd size/tracking
  (`.text-body-md` in `globals.css`).
- **Glass cards:** `Card` renders the spec's "gradient border shell" technique — an outer
  gradient hairline frame (`.glass-shell`) wrapping an inset blurred glass surface
  (`.glass-surface`), with the spec's exact hover glow recipe on interactive cards.
- **Layout:** full-bleed, grid-first — no centered narrow reading column. Sections use a 12-col
  grid; a faint sitewide grid-line texture reinforces the "Grid: Strong" composition cue.
- **Particles:** the hero's interactive particle field (`particles.tsx`) is now tinted to the
  primary mint-green with a glow, standing in for the spec's "atmospheric visuals, motion depth."
  Same hover-repel behavior as before; the color is now driven by a `colorVar` prop so it can be
  retinted per-section if needed.
- **Resume download:** `/public/resume.pdf` is your uploaded PDF, served statically. "Resume"
  buttons in the nav, hero, contact section, and footer all link to it with `download` set, so it
  saves directly rather than opening in a new tab.
- **Projects overflow:** with 15 internal systems now catalogued, the home page's "Internal
  systems" list shows only the first 5 (see `PREVIEW_COUNT` in
  `src/components/sections/projects.tsx`) with a "View all N projects" button. The full list —
  live projects and all internal systems — lives on its own route, `/projects`
  (`src/app/projects/page.tsx`). The card and list-row markup is shared between the home page and
  that route via `src/components/featured-project-card.tsx` and `src/components/project-list.tsx`,
  so the two views can't visually drift apart.

## Why the shadcn/ui components are hand-written

The `shadcn` CLI (`npx shadcn add ...`) fetches component source from `ui.shadcn.com` at
generation time. If you run it yourself with normal internet access, it'll work fine and you can
use it to add more components. In the environment this was built in, that host wasn't reachable,
so the components in `src/components/ui/` were written by hand, matching the same Radix UI +
`class-variance-authority` pattern the CLI generates.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # run the production build
```

## Structure

```
src/
  app/
    layout.tsx            Geist Mono, theme provider (locked dark), metadata
    page.tsx               composes all sections + sitewide grid texture
    globals.css             Nexus Core design tokens, glass-shell/glass-surface, .text-body-md
    projects/
      page.tsx               full projects listing (all live + all internal systems)
  components/
    ui/                     hand-built shadcn/ui primitives (button, card, badge, separator, sheet, tooltip)
    theme-provider.tsx       next-themes wrapper (dark default, light mode available via toggle)
    theme-toggle.tsx         light/dark toggle button
    local-clock.tsx          live local-time signature detail
    particles.tsx             interactive canvas particle field (color/glow configurable)
    featured-project-card.tsx  shared "live project" card — used on home + /projects
    project-list.tsx           shared internal-systems list row — used on home + /projects
    sections/
      nav.tsx                 status dot, nav links, resume download, mobile sheet menu
      hero.tsx                headline + glass "status panel" stat card
      about.tsx
      experience.tsx          grid timeline
      projects.tsx            featured cards + first 5 internal systems + "View all" link
      stack.tsx               skills + education
      contact.tsx
      footer.tsx
  lib/
    utils.ts                  cn() helper
    content.ts                 ALL COPY LIVES HERE — see below

public/
  resume.pdf                   your uploaded resume — served statically, downloadable from the site
```

## Editing content

Every piece of text on the site is centralized in **`src/lib/content.ts`** — name, bio,
experience, projects, skills, education, nav links, resume path. Update that one file to change
anything; nothing is hardcoded into section components.

Two things flagged there as assumptions rather than direct resume facts:

- **`profile.github`** — inferred as `github.com/Ronnrickets` from an old portfolio URL and a
  repo screenshot earlier in the conversation. Confirm this is right.

To update the downloadable resume later, just replace `public/resume.pdf` with a new export —
no code changes needed.

## Skills reorganization note

Your skills list (`skillGroups` in `content.ts`) was reorganized into five groups —
Languages & Frameworks, Backend & APIs, Infrastructure & Cloud, Databases, Tools — rather than
repeating items like PHP across multiple overlapping group labels. All the same skills are
present (MVC Architecture, Eloquent ORM, RESTful APIs, Composer, AWS EC2, LEMP Stack, NGINX
Reverse Proxy, Apache, Certbot/SSL/TLS, Linux Administration, Database Migrations), just grouped
to avoid duplicate badges sitting next to each other.
