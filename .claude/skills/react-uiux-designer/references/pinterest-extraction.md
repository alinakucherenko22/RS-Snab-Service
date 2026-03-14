# Pinterest Extraction — Fallback Prompts & Strategies

Pinterest frequently blocks server-side fetches. Use this reference when `web_fetch` fails or returns insufficient data.

---

## Detection: Did the Fetch Fail?

A Pinterest fetch has failed if:
- Response is <1000 characters
- Response contains "login" or "sign in" wall text
- Response contains only script tags with no content
- HTTP status 403, 429, or redirect to login

---

## Strategy 1 — Ask for Visual Description

Say to the user:

> "Pinterest is blocking my direct access to those pins. Could you describe what you see?  
> I just need:
> - **Mood/feel**: (e.g. dark and moody, bright and airy, warm and cozy)
> - **Color palette**: (2–4 dominant colors you notice)
> - **Typography style**: (serif/sans-serif, big/small, elegant/raw)
> - **Layout**: (lots of whitespace / dense content / full-bleed images / card grid)
> - **Any specific element** you love and want replicated"

Then proceed to Creative Mode §2 with the user's verbal description.

---

## Strategy 2 — Extract from URL Patterns

Even when content is blocked, Pinterest URLs reveal information:

```
/pin/[id]/             → single pin, request description of it
/[username]/[board]/   → board theme — ask user to describe board mood
/ideas/[keyword]/      → keyword is the aesthetic signal (e.g. "minimalist-kitchen", "dark-academia")
/search/pins/?q=[term] → search query = explicit aesthetic tag
```

Map common Pinterest search terms to aesthetic directions:

| Pinterest keyword | Skill aesthetic |
|-------------------|----------------|
| minimalist, clean, simple | japanese-minimal or luxury-editorial |
| dark, moody, gothic, noir | dark-brutalist or glassmorphism-dark |
| cozy, warm, cottagecore, natural | soft-organic |
| retro, y2k, 90s, vaporwave | retro-futuristic |
| bold, graphic, pop art | neubrutalist or playful-bold |
| luxury, gold, marble, elegant | luxury-editorial or art-deco-geometric |
| brutalist, raw, concrete | dark-brutalist |
| pastel, soft, kawaii | soft-organic + playful-bold hybrid |

---

## Strategy 3 — Screenshot Pathway

If the user can share a screenshot of the Pinterest board:

> "If you can take a screenshot of the Pinterest board and share it here,  
> I can analyze the colors, typography, and layout directly from the image."

When image is provided, extract:
1. Background tone (light/dark/neutral/colored)
2. Most repeated color (→ primary)
3. Pop/accent color (→ accent)
4. Font character from any visible text (serif/mono/sans, weight)
5. Layout density (airy/balanced/dense)
6. Border/shadow style (sharp/soft/none)
7. Image treatment (full-bleed/contained/circular/masked)

Map these to the design language YAML and proceed.

---

## Strategy 4 — Pinterest Image CDN

Pinterest images are hosted on `i.pinimg.com`. If the user shares a direct image URL from Pinterest (starts with `https://i.pinimg.com`), `web_fetch` may work on these directly. Try fetching and return visual analysis if successful.

---

## Extraction Quality Tiers

| Tier | Data Available | Confidence |
|------|---------------|------------|
| A | Direct fetch worked, full HTML | High — use extracted palette directly |
| B | Screenshot provided | High — extract from image |
| C | User verbal description | Medium — validate with user |
| D | URL keyword only | Low — propose palette, ask for confirmation |

Always tell the user which tier you're operating at and set expectations accordingly.
