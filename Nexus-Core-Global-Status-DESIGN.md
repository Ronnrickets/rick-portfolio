---
version: "alpha"
name: "Nexus Core — Global Status"
description: "Nexus Core Background Effect is designed for delivering a visual treatment or immersive background effect. Key features include atmospheric visuals, motion depth, and flexible presentation layering. It is suitable for visual-first pages, motion studies, and atmospheric hero treatments."
colors:
  primary: "#3FE8A8"
  secondary: "#5FE6CF"
  tertiary: "#FFB454"
  neutral: "#000000"
  background: "#000000"
  surface: "#3FE8A8"
  text-primary: "#3E6A70"
  text-secondary: "#5FE6CF"
  border: "#5FE6CF"
  accent: "#3FE8A8"
typography:
  headline-lg:
    fontFamily: "System Font"
  body-md:
    fontFamily: "SFMono-Regular"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "19.5px"
    letterSpacing: "0.12em"
    textTransform: "uppercase"
spacing:
  base: "4px"
  sm: "2px"
  md: "4px"
  lg: "6px"
  xl: "10px"
  gap: "2px"
  card-padding: "12px"
---

## Overview

- **Composition cues:**
  - Layout: Grid
  - Content Width: Full Bleed
  - Framing: Glassy
  - Grid: Strong

## Colors

The color system uses light mode with #3FE8A8 as the main accent and #000000 as the neutral foundation.

- **Primary (#3FE8A8):** Main accent and emphasis color.
- **Secondary (#5FE6CF):** Supporting accent for secondary emphasis.
- **Tertiary (#FFB454):** Reserved accent for supporting contrast moments.
- **Neutral (#000000):** Neutral foundation for backgrounds, surfaces, and supporting chrome.

- **Usage:** Background: #000000; Surface: #3FE8A8; Text Primary: #3E6A70; Text Secondary: #5FE6CF; Border: #5FE6CF; Accent: #3FE8A8

## Typography

Typography pairs System Font for display hierarchy with SFMono-Regular for supporting content and interface copy.

- **Headlines (`headline-lg`):** System Font.
- **Body (`body-md`):** SFMono-Regular, 12px, weight 400, line-height 19.5px, letter-spacing 0.12em, uppercase.

## Layout

Layout follows a grid composition with reusable spacing tokens. Preserve the grid, full bleed structural frame before changing ornament or component styling. Use 4px as the base rhythm and let larger gaps step up from that cadence instead of introducing unrelated spacing values.

Treat the page as a grid / full bleed composition, and keep that framing stable when adding or remixing sections.

- **Layout type:** Grid
- **Content width:** Full Bleed
- **Base unit:** 4px
- **Scale:** 2px, 4px, 6px, 10px, 12px, 14px, 18px
- **Card padding:** 12px, 18px
- **Gaps:** 2px, 12px, 14px, 16px

## Elevation & Depth

Depth is communicated through glass, border contrast, and reusable shadow or blur treatments. Keep those recipes consistent across hero panels, cards, and controls so the page reads as one material system.

Surfaces should read as glass first, with borders, shadows, and blur only reinforcing that material choice.

- **Surface style:** Glass
- **Borders:** 0.67px #5FE6CF; 0.67px #0A2B33
- **Shadows:** rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.55) 0px 0px 0px 1px inset, rgba(125, 238, 222, 0.04) 0px 1px 1px 0px; rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(125, 238, 222, 0.05) 0px 1px 0px 0px; rgb(63, 232, 168) 0px 0px 9px 0px, rgba(0, 0, 0, 0.6) 0px 0px 0px 2px inset
- **Blur:** 3px

### Techniques
- **Gradient border shell:** Use a thin gradient border shell around the main card. Wrap the surface in an outer shell with 18px padding and a 16px radius. Drive the shell with linear-gradient(rgba(10, 30, 38, 0.92), rgba(4, 15, 20, 0.94)) so the edge reads like premium depth instead of a flat stroke. Keep the actual stroke understated so the gradient shell remains the hero edge treatment. Inset the real content surface inside the wrapper with a slightly smaller radius so the gradient only appears as a hairline frame.

## Shapes

Shapes rely on a tight radius system anchored by 6px and scaled across cards, buttons, and supporting surfaces. Icon geometry should stay compatible with that soft-to-controlled silhouette.

Use the radius family intentionally: larger surfaces can open up, but controls and badges should stay within the same rounded DNA instead of inventing sharper or pill-only exceptions.

- **Corner radii:** 6px, 8px, 12px, 16px, 9999px

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do
- Do use the primary palette as the main accent for emphasis and action states.
- Do keep spacing aligned to the detected 4px rhythm.
- Do reuse the Glass surface treatment consistently across cards and controls.
- Do keep corner radii within the detected 6px, 8px, 12px, 16px, 9999px family.

### Don't
- Don't introduce extra accent colors outside the core palette roles unless the page needs a new semantic state.
- Don't mix unrelated shadow or blur recipes that break the current depth system.
- Don't exceed the detected minimal motion intensity without a deliberate reason.

## Motion

Motion stays restrained and interface-led across text, layout, and scroll transitions. Easing favors ease.

**Motion Level:** minimal

**Easings:** ease
