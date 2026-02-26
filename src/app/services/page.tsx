import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  BarChart2,
  Calendar,
  FileText,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Megaphone,
  ShoppingCart,
  Building2,
  Briefcase,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Automation Architects",
  description:
    "Explore the full range of AI automation services we build: email intelligence, CRM automation, content pipelines, reporting, scheduling, and business memory — all custom-built for your business.",
};

/* ─────────────────────────────────────────── DATA */

const services = [
  {
    icon: Mail,
    title: "Email Intelligence",
    tagline: "Your inbox, on autopilot",
    description:
      "Triage, draft, prioritize, and respond — automatically. Your AI learns your communication style and handles routine emails while flagging what needs your attention.",
    features: [
      "Smart triage & prioritization",
      "Auto-drafted responses",
      "Follow-up tracking",
      "VIP sender detection",
    ],
  },
  {
    icon: Zap,
    title: "CRM Automation",
    tagline: "Never drop a lead again",
    description:
      "Leads scored and followed up instantly. Deals tracked automatically. Your CRM stays current without anyone touching it.",
    features: [
      "Instant lead scoring",
      "Automated follow-up sequences",
      "Deal pipeline updates",
      "Activity auto-logging",
    ],
  },
  {
    icon: FileText,
    title: "Content Pipeline",
    tagline: "Content that creates itself",
    description:
      "Blog posts, social media, newsletters — generated, reviewed, and scheduled. Your brand voice, maintained by AI.",
    features: [
      "Blog post drafting",
      "Social media scheduling",
      "Newsletter generation",
      "Brand voice consistency",
    ],
  },
  {
    icon: BarChart2,
    title: "Reporting & Finance",
    tagline: "Reports that write themselves",
    description:
      "KPIs tracked in real-time. Weekly reports auto-generated. Invoices processed without human touch.",
    features: [
      "Automated KPI dashboards",
      "Weekly report generation",
      "Invoice processing",
      "Financial reconciliation",
    ],
  },
  {
    icon: Calendar,
    title: "Scheduling & Tasks",
    tagline: "Meetings and tasks, handled",
    description:
      "Meetings booked, tasks assigned, deadlines managed. Your calendar and project management run on autopilot.",
    features: [
      "Smart meeting scheduling",
      "Task assignment & tracking",
      "Deadline management",
      "Calendar optimization",
    ],
  },
  {
    icon: Brain,
    title: "Business Memory",
    tagline: "An AI that knows your business",
    description:
      "Your agentic OS learns your business context over time — preferences, patterns, relationships — and gets smarter every week.",
    features: [
      "Contextual learning",
      "Pattern recognition",
      "Relationship mapping",
      "Continuous improvement",
    ],
  },
];

const verticals = [
  { icon: Megaphone, label: "Marketing & Creative Agencies" },
  { icon: ShoppingCart, label: "eCommerce & DTC Brands" },
  { icon: Building2, label: "Real Estate & Property" },
  { icon: Briefcase, label: "Professional Services" },
  { icon: Wrench, label: "Field Service & Operations" },
];

/* ─────────────────────────────────────────── HERO */

function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(108,71,255,0.08),transparent)]" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <Badge
          variant="outline"
          className="mb-6 border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] text-xs px-3 py-1"
        >
          Our Services
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F0F0FF]">
          What We Build
        </h1>

        <p className="text-lg md:text-xl text-[#A0A0BB] leading-relaxed max-w-2xl mx-auto">
          Not a chatbot. Not a Zapier workflow. A full intelligent system —
          custom-built for your business.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── SERVICE CARDS */

function ServiceCards() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="bg-[#13131A] border-[#1E1E2E] hover:border-[#6C47FF]/30 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="mb-5 w-12 h-12 rounded-full bg-[#6C47FF]/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#00D4FF]" />
                  </div>

                  <h3 className="font-bold text-[#F0F0FF] text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[#00D4FF] text-sm font-medium mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-[#A0A0BB] text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-[#00C896] mt-0.5 shrink-0" />
                        <span className="text-[#A0A0BB] text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── INDUSTRY VERTICALS */

function IndustryVerticals() {
  return (
    <section className="py-16 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-5">
            Built for your industry
          </h2>
          <p className="text-[#A0A0BB] text-lg max-w-2xl mx-auto leading-relaxed">
            Every agentic OS is custom-built. We know the workflows, tools, and
            pain points in your industry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            return (
              <Card
                key={vertical.label}
                className="bg-[#13131A] border-[#1E1E2E] hover:border-[#6C47FF]/30 hover:-translate-y-1 transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 w-11 h-11 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mx-auto">
                    <Icon className="h-5 w-5 text-[#00D4FF]" />
                  </div>
                  <p className="text-[#F0F0FF] text-sm font-medium leading-snug">
                    {vertical.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── CTA */

function CTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(108,71,255,0.06),transparent)]" />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0D0D14] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F0F0FF]">
          Ready to see what&apos;s automatable?
        </h2>
        <p className="text-[#A0A0BB] text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Book a free 30-minute AI Audit. We&apos;ll map out every manual
          process in your business and show you exactly what can run on
          autopilot.
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
        <p className="text-xs text-[#A0A0BB] mt-5">
          No commitment · 30 minutes · Immediate value, guaranteed
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── PAGE */

export default function ServicesPage() {
  return (
    <main className="bg-[#0A0A0F]">
      <Hero />
      <ServiceCards />
      <IndustryVerticals />
      <CTA />
    </main>
  );
}
