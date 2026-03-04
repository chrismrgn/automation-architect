# Automation Architects — Redesign Spec
## Design Inspiration: wearestagetwo.com

**Goal:** Apply Stage Two's editorial aesthetic to Automation Architects while keeping the existing content,  
routes, and components. This is a **visual layer change** — not a rebuild. All pages, blog posts, ROI calculator, FAQ, /clients etc. stay as-is. We're changing how it looks, not what it says.

---

## Stage Two Design System (extracted from source + CSS)

**Colors:**
- Background: `#29343F` (Ebony Clay — warm dark blue-grey, NOT pure black)
- Accent: `#FF614A` (Persimmon — coral/orange, used on headings, focus rings)
- Text: `#FFFFFF`
- Slate gradient: `#3C4C5C` → `#50657B` → `#8399AE` → `#C1CCD6`

**Typography:**
- Display/headings: `AvenirNextLTPro-Bold` (bold geometric sans)
- Body: `Calluna` (serif — gives warmth and editorial weight)
- Body text size: Huge — scales from 1.25rem → 2.25rem at large viewports

**Hero:**
- Giant viewport-width text: `font-size: 20vw`, `line-height: 0.8`, uppercase
- Three lines, alternating alignment: left / right / center
- No decorative backgrounds — raw type on raw color

**Layout:**
- Numbered editorial sections: `01. Who`, `02. Why`, `03. Contact`
- Two-column inside sections: label left (25%) / content right (75%) on desktop
- Stacked single-column on mobile
- Generous internal padding that scales with viewport

**No:**
- Card grids with borders/shadows
- Gradient glows
- Grid backgrounds
- Badges/pills
- Glassmorphism

---

## What We're Changing

### 1. Color System (globals.css)

Replace the current cold dark palette with Stage Two's warm editorial palette:

```css
:root {
  /* --- NEW PALETTE (Stage Two inspired) --- */

  /* Backgrounds */
  --color-bg:          #252F3A;   /* warm slate — replaces pure black #0A0A0F */
  --color-surface:     #2E3B47;   /* slightly lighter — replaces #13131A */
  --color-border:      #3C4C5C;   /* warm grey border — replaces #1E1E2E */

  /* Brand */
  --color-primary:     #6C47FF;   /* keep violet — it's the AA brand */
  --color-accent:      #FF6B47;   /* persimmon-inspired warm orange — replaces cold cyan #00D4FF */
  
  /* Text */
  --color-text:        #F5F0EB;   /* warm white — replaces cold #F0F0FF */
  --color-text-muted:  #8399AE;   /* Stage Two's tsunami — replaces #8888AA */

  /* Success (ROI calc etc) */
  --color-success:     #00C896;   /* keep — works on warm bg */

  /* Shadcn tokens - update to match */
  --background:        #252F3A;
  --foreground:        #F5F0EB;
  --card:              #2E3B47;
  --card-foreground:   #F5F0EB;
  --border:            #3C4C5C;
  --muted:             #3C4C5C;
  --muted-foreground:  #8399AE;
  --accent:            #FF6B47;
  --accent-foreground: #252F3A;
}
```

Also update:
- `body { background-color: #252F3A; color: #F5F0EB; }`
- `.grid-bg` → **remove or reduce to near-invisible** — Stage Two uses raw color, no grid texture
- `.text-gradient` → update to `#6C47FF → #FF6B47` (violet to warm orange)
- `.violet-glow` → keep but reduce opacity slightly on the warmer bg

---

### 2. Typography (layout.tsx + globals.css)

Add a serif font for body text alongside Inter for headings:

**In layout.tsx**, import from Google Fonts:
```tsx
import { Inter, Lora } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", style: ["normal", "italic"] });

// Apply both to <html> className
```

**In globals.css:**
```css
body {
  font-family: var(--font-lora), Georgia, serif;  /* serif body */
}

h1, h2, h3, h4, h5, h6,
.font-display, nav, button, .badge {
  font-family: var(--font-inter), system-ui, sans-serif;  /* sans headings */
}
```

**Text sizing — increase body text significantly:**
```css
body { font-size: 1.125rem; line-height: 1.6; }
@media (min-width: 768px) { body { font-size: 1.25rem; } }
@media (min-width: 1280px) { body { font-size: 1.375rem; } }

.standfirst {
  font-size: 1.5rem;
  line-height: 1.35;
}
@media (min-width: 768px) { .standfirst { font-size: 1.875rem; } }
```

