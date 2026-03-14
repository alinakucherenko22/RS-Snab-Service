© RS-Snab-Service, 2026
# Aesthetic Patterns — Tailwind + React Recipes

Quick reference for implementing each aesthetic direction from the skill.

---

## luxury-editorial

```css
/* tokens.css */
--color-primary: #1a1209;
--color-accent: #c9a84c;
--color-surface: #faf8f3;
--color-muted: #8c7b5e;
--font-display: 'Cormorant Garamond', serif;
--font-body: 'DM Sans', sans-serif;
--spacing-section: 7rem;
```

```js
// tailwind.config.ts extend
colors: {
  ink: '#1a1209',
  gold: { DEFAULT: '#c9a84c', light: '#e8c97a', dark: '#8f6a1c' },
  cream: { DEFAULT: '#faf8f3', dark: '#f0ece0' },
  stone: '#8c7b5e',
},
fontFamily: {
  display: ['Cormorant Garamond', 'serif'],
  body: ['DM Sans', 'sans-serif'],
},
```

**Key Tailwind patterns:**
- `tracking-widest uppercase text-xs font-body text-stone` — eyebrow labels
- `font-display text-6xl leading-[1.05] text-ink` — hero headlines
- `border-t border-gold/30` — editorial dividers
- `aspect-[4/5] object-cover` — editorial image ratios
- `grid grid-cols-12 gap-4` — editorial 12-col grid

---

## dark-brutalist

```css
--color-primary: #0a0a0a;
--color-accent: #ff3c00;
--color-surface: #111111;
--color-border: #333333;
--font-display: 'Space Grotesk', sans-serif; /* exception — brutalism suits it */
--font-body: 'IBM Plex Mono', monospace;
```

**Key patterns:**
- `border-2 border-white` — raw borders, no shadows
- `hover:bg-white hover:text-black transition-colors` — invert on hover
- `text-[clamp(3rem,10vw,8rem)] font-black leading-none` — oversized type
- `grid grid-cols-[1fr_2px_1fr]` — visible grid lines

---

## soft-organic

```css
--color-primary: #3d2b1f;
--color-accent: #e07b54;
--color-surface: #fdf6ee;
--color-sage: #7a9e7e;
--font-display: 'Playfair Display', serif;
--font-body: 'Nunito', sans-serif;
```

**Key patterns:**
- `rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%]` — blob shapes
- `bg-gradient-to-br from-cream via-peach/20 to-sage/10` — soft gradients
- `shadow-[0_8px_30px_rgb(0,0,0,0.04)]` — barely-there shadows

---

## retro-futuristic

```css
--color-primary: #00ff94;
--color-surface: #050510;
--color-secondary: #7000ff;
--font-display: 'Share Tech Mono', monospace;
--font-body: 'Rajdhani', sans-serif;
```

**Key patterns:**
- `border border-green-400/30 bg-green-400/5` — terminal card
- `shadow-[0_0_20px_rgba(0,255,148,0.3)]` — neon glow
- `animate-pulse` on decorative elements
- Scanline overlay: `bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]`

---

## neubrutalist

```css
--color-primary: #000000;
--color-accent: #ffe000;
--color-surface: #ffffff;
--font-display: 'Instrument Serif', serif;
--font-body: 'Instrument Sans', sans-serif;
```

**Key patterns:**
- `border-2 border-black shadow-[4px_4px_0_0_#000]` — offset shadow card
- `hover:shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]` — lift on hover
- `bg-yellow-300` — saturated fills
- `rounded-none` — no border radius, ever

---

## glassmorphism-dark

```css
--color-surface: rgba(255,255,255,0.05);
--color-border: rgba(255,255,255,0.1);
--color-accent: #6366f1;
--color-glow: rgba(99,102,241,0.4);
--font-display: 'Syne', sans-serif;
--font-body: 'Inter', sans-serif; /* acceptable here — tech context */
```

**Key patterns:**
- `backdrop-blur-xl bg-white/5 border border-white/10` — glass card
- `shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]` — depth
- `bg-gradient-radial from-indigo-500/20 to-transparent` — glow blobs

---

## editorial-motion

Focus on scroll-triggered reveals and cinematic pacing.

```tsx
// Framer Motion scroll variant pattern
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16,1,0.3,1] } }
}

// Usage with useInView:
const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
<motion.div ref={ref} variants={containerVariants} animate={inView ? 'visible' : 'hidden'}>
```

---

## Universal Motion Easing Reference

```
ease-out-expo:    cubic-bezier(0.16, 1, 0.3, 1)      — snappy entrance
ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1)     — smooth transitions
ease-spring:      [use Framer Motion spring config]    — physical feel
```

```tsx
// Framer spring config
transition={{ type: 'spring', stiffness: 400, damping: 30 }}
```

---

## Responsive Breakpoint Strategy

Always mobile-first with these semantic breakpoints:

```
base (0px)  — mobile, single column, large touch targets
sm (640px)  — phablet, minor adjustments
md (768px)  — tablet, 2-col grids unlock
lg (1024px) — desktop, full layout
xl (1280px) — wide desktop, max-w-7xl containers
2xl (1536px)— editorial full-bleed sections
```

Golden rule: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` on all containers.
