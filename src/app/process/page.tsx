import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BeforeAfter } from "@/components/before-after";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process — Automation Architects",
  description:
    "From chaos to autopilot in 4-8 weeks. See our proven process: free AI audit, custom system design, build & deploy, and ongoing optimization.",
  openGraph: {
    title: "Our Process — Automation Architects",
    description:
      "A proven process that turns your manual operations into an intelligent, automated system in 4-8 weeks.",
    type: "website",
  },
};

/* ── Types ──────────────────────────────────────────────── */

interface ProcessStep {
  number: string;
  title: string;
  timeline: string;
  cost: string;
  description: string;
  deliverables: string[];
}

/* ── Data ───────────────────────────────────────────────── */

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Free AI Audit",
    timeline: "Week 0",
    cost: "$0",
    description:
      "We start with a free, no-commitment call. We\u2019ll map every manual task in your business and show you exactly what\u2019s automatable \u2014 with estimated time and cost savings.",
    deliverables: [
      "Process audit report",
      "Automation opportunity map",
      "ROI estimate",
      "Zero obligation",
    ],
  },
  {
    number: "02",
    title: "Design Your OS",
    timeline: "1\u20132 weeks",
    cost: "$2.5K\u2013$5K",
    description:
      "We architect your custom agentic system. Every workflow documented, every integration planned, every edge case considered.",
    deliverables: [
      "Complete system architecture",
      "Process flow diagrams",
      "Tech stack selection",
      "Integration plan",
      "Timeline & milestones",
    ],
  },
  {
    number: "03",
    title: "Build & Deploy",
    timeline: "4\u20138 weeks",
    cost: "$8K\u2013$25K",
    description:
      "We build and launch your AI operating system. Fully tested, fully integrated with your existing tools, fully yours.",
    deliverables: [
      "Custom AI agents built",
      "Full integration with your tools",
      "Testing & quality assurance",
      "Team training & documentation",
      "100% ownership of everything",
    ],
  },
  {
    number: "04",
    title: "Ongoing Optimization",
    timeline: "Ongoing",
    cost: "$1.5K\u2013$4K/mo",
    description:
      "We maintain, improve, and expand your system as your business grows. New agents, better prompts, more automation \u2014 every month.",
    deliverables: [
      "Proactive monitoring",
      "Monthly agent improvements",
      "New automation builds",
      "Priority support",
    ],
  },
];

/* ── Hero Section ───────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(108,71,255,0.08),transparent)]" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Badge
          variant="outline"
          className="mb-8 border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] text-xs px-3 py-1"
        >
          <Sparkles className="mr-1.5 h-3 w-3" />
          How It Works
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F0F0FF]">
          From chaos to autopilot{" "}
          <span className="text-gradient">in 4&ndash;8 weeks.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#A0A0BB] leading-relaxed max-w-2xl mx-auto">
          A proven process that turns your manual operations into an
          intelligent, automated system.
        </p>
      </div>
    </section>
  );
}

/* ── Process Timeline Section ───────────────────────────── */

function ProcessTimeline() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-[#6C47FF]/40 via-[#6C47FF]/20 to-[#6C47FF]/40" />
          {/* Vertical connector line (mobile) */}
          <div className="md:hidden absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-[#6C47FF]/40 via-[#6C47FF]/20 to-[#6C47FF]/40" />

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-6 md:gap-10">
                {/* Number badge + timeline marker */}
                <div className="shrink-0 relative z-10">
                  <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-[#6C47FF]/10 border border-[#6C47FF]/25 flex items-center justify-center text-[#6C47FF] font-bold text-base md:text-xl">
                    {step.number}
                  </div>
                </div>

                {/* Content card */}
                <Card className="flex-1 bg-[#13131A] border-[#1E1E2E] hover:border-[#6C47FF]/20 transition-colors">
                  <CardContent className="p-6 md:p-8">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#00D4FF] font-medium">
                        <DollarSign className="h-3 w-3" />
                        {step.cost}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#A0A0BB]">
                        <Clock className="h-3 w-3" />
                        {step.timeline}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-[#F0F0FF] mb-3">
                      {step.title}
                    </h3>

                    <p className="text-[#A0A0BB] text-sm md:text-base leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <p className="text-xs text-[#8888AA] uppercase tracking-wider font-medium mb-3">
                        What you get
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="h-4 w-4 text-[#00C896] mt-0.5 shrink-0" />
                            <span className="text-sm text-[#A0A0BB]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ────────────────────────────────────────── */

function FinalCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(108,71,255,0.06),transparent)]" />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0A0A0F] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F0F0FF]">
          The first step is{" "}
          <span className="text-gradient">free.</span>
        </h2>
        <p className="text-[#A0A0BB] text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Book a 30-minute AI Audit. See exactly what&apos;s automatable
          &mdash; no pitch, no pressure.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-10 h-14 text-base violet-glow transition-all"
        >
          <Link href="/contact">
            Book Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────── */

export default function ProcessPage() {
  return (
    <main className="bg-[#0A0A0F]">
      <Hero />
      <ProcessTimeline />
      <BeforeAfter />
      <FinalCTA />
    </main>
  );
}