---

### 3. Homepage Hero (src/app/page.tsx — Hero section)

Replace the current centered badge + headline + CTA with Stage Two's giant viewport-width type approach:

**New Hero:**
```tsx
function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-0">
      {/* Giant viewport-width type */}
      <h1 className="hero-wordmark" aria-label="Your business runs itself">
        <span className="block text-left">Your</span>
        <span className="block text-right">Business</span>
        <span className="block text-center">Runs.</span>
      </h1>

      {/* Standfirst below */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-2xl">
          <p className="standfirst text-[#F5F0EB] mb-8">
            We build custom AI operating systems for growing businesses — 
            so you can stop doing the work your business should be doing automatically.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-8 py-4 text-base font-medium transition-colors">
              Book Your Free AI Audit →
            </a>
            <a href="#process" className="text-[#8399AE] hover:text-[#F5F0EB] transition-colors underline underline-offset-4 decoration-[#8399AE]/40">
              See how it works
            </a>
          </div>
          <p className="text-sm text-[#8399AE] mt-4">No commitment · 30 minutes · Immediate value</p>
        </div>
      </div>
    </section>
  )
}
```

**Add to globals.css:**
```css
.hero-wordmark {
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 17vw;
  font-weight: 800;
  line-height: 0.85;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #F5F0EB;
  overflow: hidden;
  padding: 0 2vw;
  pointer-events: none;
  user-select: none;
}

/* Accent color on second word */
.hero-wordmark span:nth-child(2) {
  color: #6C47FF;
}
```

---

### 4. Section Structure — Numbered Editorial Sections

Replace card-heavy sections with Stage Two's numbered label + content layout.

**New section pattern (apply to Problem, Solution, Process, Results, ICP, Pricing):**

```tsx
// Pattern: numbered label left, content right
<section className="editorial-section">
  <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
    <div className="editorial-grid">
      {/* Left: number + section label */}
      <div className="editorial-label">
        <span className="section-number">02</span>
        <span className="section-title">The Problem</span>
      </div>
      {/* Right: actual content */}
      <div className="editorial-content">
        {/* ... */}
      </div>
    </div>
  </div>
</section>
```

**Add to globals.css:**
```css
.editorial-section + .editorial-section {
  border-top: 1px solid #3C4C5C;
}

.editorial-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .editorial-grid {
    flex-direction: row;
    gap: 4rem;
  }
  .editorial-label { flex: 0 0 25%; }
  .editorial-content { flex: 1; }
}

.section-number {
  display: block;
  font-family: var(--font-inter), sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #6C47FF;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.section-title {
  display: block;
  font-family: var(--font-inter), sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #F5F0EB;
}
```

---

### 5. Card Redesign

Cards should feel lighter — remove heavy borders, reduce background contrast, let content breathe.

```css
/* Replace all heavy card styles */
.card-editorial {
  background: transparent;
  border: none;
  padding: 0;
}

.card-editorial + .card-editorial {
  border-top: 1px solid #3C4C5C;
  padding-top: 2rem;
  margin-top: 2rem;
}
```

For the 6 capability cards (Solution section), switch from grid cards to a **simple numbered list:**

```
01  Email Intelligence
    Triage, draft, prioritize, respond — automatically.

02  CRM Automation  
    Leads followed up, deals tracked, nothing dropped.
    
03  Content Pipeline
    Blog posts, social, newsletters — generated and scheduled.
    
... etc
```

---

### 6. Buttons

Replace rounded gradient buttons with flat, confident buttons:

```css
.btn-primary {
  background: #6C47FF;
  color: #fff;
  border: none;
  border-radius: 0;           /* flat, no radius — editorial */
  padding: 1rem 2.5rem;
  font-family: var(--font-inter), sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.02em;
  transition: background 150ms ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary:hover {
  background: #7C5CFF;
}
```

Remove `.violet-glow` box-shadow from CTA buttons — the Stage Two approach is confident, not glowy.

---

### 7. Navigation

Simplify to match Stage Two's minimal header — just logo, no pill buttons:

