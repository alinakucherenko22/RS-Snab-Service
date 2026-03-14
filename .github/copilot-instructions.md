# Copilot Instructions

<!-- 
  ІНСТРУКЦІЯ: Цей файл заповнюється автоматично скілом react-uiux-designer.
  Або заповни вручну, замінивши [PLACEHOLDER] на дані свого проєкту.
  Розміщення: .github/copilot-instructions.md
-->

## Project

**Name**: [PROJECT_NAME]  
**Type**: [landing / SaaS / portfolio / e-commerce / dashboard]  
**Aesthetic**: [aesthetic direction name]

[2–3 речення: що це за продукт, для кого, яка дизайн-філософія]

---

## Tech Stack

- React 18+ with TypeScript
- Tailwind CSS v3
- Framer Motion
- [додаткові бібліотеки]

---

## Design Tokens — ALWAYS use these

Never use raw Tailwind color names (blue-500, gray-300, etc.).
Never use hardcoded hex values in JSX or TSX.

```
Token class          CSS variable              Role
─────────────────────────────────────────────────────────
bg-primary           --color-primary           Main dark color
bg-accent            --color-accent            CTA, highlights
bg-surface           --color-surface           Cards, backgrounds
text-muted           --color-muted             Secondary text
border-border        --color-border            Dividers, outlines
```

---

## Typography — ALWAYS specify font

```
font-display   →  [DISPLAY FONT]   — h1, h2, h3, hero text ONLY
font-body      →  [BODY FONT]      — all other text (labels, UI, body)
```

Never use `font-sans` (Tailwind default).
Never use system fonts or Inter as primary.

### Heading scale
```
h1 hero:     text-5xl md:text-7xl   font-display
h1 page:     text-4xl md:text-5xl   font-display
h2:          text-3xl md:text-4xl   font-display
h3:          text-xl  md:text-2xl   font-display
body large:  text-lg                font-body
body:        text-base              font-body
label/meta:  text-sm                font-body
eyebrow:     text-xs uppercase tracking-widest font-body text-muted
```

---

## Component Patterns

### Button — Primary
```tsx
<button className="
  font-body font-medium text-sm tracking-wide
  px-6 py-3 rounded-[8px]
  bg-accent text-white
  hover:brightness-110 active:scale-[0.98]
  transition-all duration-[var(--duration-base)]
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
">
  Label
</button>
```

### Card
```tsx
<div className="
  bg-surface border border-border rounded-xl p-6 md:p-8
  hover:shadow-md transition-shadow duration-[var(--duration-base)]
">
```

### Section Wrapper
```tsx
<section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
```

### Eyebrow Label
```tsx
<p className="font-body text-xs uppercase tracking-[0.15em] text-muted mb-3">
  Section name
</p>
```

---

## Animation Patterns

### Entrance (use on every section)
```tsx
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}
```

### Stagger Container
```tsx
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
}
```

### Reduced Motion (mandatory)
```tsx
import { useReducedMotion } from 'framer-motion'
const prefersReduced = useReducedMotion()
// Pass to animate: prefersReduced ? 'visible' : isInView ? 'visible' : 'hidden'
```

---

## Spacing

```
Section padding:   py-16 md:py-24 lg:py-32
Card padding:      p-4 (sm) / p-6 (default) / p-8 (featured) / p-12 (hero)
Grid gap:          gap-4 (dense) / gap-6 (standard) / gap-8 (editorial)
Stack (flex-col):  space-y-2 / space-y-4 / space-y-6
Container:         max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

---

## Grid Patterns

```tsx
// 3-col feature grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// Editorial 2-col (main + aside)
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
  <div className="md:col-span-7"> {/* main */} </div>
  <div className="md:col-span-5"> {/* aside */} </div>
</div>
```

---

## Accessibility (non-negotiable)

- All buttons/links: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent`
- Images: always `alt` attribute; decorative: `alt=""`  
- Icon buttons: `aria-label="..."`
- Color contrast: minimum 4.5:1 for all text
- Motion: always use `useReducedMotion()` hook from Framer Motion

---

## Anti-Patterns — Copilot MUST NEVER generate these

```
❌ className="font-sans"              → use font-body or font-display
❌ style={{ color: '#3b82f6' }}       → use token classes
❌ className="text-blue-500"          → use semantic token
❌ className="rounded-full"           → only for avatar circles, never buttons
❌ onClick on <div>                  → use <button> with proper role
❌ Lorem ipsum or placeholder text   → write real contextual copy
❌ type: any in TypeScript           → use proper types
❌ className="bg-white text-black"   → use bg-surface text-primary tokens
❌ No focus-visible on interactive   → always add focus ring
❌ Animation without reduced-motion  → always wrap with useReducedMotion
```

---

## File Structure

```
src/
├── components/
│   ├── ui/           — Button, Input, Badge, Avatar (primitives)
│   ├── sections/     — HeroSection, FeatureGrid, CTABanner (page sections)
│   └── layout/       — NavigationBar, Footer, PageWrapper
├── styles/
│   └── tokens.css    — CSS custom properties
├── lib/
│   └── motion.ts     — shared Framer Motion variants
└── types/
    └── index.ts      — shared TypeScript interfaces
```

**Rule**: Before creating a new component, check if a primitive in `ui/` covers it.  
**Rule**: Export named, not default (exception: page-level route components).  
**Rule**: Handle loading, error, and empty states in every data-fetching component.
