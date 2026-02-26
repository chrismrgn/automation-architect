# Automation Architects — Feature Spec V2
## New Features: ICP Qualifier, Verticals, Differentiation, Before/After, ROI Calculator, FAQ, AI Chat, Blog, Client Portal

**Status:** Ready for agency build  
**Priority:** Ship all together as a cohesive update  
**Brand ref:** `BRAND_UX_SPEC.md` — all design decisions follow that spec exactly

---

## Feature 1: ICP Qualifier Section (Homepage)
**Location:** Between "Results / Metrics" and "Investment Overview" sections on the homepage  
**Goal:** Help prospects self-qualify so the right people book calls (and wrong fits opt out)

### Copy
**Headline:** `"Is this for you?"`  
**Subhead:** `"We work with a specific kind of business. Here's how to know if we're the right fit."`

**Split layout — two columns:**

**Left: "You're a great fit if..."**
- ✅ You're doing $1M–$20M in revenue and feeling operationally stretched
- ✅ You or your team spend 10+ hours a week on tasks that feel repetitive
- ✅ You're already using tools like HubSpot, Notion, Gmail, Slack — but manually stitching them together
- ✅ You've looked at AI but haven't implemented anything that actually changed your day
- ✅ You want to scale revenue without scaling headcount at the same rate
- ✅ You're in professional services, agencies, eCommerce, or real estate

**Right: "We're probably not the right fit if..."**
- ❌ You're looking for a simple chatbot or a few Zapier flows
- ❌ You're pre-revenue or not yet ready to invest in systems
- ❌ You want it done in 1–2 weeks
- ❌ You need someone to tell you what your business goals are

**CTA below:** `[If that's you, let's talk →]` → links to /contact

