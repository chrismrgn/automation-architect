import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfter } from "@/components/before-after";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
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
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#FF6B47] mb-4 font-medium">How It Works</p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F5F0EB]">
          From chaos to autopilot{" "}
          <span className="text-gradient">in 4&ndash;8 weeks.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#8399AE] leading-relaxed max-w-2xl mx-auto">
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
    <section className="py-20 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-0">
          {steps.map((step) => (
            <div key={step.number} className="border-b border-[#3C4C5C] py-10 first:pt-0 last:border-b-0">
              <div className="flex gap-6 md:gap-10">
                {/* Number */}
                <div className="shrink-0">
                  <span className="text-[#6C47FF] font-bold text-3xl">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#FF6B47] font-medium">
                      <DollarSign className="h-3 w-3" />
                      {step.cost}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#8399AE]">
                      <Clock className="h-3 w-3" />
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-[#8399AE] text-sm md:text-base leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <p className="text-xs text-[#8399AE] uppercase tracking-wider font-medium mb-3">
                      What you get
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-[#00C896] mt-0.5 shrink-0" />
                          <span className="text-sm text-[#8399AE]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ────────────────────────────────────────── */

function FinalCTA() {
  return (
    <section className="py-24 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F5F0EB]">
          The first step is{" "}
          <span className="text-gradient">free.</span>
        </h2>
        <p className="text-[#8399AE] text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Book a 30-minute AI Audit. See exactly what&apos;s automatable
          &mdash; no pitch, no pressure.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-10 py-4 text-base font-medium transition-colors rounded-[2px]"
        >
          Book Your Free Audit <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────── */

export default function ProcessPage() {
  return (
    <main className="bg-[#252F3A]">
      <Hero />
      <ProcessTimeline />
      <BeforeAfter />
      <FinalCTA />
    </main>
  );
}
