# Automation Architects — Project Context

## Goal
Ship a polished marketing website that converts cold visitors into booked discovery calls for an AI business automation consultancy.

## Non-Goals
- NOT a SaaS product — no user accounts, no dashboards, no app logic
- NOT e-commerce — no payments, no checkout
- NOT a blog platform — blog pages are static/placeholder for now
- NOT a client portal yet (future phase)

## Success Criteria
- Visitor lands → understands the offer in <5 seconds
- Clear path to conversion: homepage CTA → /contact → booked call
- Site feels premium, technical, trustworthy — Vercel/Linear energy
- All pages exist and are linked in nav
- Contact/booking page works (Calendly embed + fallback form)
- Build passes, tests pass, deploys to Vercel

## Tech Stack
- Next.js 16 (App Router), TypeScript strict, React 19
- shadcn/ui (Button, Card, Badge, Separator installed)
- Tailwind CSS v4, framer-motion
- Vercel hosting
- No backend, no database, no auth needed

## Design Tokens (non-negotiable)
- bg: #0A0A0F | surface: #13131A | border: #1E1E2E
- primary: #6C47FF (violet) | accent: #00D4FF (cyan)
- text: #F0F0FF / #8888AA
- Font: Inter, headings 700-800 weight

## Current State
- Homepage (src/app/page.tsx): COMPLETE — do not modify
- Inner pages (/services, /process, /about, /contact): DO NOT EXIST — need to be built
- Shared Nav/Footer: NOT extracted yet — currently inline in page.tsx
- Tests: NONE

## Constraints
- TypeScript strict — zero `any` types
- Named exports only (except page/route files)
- No new npm dependencies without strong justification
- All pages must feel like one cohesive site with the homepage

## Open Questions
- Calendly account URL (using placeholder https://calendly.com/automation-architects/free-audit until real one provided)
- Real case studies: placeholder content until first clients secured
- Blog: static placeholder pages only for now

## Key Files
- BRAND_UX_SPEC.md — full design spec, copy, wireframes
- FEATURE_SPEC_V2.md — additional features (ICP qualifier, verticals, ROI calc, etc.)
- src/app/page.tsx — completed homepage (reference for design)