### Design Notes
- Dark card, two-column grid
- ✅ items use `--color-success` (#00C896)
- ❌ items use muted red (#FF4D4D at 70% opacity)
- Section bg: `--color-surface` (#13131A) with violet border-top accent

---

## Feature 2: Industry Vertical Callouts (Homepage)
**Location:** Inside or directly after the "Solution" section (Section 4)  
**Goal:** Let prospects self-identify — "they work with businesses like mine"

### Layout
Horizontal row of 5 icon+label cards:

| Icon | Label |
|------|-------|
| 🏢 | **Marketing & Creative Agencies** |
| 🛒 | **eCommerce & DTC Brands** |
| 🏠 | **Real Estate & Property** |
| 💼 | **Professional Services** |
| 🔧 | **Field Service & Operations** |

**Above the row:** `"Built for your industry"`  
**Below the row:** `"Every agentic OS is custom-built. We know the workflows, the tools, and the pain points in your industry — so we move faster and build smarter."` 

### Design Notes
- Icon cards: `--color-surface` bg, `--color-border` border, cyan icon color
- Subtle hover: card lifts slightly with a violet border glow
- On mobile: 2-column grid wrapping

---

## Feature 3: "What You Won't Deal With" Section (Homepage)
**Location:** After the Hero, before or merged with the Pain Points section  
**Goal:** Differentiation through honesty — stand out from offshore, slow, or bloated agencies

### Headline
`"We're not like the others."`

### Layout
Two-column: Left is "The usual agency experience" (what to avoid), Right is "How we do it"

| The usual | How we do it |
|-----------|-------------|
| 😤 6-month contracts before seeing results | ✅ Working automations in 4–8 weeks |
| 😤 Offshore developers you'll never meet | ✅ Direct access to your builder, always |
| 😤 Black-box tools you can't access or own | ✅ You own everything. 100%. |
| 😤 "Strategy decks" with no implementation | ✅ We build. We don't consult from a distance. |
| 😤 Locked into their platform forever | ✅ Open stack — switch tools any time |

**CTA:** None needed here — this is a trust builder, not a conversion section

### Design Notes
- Left column: muted red tint bg, strikethrough-style items
- Right column: success green, checkmarks, punchy
- Consider subtle animation: items fade in as you scroll

---

## Feature 4: Before/After Workflow Visualization (Homepage + /process page)
**Location:** Homepage after "Solution" section. Also embed on /process page  
**Goal:** Make the abstract concrete — show what "automation" actually looks like

### Content

**Headline:** `"Before vs. After"`  
**Subhead:** `"Here's what the same workflow looks like before and after we build your agentic OS."`

**Tab selector:** [Lead Follow-Up] [Invoice Processing] [Weekly Reporting] — user can toggle between 3 examples

**Each tab shows a side-by-side diagram:**

#### Tab 1: Lead Follow-Up
**Before (left):**
```
New lead comes in
    → Sales rep gets notified (maybe)
    → Rep manually checks CRM
    → Rep writes follow-up email
    → Rep logs activity in CRM
    → Rep sets reminder for Day 3
    → Reminder missed
    → Lead goes cold
⏱ Time: 45 min / lead | 🔴 Reliability: Human-dependent
```
**After (right):**
```
New lead comes in
    → Instantly scored & tagged in CRM
    → Personalized follow-up sent in <5 min
    → Activity auto-logged
    → Nurture sequence triggered
    → Slack alert if no response in 48h
    → Nothing falls through
⚡ Time: 0 min / lead | ✅ Reliability: 100% consistent
```

#### Tab 2: Invoice Processing
**Before:**
```
Project complete
    → PM emails finance team
    → Finance looks up client details manually
    → Creates invoice in accounting software
    → Sends to client
    → Manually follows up after 7 days
    → Updates spreadsheet
    → Reconciles at month end
⏱ Time: 2 hrs / invoice | 🔴 Errors: Common
```
**After:**
```
Project marked complete
    → Invoice auto-generated from project data
    → Sent to client automatically
    → Auto-reminder at Day 7 and Day 14
    → Payment confirmed → CRM + books updated
    → Monthly reconciliation report auto-generated
⚡ Time: 0 min | ✅ Error rate: Near zero
```

#### Tab 3: Weekly Reporting
**Before:**
```
Friday afternoon
    → Pull data from 4+ tools manually
    → Copy-paste into spreadsheet
    → Write narrative summary
    → Format for leadership
    → Email out
    → Repeat next week
⏱ Time: 3–4 hrs/week | 🔴 Always late, always manual
```
**After:**
```
Every Friday at 4pm
    → All data sources pulled automatically
    → KPI dashboard updated
    → Narrative summary AI-written
    → Formatted report sent to leadership
    → Done
⚡ Time: 0 min | ✅ Consistent, on time, every week
```

### Design Notes
- Use a tab/toggle component (shadcn Tabs)
- Left side: slightly washed-out, red-tinted, monospace font (JetBrains Mono)
- Right side: vivid, green-accented, clean
- Animated line/arrow connecting steps in the flow
- Arrow pointing right between the two panels labeled "Your Agentic OS →"

---

## Feature 5: ROI Estimator (Homepage + /contact page)
**Location:** Just before the final CTA on the homepage. Also embed on /contact  
**Goal:** Interactive conversion tool — prospect inputs their situation, sees their potential savings, feels urgency to book

### Inputs
1. **Team size** — slider or dropdown: 1–5 / 6–15 / 16–50 / 50+
2. **Primary pain area** — dropdown:
   - Email & communication management
   - Lead follow-up & CRM
   - Invoicing & finance admin
   - Reporting & analytics
   - Scheduling & project management
   - Content creation & marketing
3. **Hours your team spends on this per week** — slider: 1–40 hrs
4. **Average employee hourly cost** — dropdown: $25 / $35 / $50 / $75 / $100+

### Calculation Logic
```
// Base automation savings rate by pain area
const savingsRate = {
  'email': 0.75,
  'crm': 0.80,
  'finance': 0.85,
  'reporting': 0.90,
  'scheduling': 0.70,
  'content': 0.65,
}

// Core formula
weeklyHoursSaved = hoursPerWeek * savingsRate[painArea]
monthlyDollarsSaved = weeklyHoursSaved * 4.33 * hourlyRate
annualDollarsSaved = monthlyDollarsSaved * 12

// Payback period (assume mid-range project cost $15K)
paybackMonths = 15000 / monthlyDollarsSaved
```

### Output Display
Large, animated result panel:
```
You could save:

  $X,XXX / month
  $XX,XXX / year
  ~X hrs / week

  Typical payback period: X.X months

  [Book Your Free Audit to Confirm →]
```

**Disclaimer (small text):** "Estimates based on industry averages. Your actual results depend on your specific workflows."

### Design Notes
- Sliders: violet (`--color-primary`)
- Result numbers: large, `--color-success` green, animated count-up on calculation
- Panel bg: `--color-surface` with violet gradient border
- CTA button below result: always visible once user interacts
- Mobile: stacked layout, sliders full-width

---

## Feature 6: FAQ Section (Homepage + /process page)
**Location:** Near the bottom of the homepage, before Final CTA  
**Goal:** Remove final objections before booking. Also serves AEO / AI search optimization.

### Questions & Answers
Implement as an accordion (shadcn Accordion component).

**Q: Do I need to know anything about AI or automation?**  
A: No. That's our job. You know your business — we handle the technical side entirely. We'll explain everything in plain language and make sure your team can actually use what we build.

**Q: How is this different from Zapier or Make.com?**  
A: Zapier and Make run rule-based workflows: "if this, then that." That's useful for simple tasks. An agentic OS uses AI to make decisions, handle edge cases, draft content, interpret context, and improve over time. It's the difference between a flowchart and a smart employee.

**Q: What tools and platforms do you work with?**  
A: We're tool-agnostic. We commonly work with HubSpot, Salesforce, Notion, Airtable, Slack, Gmail, Google Workspace, QuickBooks, Stripe, Shopify, and more. We build with a mix of custom AI agents, Make.com/n8n for orchestration, and OpenAI/Anthropic models under the hood.

**Q: How long does a project take?**  
A: The free audit is a 30-minute call. If we move forward, the Discovery phase takes 1–2 weeks. The Build Sprint takes 4–8 weeks depending on scope. Most clients are live with a working agentic OS within 8–10 weeks of first contact.

**Q: What does it cost?**  
A: The audit is free. Discovery is $2,500–$5,000. Build Sprints are $8,000–$25,000 depending on scope. Ongoing retainers are $1,500–$4,000/month. Most clients see full ROI within 3 months.

**Q: Will my team actually use it?**  
A: This is the #1 concern we hear. Our process specifically includes buy-in work and training — not just "here's your system, good luck." We build adoption into the process, not as an afterthought.

**Q: Do I own the system you build?**  
A: Yes. 100%. You own the code, the workflows, the prompts, and the integrations. If you ever want to take it in-house or work with someone else, you can. No lock-in.

**Q: What if something breaks after you deploy?**  
A: Retainer clients get proactive monitoring and fixes included. Non-retainer clients get a 30-day support window post-launch. After that, we offer support packages or a retainer upgrade.

### Design Notes
- shadcn `Accordion` component, single expand at a time
- Subtle violet indicator bar on open item
- FAQ schema JSON-LD in the page `<head>` for SEO/AEO
- Section headline: `"Questions we always get"` (conversational, not corporate)

---

## Feature 7: AI Lead Qualification Chat Widget (All pages)
**Location:** Fixed bottom-right widget, all pages  
**Goal:** Qualify leads 24/7, answer basic questions, collect contact info, book calls

### Tool Recommendation
**Crisp** (crisp.chat) — free tier supports AI chatbot + live handoff. On-brand for an AI company to use an AI to qualify leads for their AI services.

Alternative: **Tidio** (similar feature set, slightly better AI on paid tier)

### Bot Flow (configure in Crisp/Tidio)
```
Bot intro (appears after 30s on page or on widget click):
"👋 Hey! I'm the Automation Architects assistant.
Trying to figure out if we're a fit for your business?
I can answer questions, walk you through our process, or get you booked for a free audit."

→ [Answer my questions] [Book a free audit] [Just browsing]

If "Answer my questions":
  → "What does your business do?" (free text)
  → "What's the biggest manual bottleneck in your day?" (free text)
  → "How big is your team?" (quick reply: 1–5 / 6–20 / 20+)
  → "What's your budget range for fixing this?" (quick reply: <$5K / $5–15K / $15K+ / Not sure yet)
  → [Qualify high: offer to book call] [Qualify low: offer resources]

If "Book a free audit":
  → Redirect to /contact (Calendly embed)

All conversations → forwarded to Chris's email via Crisp
```

### Design Notes
- Widget color: `--color-primary` (#6C47FF) — matches brand
- Chat window: dark theme matching site (`#13131A` bg)
- Bot avatar: stylized "AA" logo or abstract AI icon
- Widget label: "Chat with us" (not "Support" — this is sales, not support)
- Mobile: full-screen overlay when opened

### Implementation Notes
- Embed Crisp script in `layout.tsx` (or equivalent root layout)
- Configure bot flow in Crisp dashboard (no-code)
- Set up email notifications for new conversations

---

## Feature 8: Blog / Resource Hub (/blog)
**Location:** New route `/blog`  
**Goal:** SEO/AEO authority, demonstrate expertise, long-term organic lead gen

### Route Structure
```
/blog                    — index page (grid of articles)
/blog/[slug]             — individual post
```

### Homepage Blog Teaser
Add a "From the blog" section near the footer on the homepage — 3 latest posts in a card grid with title, excerpt, and read time.

### Seed Content (5 articles — agency writes these)

**Article 1: Cornerstone**
- **Title:** "What Is an Agentic OS for Business? (And Why It's Not a Chatbot)"
- **Slug:** `/blog/what-is-an-agentic-os`
- **Target:** People who've heard "agentic AI" and don't know what it means
- **Length:** 1,200–1,500 words
- **Key points:** Definition, difference from Zapier/chatbots, what it actually does, who it's for, what ROI looks like
- **CTA:** Book a free audit

**Article 2: Comparison**
- **Title:** "Zapier vs. Make vs. Agentic AI: What's Actually the Difference?"
- **Slug:** `/blog/zapier-vs-make-vs-agentic-ai`
- **Target:** People researching automation tools who might be a fit
- **Length:** 1,000–1,200 words
- **Key points:** Comparison table, use cases for each, when you've outgrown rule-based tools, when agentic makes sense

**Article 3: Commercial Intent**
- **Title:** "How Much Does AI Automation Consulting Cost? (Real Numbers)"  
- **Slug:** `/blog/ai-automation-consulting-cost`
- **Target:** Decision-makers evaluating vendors
- **Length:** 800–1,000 words
- **Key points:** Industry pricing ranges, what drives cost up/down, DIY vs. agency tradeoffs, our pricing in context

**Article 4: Use Case**
- **Title:** "5 Business Processes Every Agency Should Automate First"
- **Slug:** `/blog/agency-automation-quick-wins`
- **Target:** Marketing/creative agencies (our #1 ICP vertical)
- **Length:** 1,000–1,200 words
- **Key points:** Lead follow-up, client reporting, invoicing, content scheduling, onboarding — with specific tool examples

**Article 5: Objection Handler**
- **Title:** "Will My Team Actually Use AI? (The Adoption Problem, Solved)"
- **Slug:** `/blog/ai-adoption-team-buy-in`
- **Target:** Skeptical owners who've had failed tech implementations before
- **Length:** 800–1,000 words
- **Key points:** Why most AI implementations fail (not tech, it's people), how to get buy-in, what training looks like, our approach

### Blog Index Page Design
- Grid layout: 3 columns desktop / 2 tablet / 1 mobile
- Card: cover image (abstract/geometric, auto-generated style) + title + excerpt (2 lines) + read time + CTA "Read →"
- Filters: All / Use Cases / Guides / Industry (simple tag system)
- No pagination needed for v1 — just the 5 articles

### Blog Post Page Design
- Clean reading layout: max-width 720px centered, large type
- Author: "Automation Architects Team" with logo avatar
- Reading time in header
- Related posts at bottom (2 cards)
- Sticky CTA sidebar (desktop): "Ready to automate your business? [Book a free audit →]"
- Mobile: CTA banner at end of post

### Technical Implementation
- Use Next.js file-based routing: `/app/blog/[slug]/page.tsx`
- Content: MDX files in `/content/blog/` — easy to write and update
- No CMS needed for v1 — MDX is fine for 5 articles
- Metadata: OpenGraph + structured data (Article schema) on each post
- FAQ schema on the FAQ article

---

## Feature 9: Client Portal — Separate Page (/clients)
**Location:** New route `/clients`  
**Goal:** Position Automation Architects as operationally serious. Compelling teaser for prospects, onboarding anchor for clients.

### Page Concept
A dedicated `/clients` page that teases the client experience and drives free audit bookings. For existing clients, it's a gateway to their actual portal (external link or future auth-gated area).

### Sections

**Section 1: Hero**
- **Headline:** `"Your automation dashboard. Always on."`
- **Subhead:** `"Every client gets access to a live view of their agentic OS — what's running, what it saved this week, and what's coming next."`
- **Visual:** Mockup of a dark dashboard (can be a high-fidelity Figma/image mockup) showing:
  - "Hours saved this week: 18.5"
  - "Automations running: 12"
  - "Last updated: 2 minutes ago"
  - A few workflow status cards (Email Triage: ✅ Running | Lead Follow-Up: ✅ Running | Weekly Report: ⏳ Scheduled)
- **CTA:** `[Become a client →]` → links to /contact

**Section 2: What Clients Get**
Three feature cards:
1. **🔍 Live Visibility** — "See every automation running in real time. Know exactly what your AI OS is doing and what it saved you this week."
2. **📈 Results Tracking** — "Hours saved, tasks completed, revenue impacted. Your ROI tracked automatically, every week."
3. **🛠 Direct Access** — "One Slack channel. Direct access to your builder. No tickets, no delays, no project manager middlemen."

**Section 3: The Client Experience Timeline**
Horizontal timeline:
```
Week 1: Free Audit → Week 2–3: Design → Week 4–8: Build & Deploy → Week 9+: Your Dashboard is Live
```
Each step has a brief 1-line description.

**Section 4: Compelling CTA**
- **Headline:** `"The first step is free."`
- **Subhead:** `"Book a 30-minute AI Audit. We'll show you exactly what your dashboard could be tracking — before you spend a dollar."`
- **CTA button:** `[Book Your Free Audit →]` → /contact
- Trust signals: "No commitment." | "30 minutes." | "Instant value."

### Design Notes
- Full dark treatment, same brand palette
- Dashboard mockup: build as a static image or a simple animated div — doesn't need to be functional
- Page accessible from footer nav ("For Clients") — NOT in main nav (keeps nav clean, this is a secondary page)

---

## Global Implementation Notes

### shadcn Components to use
- `Accordion` — FAQ
- `Tabs` — Before/After workflow viewer
- `Slider` — ROI estimator inputs
- `Card` — verticals, blog posts, ICP items
- `Badge` — article tags
- All consistent with existing shadcn setup

### New Routes to Create
```
/blog              — Blog index
/blog/[slug]       — Blog post (MDX-based)
/clients           — Client portal teaser
```

### Footer Updates
Add to footer links:
- "Blog" → /blog
- "For Clients" → /clients

### SEO / Metadata
- Every new page needs: `<title>`, `<meta description>`, OpenGraph tags
- Blog posts: Article schema JSON-LD
- FAQ section: FAQPage schema JSON-LD
- All in Next.js `metadata` export format

### Performance
- Blog images: Next.js `<Image>` with proper sizing
- Chat widget (Crisp): load async, don't block LCP
- ROI calculator: client component only (no SSR needed)
- Before/After tabs: client component with tab state

### Testing
- Playwright test for ROI calculator (input → output calculation)
- Playwright test for FAQ accordion open/close
- Playwright test for blog index → post navigation
- Playwright test for /clients CTA → /contact redirect
- All new routes: smoke tests (page loads, no console errors)

---

## Acceptance Criteria

- [ ] All 9 features implemented per this spec
- [ ] All new pages mobile-responsive
- [ ] ROI calculator produces correct outputs per the formula
- [ ] FAQ accordion has correct JSON-LD schema in `<head>`
- [ ] Blog renders 5 seed articles from MDX files
- [ ] /clients page loads with dashboard mockup and working CTA
- [ ] Crisp chat widget loads on all pages (async)
- [ ] All new routes included in sitemap.xml
- [ ] Playwright tests pass for all new interactive components
- [ ] No TypeScript errors, no ESLint violations
- [ ] Deployed to Vercel with no build errors
