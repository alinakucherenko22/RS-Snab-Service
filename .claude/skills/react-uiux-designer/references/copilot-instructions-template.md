# Extended GitHub Copilot Custom Instructions Template

This file is a comprehensive template. The skill generates a project-specific version of this.
Copy sections as needed when customizing for specific projects.

---

# Copilot Instructions — [PROJECT NAME]

## Project Context
[2-3 sentences: what the product is, who it's for, the design philosophy]

---

## Tech Stack
- React [version] with TypeScript
- Tailwind CSS [v3/v4]
- Framer Motion for animations
- [Any additional libraries]

---

## Design System

### Aesthetic Direction
[Aesthetic name + description, e.g.: "Luxury editorial — warm cream backgrounds,
gold accents, Cormorant Garamond for display text, generous whitespace, magazine-style
asymmetric layouts. Every component should feel like it belongs in a high-end editorial
publication."]

### Color Tokens (ALWAYS use these, never raw Tailwind colors)
```
Primary:  --color-primary  / bg-primary    [#hex] — [usage context]
Accent:   --color-accent   / bg-accent     [#hex] — [usage context]  
Surface:  --color-surface  / bg-surface    [#hex] — backgrounds, cards
Muted:    --color-muted    / text-muted    [#hex] — secondary text
Border:   --color-border   / border-border [#hex] — dividers, outlines
```

### Typography Rules
1. `font-display` ([Font Name]): ONLY for h1, h2, h3 and hero text
2. `font-body` ([Font Name]): ALL other text — body, labels, buttons, captions
3. Never use `font-sans` (default Tailwind) — always specify font class
4. Never use system fonts (Arial, Helvetica, system-ui)

### Type Scale
```
text-xs    / 12px — captions, timestamps, badges
text-sm    / 14px — secondary labels, meta info  
text-base  / 16px — body text default
text-lg    / 18px — lead paragraphs, card titles
text-xl    / 20px — section subheadings
text-2xl   / 24px — h3
text-3xl   / 30px — h2
text-4xl+  / 36px+ — h1 (desktop)
text-5xl+  / 48px+ — hero headlines only
```

---

## Component Patterns

### Button Component
```tsx
// Primary button
<button className="
  font-body font-medium text-sm tracking-wide
  px-6 py-3 rounded-[Xpx]
  bg-[var(--color-accent)] text-white
  hover:brightness-110 active:scale-[0.98]
  transition-all duration-[var(--duration-base)]
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2
">
  Label
</button>
```

### Card Component
```tsx
<div className="
  bg-[var(--color-surface)] 
  border border-[var(--color-border)]
  rounded-[Xpx] p-6 md:p-8
  shadow-[var(--shadow-card)]
  hover:shadow-[var(--shadow-card-hover)]
  transition-shadow duration-[var(--duration-base)]
">
```

### Section Wrapper
```tsx
<section className="py-[var(--spacing-section)] px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* content */}
  </div>
</section>
```

### Eyebrow Label (section intro text)
```tsx
<p className="font-body text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] mb-3">
  Label text
</p>
```

---

## Animation Patterns

### Entrance Animation (standard)
```tsx
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}
```

### Stagger Container
```tsx
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 }
  }
}
```

### Scroll-Triggered (with react-intersection-observer)
```tsx
import { useInView } from 'react-intersection-observer'
const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
<motion.div ref={ref} animate={inView ? 'visible' : 'hidden'} variants={container}>
```

### Reduced Motion
```tsx
// Always wrap animated components with this
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
// Or use Framer's built-in: useReducedMotion()
import { useReducedMotion } from 'framer-motion'
```

---

## Spacing Conventions

```
Section vertical padding:  py-16 (mobile) → py-24 (tablet) → py-32 (desktop)
Card internal padding:     p-4 (sm card) / p-6 (standard) / p-8 (featured) / p-12 (hero card)
Gap between grid items:    gap-4 (dense) / gap-6 (standard) / gap-8 (editorial) / gap-12 (airy)
Stack spacing (flex-col):  space-y-2 (tight) / space-y-4 (standard) / space-y-6 (generous)
```

---

## Grid Patterns

```tsx
// Standard 3-col feature grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// 12-col editorial grid
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-12 md:col-span-7"> {/* main */} </div>
  <div className="col-span-12 md:col-span-5"> {/* aside */} </div>
</div>

// Masonry-style (CSS only)
<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
```

---

## Accessibility Requirements (non-negotiable)

- All interactive elements: `focus-visible:ring-2 focus-visible:ring-offset-2`
- Images: always `alt` attribute, decorative images `alt=""`
- Buttons without text: `aria-label`
- Skip navigation link at top of layout
- Color contrast: minimum 4.5:1 for text
- Motion: always respect `prefers-reduced-motion`

---

## Anti-Patterns (Copilot must NEVER generate these)

```
❌ className="font-sans"          → use font-body or font-display
❌ style={{ color: '#hex' }}      → use CSS token classes
❌ className="rounded-full"       → only on avatar/icon circles, never buttons
❌ onClick on <div>              → use <button> or add role="button" + tabIndex
❌ className="text-blue-500"      → use semantic color tokens
❌ Lorem ipsum copy              → write real contextual copy
❌ any TypeScript `any` type     → use proper types
❌ Tailwind purple-* classes     → the project has its own accent color
❌ bg-white text-black as defaults → use surface and primary tokens
❌ hover:opacity-70              → use hover:brightness-* or specific opacity class
```

---

## File Structure Convention

```
src/
├── components/
│   ├── ui/           — primitive components (Button, Input, Badge)
│   ├── sections/     — page sections (HeroSection, FeatureGrid)
│   └── layout/       — Nav, Footer, PageWrapper
├── styles/
│   └── tokens.css    — CSS custom properties
├── lib/
│   └── motion.ts     — shared Framer Motion variants
└── types/
    └── index.ts      — shared TypeScript interfaces
```

---

## When Adding New Components

Always:
1. Check if a primitive in `ui/` covers it before creating a new one
2. Use semantic token classes, not raw colors
3. Export named, not default (exception: page-level components)
4. Include JSDoc comment with `@description` and `@example`
5. Handle loading, error, and empty states
6. Test at sm/md/lg breakpoints mentally before committing
