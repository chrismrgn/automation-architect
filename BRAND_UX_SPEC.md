# Automation Architects — Brand & UX Spec

## 1. Brand Identity

### Company Name
**Automation Architects**

### Taglines (pick one)
1. **"Your business, on autopilot."** ← recommended — simple, aspirational
2. "Turn 80% of the work into 0% of your problem."
3. "We build the OS your business runs on."
4. "Less you. More done."
5. "The agentic OS for serious businesses."

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#0A0A0F` | Page background (near-black) |
| `--color-surface` | `#13131A` | Cards, sections |
| `--color-border` | `#1E1E2E` | Dividers, card borders |
| `--color-primary` | `#6C47FF` | Primary CTA, highlights (electric violet) |
| `--color-primary-hover` | `#7C5CFF` | CTA hover state |
| `--color-accent` | `#00D4FF` | Accent details, icons, code (cyan) |
| `--color-text-primary` | `#F0F0FF` | Headings |
| `--color-text-secondary` | `#8888AA` | Body copy, labels |
| `--color-success` | `#00C896` | Metrics, results |

**Rationale:** Dark, technical, premium. Violet signals intelligence/AI; cyan signals speed/tech. Avoids the sea of blue SaaS. Think Vercel + Linear energy.

### Typography
- **Headings:** `Inter` (700/800) — clean, technical, widely trusted
- **Body:** `Inter` (400/500) — consistency throughout
- **Mono/Code:** `JetBrains Mono` — for technical callouts, metrics, terminal-style elements
- **Scale:** 12 / 14 / 16 / 20 / 24 / 32 / 48 / 64 / 80px

### Tone of Voice
**We are:** Direct. Credible. Sharp. Pragmatic. Confident.
**We are NOT:** Hype-y. Jargon-heavy. Corporate. Vague. Over-promising.

**Voice examples:**
- ❌ "We leverage cutting-edge AI to transform your operational paradigm."
- ✅ "We build the AI systems that run your business while you sleep."
- ❌ "Unlock the power of intelligent automation solutions."
- ✅ "Your inbox answers itself. Your leads get followed up. Your reports write themselves."

### Logo Direction
Wordmark: "Automation Architects" in Inter 700. Optional icon: a simple geometric "A²" or blueprint-grid mark. Dark bg with violet/cyan accent. No literal robots or gears.

---

## 2. Website Architecture

### Pages (v1 launch)
1. **/** — Homepage (primary conversion page)
2. **/services** — What we build (detailed service breakdown)
3. **/process** — How it works (the audit → build → retainer journey)
4. **/case-studies** — Results (placeholder → real after first clients)
5. **/about** — Who we are, founder story, the "lived it" angle
6. **/contact** — Book a free audit (Calendly embed + form)

### Navigation
```
Logo | Services | Process | Case Studies | About | [Book Free Audit →]
```
CTA button in header is always visible. Sticky on scroll.

### User Journey: Cold Visit → Booked Call
1. Land on homepage hero → understand the offer in <5 seconds
2. Scroll to pain section → feel seen ("that's my business")
3. See solution → understand what they get
4. See process → remove "how does this work?" friction
5. See results/metrics → build credibility
6. See ICP section → confirm "this is for me"
7. See pricing overview → anchor expectations
8. Final CTA → book the free audit (zero commitment framing)

---

## 3. Homepage Wireframe

### Section 1: Hero
**Layout:** Full-width, dark bg, centered text, subtle animated grid/particle bg

**Headline (primary):** "Your business runs itself."
**Subhead:** "We build custom AI operating systems for growing businesses — so you can stop doing the work your business should be doing automatically."
**CTA:** `[Book Your Free AI Audit →]` (violet button)
**Secondary:** "No commitment. 30 minutes. See exactly what's automatable in your business."
**Visual:** Animated mockup of an agentic dashboard — emails triaging, tasks completing, CRM updating — all on autopilot

---

### Section 2: Social Proof Strip
**Layout:** Logo strip + single stat bar
- "Trusted by [X] businesses" (placeholder)
- Key stats: `20+ hours saved per week` | `<3 month ROI` | `4–8 week deployment`
- Subtle, muted, between hero and pain section

---

### Section 3: The Problem
**Headline:** "You're running a business. And doing jobs that shouldn't exist."
**Layout:** 3-column pain cards

| Card 1 | Card 2 | Card 3 |
|--------|--------|--------|
| 📧 Your inbox is a full-time job | 📋 Admin eats half your week | 🔁 The same tasks, every single day |
| Sorting, replying, triaging. Hours gone. | Scheduling, reporting, invoicing. All manual. | Follow-ups. Status updates. Data entry. Repeat. |

**Body:** "You started a business to build something. Instead, you're trapped in the machine. Every hour you spend on admin is an hour you're not spending on growth."

---

### Section 4: The Solution
**Headline:** "We build the AI operating system your business needs."
**Subhead:** "Not a chatbot. Not a Zapier workflow. A full intelligent system — custom-built for your business."

**6 capability cards:**
1. 📬 **Email Intelligence** — Triage, draft, prioritize, respond
2. 🤝 **CRM Automation** — Leads followed up, deals tracked, nothing dropped
3. 📝 **Content Pipeline** — Blog posts, social, newsletters — generated and scheduled
4. 📊 **Reporting & Finance** — KPIs tracked, reports written, invoices processed
5. 🗓️ **Scheduling & Tasks** — Meetings booked, tasks assigned, deadlines managed
6. 🧠 **Business Memory** — Your AI learns your business over time and gets smarter