```tsx
// Simplified nav - logo left, links right, no CTA button pill
<header className="aa-header">
  <a href="/" className="aa-logo">
    Automation<span>Architects</span>
  </a>
  <nav>
    <a href="/services">Services</a>
    <a href="/process">Process</a>
    <a href="/about">About</a>
    <a href="/contact" className="nav-cta">Book Audit →</a>
  </nav>
</header>
```

```css
.aa-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  position: sticky;
  top: 0;
  z-index: 50;
  background: #252F3A;
}

.aa-logo {
  font-family: var(--font-inter), sans-serif;
  font-weight: 800;
  font-size: 1.125rem;
  color: #F5F0EB;
  text-decoration: none;
  letter-spacing: -0.02em;
}
.aa-logo span { color: #6C47FF; }

nav a {
  font-family: var(--font-inter), sans-serif;
  font-size: 0.9375rem;
  color: #8399AE;
  text-decoration: none;
  transition: color 150ms;
}
nav a:hover { color: #F5F0EB; }

.nav-cta {
  color: #F5F0EB !important;
  font-weight: 600;
}
```

---

## Section-by-Section: Homepage Redesign Map

| # | Section | Current | Change |
|---|---------|---------|--------|
| 1 | Hero | Centered badge + headline + CTA buttons | Giant vw-type wordmark + left-aligned standfirst |
| 2 | Stats | 4 metric cards | Inline stat row, no cards, larger numbers |
| 3 | Problem | 3 icon cards | Editorial numbered list, no cards |
| 4 | Solution | 6 icon cards | Numbered list 01–06, clean |
| 5 | Before/After | Tabbed component | Keep — already editorial, just reskin |
| 6 | Process | 4-step horizontal flow | Numbered editorial sections |
| 7 | Results | Big metric display | Keep, adjust colors/fonts |
| 8 | ICP | Two-column ✅/❌ list | Keep structure, remove card wrapper |
| 9 | Pricing | 3 card grid | Two-column table style |
| 10 | ROI Calc | Slider widget | Keep — just adjust colors |
| 11 | FAQ | Accordion | Keep — adjust border colors |
| 12 | Blog Teaser | Card grid | Keep structure, remove card borders |
| 13 | Final CTA | Centered section | Keep, adjust colors |

---

## Files to Touch

1. **`src/app/globals.css`** — color system, typography, new utility classes
2. **`src/app/layout.tsx`** — add Lora font, apply to html
3. **`src/app/page.tsx`** — hero rewrite, section restructuring  
4. **`src/components/nav.tsx`** — simplify to editorial header
5. **`src/components/footer.tsx`** — adjust colors
6. **`src/app/about/page.tsx`** — reskin sections
7. **`src/app/services/page.tsx`** — reskin sections
8. **`src/app/process/page.tsx`** — reskin sections
9. **`src/app/contact/page.tsx`** — reskin sections
10. **`src/app/clients/page.tsx`** — reskin sections
11. **`src/app/blog/page.tsx`** + **`[slug]/page.tsx`** — reskin (serif body will auto-apply)

---

## What NOT to Change

- All routing and pages (no new routes)
- The ROI calculator logic/formula
- Blog MDX content
- FAQ content/schema
- Before/After component data
- SEO metadata
- Playwright tests

---

## Acceptance Criteria

- [ ] Background is warm dark slate (#252F3A), NOT pure black
- [ ] Accent color updated to warm orange (#FF6B47) everywhere cyan was used
- [ ] Hero uses giant viewport-width uppercase wordmark
- [ ] Body text uses Lora (serif) at increased size
- [ ] Headings/UI use Inter (sans)
- [ ] Card grids replaced with editorial numbered lists in Solution + Problem sections
- [ ] Section borders are thin single-line, not card borders
- [ ] Buttons are flat (no border-radius / glow)
- [ ] Nav is simplified (no pill CTA button — text link only)
- [ ] All pages reskinned consistently
- [ ] `npm run build` passes clean
- [ ] Mobile responsive — editorial layout stacks properly
- [ ] No TypeScript errors
- [ ] Branch: `feat/editorial-redesign`
- [ ] Push and open PR when done

When completely done, run:
openclaw system event --text "Done: AA editorial redesign complete — Stage Two aesthetic applied. Warm slate bg, Lora serif body, vw hero, numbered sections, flat buttons, warm orange accent. Branch: feat/editorial-redesign. Build passes." --mode now
