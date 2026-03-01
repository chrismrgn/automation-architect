import type { Metadata } from "next";
import Link from "next/link";
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
    n: "01",
    title: "Email Intelligence",
    tagline: "Your inbox, on autopilot",
    description:
      "Triage, draft, prioritize, and respond \u2014 automatically. Your AI learns your communication style and handles routine emails while flagging what needs your attention.",
    features: [
      "Smart triage & prioritization",
      "Auto-drafted responses",
      "Follow-up tracking",
      "VIP sender detection",
    ],
  },
  {
    icon: Zap,
    n: "02",
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
    n: "03",
    title: "Content Pipeline",
    tagline: "Content that creates itself",
    description:
      "Blog posts, social media, newsletters \u2014 generated, reviewed, and scheduled. Your brand voice, maintained by AI.",
    features: [
      "Blog post drafting",
      "Social media scheduling",
      "Newsletter generation",
      "Brand voice consistency",
    ],
  },
  {
    icon: BarChart2,
    n: "04",
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
    n: "05",
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
    n: "06",
    title: "Business Memory",
    tagline: "An AI that knows your business",
    description:
      "Your agentic OS learns your business context over time \u2014 preferences, patterns, relationships \u2014 and gets smarter every week.",
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
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#FF6B47] mb-4 font-medium">Our Services</p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F5F0EB]">
          What We Build
        </h1>

        <p className="text-lg md:text-xl text-[#8399AE] leading-relaxed max-w-2xl mx-auto">
          Not a chatbot. Not a Zapier workflow. A full intelligent system &mdash;
          custom-built for your business.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── SERVICE LIST */

function ServiceList() {
  return (
    <section className="py-16 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-6xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="border-b border-[#3C4C5C] py-10 first:pt-0 last:border-b-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10">
                <div className="flex items-start gap-4">
                  <span className="text-[#6C47FF] font-bold text-sm mt-1">{service.n}</span>
                  <div className="w-10 h-10 rounded-lg bg-[#6C47FF]/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#FF6B47]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#F5F0EB] text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[#FF6B47] text-sm font-medium mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-[#8399AE] text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-[#00C896] mt-0.5 shrink-0" />
                        <span className="text-[#8399AE] text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── INDUSTRY VERTICALS */

function IndustryVerticals() {
  return (
    <section className="py-16 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-5">
            Built for your industry
          </h2>
          <p className="text-[#8399AE] text-lg max-w-2xl mx-auto leading-relaxed">
            Every agentic OS is custom-built. We know the workflows, tools, and
            pain points in your industry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
          {verticals.map((vertical, i) => {
            const Icon = vertical.icon;
            return (
              <div
                key={vertical.label}
                className={`p-6 text-center ${i > 0 ? "border-l border-[#3C4C5C]" : ""}`}
              >
                <div className="mb-4 w-11 h-11 rounded-xl bg-[#FF6B47]/10 flex items-center justify-center mx-auto">
                  <Icon className="h-5 w-5 text-[#FF6B47]" />
                </div>
                <p className="text-[#F5F0EB] text-sm font-medium leading-snug">
                  {vertical.label}
                </p>
              </div>
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
    <section className="py-24 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F5F0EB]">
          Ready to see what&apos;s automatable?
        </h2>
        <p className="text-[#8399AE] text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Book a free 30-minute AI Audit. We&apos;ll map out every manual
          process in your business and show you exactly what can run on
          autopilot.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-10 py-4 text-base font-medium transition-colors rounded-[2px]"
        >
          Book Your Free Audit <ArrowRight className="h-5 w-5" />
        </a>
        <p className="text-xs text-[#8399AE] mt-5">
          No commitment &middot; 30 minutes &middot; Immediate value, guaranteed
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── PAGE */

export default function ServicesPage() {
  return (
    <main className="bg-[#252F3A]">
      <Hero />
      <ServiceList />
      <IndustryVerticals />
      <CTA />
    </main>
  );
}