---

### Section 5: How It Works
**Headline:** "From chaos to autopilot in 4–8 weeks."
**Layout:** Horizontal step flow

```
[1. Free Audit] → [2. Design Your OS] → [3. Build & Deploy] → [4. Ongoing Optimization]
```

1. **Free AI Audit** (Week 0) — 30-min call. We map every manual task in your business and show you what's automatable. Zero commitment.
2. **Design Your OS** ($2.5K–$5K) — We architect your custom agentic system. Process maps, tech stack, integration plan.
3. **Build & Deploy** ($8K–$25K) — We build and launch your AI OS in 4–8 weeks. Fully tested, fully yours.
4. **Ongoing Optimization** ($1.5K–$4K/mo) — We maintain, improve, and expand your system as your business grows.

---

### Section 6: Results / Metrics
**Headline:** "The numbers that matter."
**Layout:** Large metric display

```
20+ hrs/week     <3 months     4–8 weeks     100%
saved per client   to full ROI   to deploy     custom-built
```

Placeholder case study card: "[Client type] — saved 22 hours/week, closed 40% more deals within 60 days of deployment." (Replace with real data after first clients)

---

### Section 7: Who It's For (ICP)
**Headline:** "Built for businesses that are ready to scale — not drown."

**Layout:** Split — "This is for you if..." vs "This isn't for you if..."

**For you if:**
- ✅ You're doing $1M–$20M revenue and feel operationally stretched
- ✅ You have 5–50 employees and the owner is still doing admin
- ✅ You're paying for 5+ SaaS tools you underuse
- ✅ You've heard of AI but haven't implemented anything that actually works
- ✅ You want to scale without hiring more people for the same tasks

**Not for you if:**
- ❌ You want a chatbot or a simple automation
- ❌ You're not ready to invest in your systems
- ❌ You want it done in a week

---

### Section 8: Investment Overview
**Headline:** "What does it cost? Less than hiring."

**Layout:** 3 cards

| Free Audit | Build Sprint | Retainer |
|------------|-------------|---------|
| $0 | $8K–$25K | $1.5K–$4K/mo |
| 30-min call | 4–8 weeks | Ongoing |
| See your automation potential | Full custom AI OS deployed | Maintenance + expansion |
| [Book Now →] | | |

**Body:** "Compare that to a full-time operations hire at $60–80K/year who still can't match what a well-built AI OS does 24/7."

---

### Section 9: Final CTA
**Headline:** "What would you do with 20 extra hours a week?"
**Subhead:** "Book a free 30-minute AI Audit. We'll map out exactly what's automatable in your business — no pitch, no pressure, just a clear picture of what's possible."
**CTA:** `[Book Your Free AI Audit →]`
**Trust signals:** "No commitment required." | "30 minutes." | "Immediate value, guaranteed."

---

### Section 10: Footer
- Logo + tagline
- Links: Services / Process / Case Studies / About / Contact
- Legal: Privacy / Terms
- Social: LinkedIn / X
- © 2026 Automation Architects

---

## 4. AEO Strategy

### Questions prospects are asking AI tools:
- "What is an agentic AI operating system?"
- "How can AI automate my business operations?"
- "What's the difference between AI automation and Zapier?"
- "How much does AI consulting cost for small business?"
- "What processes can AI automate for a small business?"
- "How long does it take to implement AI automation?"
- "Is AI automation worth it for a $5M business?"

### FAQ Schema targets:
```json
{
  "Q": "What is an agentic OS for business?",
  "A": "An agentic OS is a custom AI system that handles business operations autonomously — email management, CRM updates, content creation, reporting, and more — without human input for each task."
},
{
  "Q": "How is this different from Zapier or Make.com?",
  "A": "Zapier and Make run rule-based workflows triggered by specific events. An agentic OS uses AI to make decisions, handle exceptions, learn from context, and improve over time — like a human employee, not a flowchart."
},
{
  "Q": "How long does implementation take?",
  "A": "Most clients have a fully deployed agentic OS within 4–8 weeks of starting the build sprint."
}
```

### Definitional content pages to create:
- `/blog/what-is-an-agentic-os` — cornerstone content
- `/blog/ai-automation-vs-zapier-difference` — comparison content
- `/blog/how-much-does-ai-consulting-cost` — commercial intent

### Entity associations:
- AI automation consulting
- Agentic systems
- Business process automation
- OpenClaw (link to ecosystem)
- SMB AI implementation

---

## 5. Copy Briefs

### Hero Headlines (5 variants)
1. "Your business runs itself." ← primary
2. "Stop doing jobs that AI should be doing."
3. "We build the AI OS your business needs to scale."
4. "80% of your workload. 0% of your attention."
5. "What if your business ran on autopilot?"

### Value Props (3 variants)
1. "Custom AI systems that handle email, CRM, content, reporting, and more — deployed in 4–8 weeks."
2. "We turn your business's manual busywork into intelligent automation. You focus on what only you can do."
3. "Not a chatbot. Not a template. A full custom AI operating system built for your specific business."

### CTA Variants
- "Book Your Free AI Audit →" ← primary
- "See What's Automatable →"
- "Get Your Free Audit →"
- "Start With a Free Audit →"
