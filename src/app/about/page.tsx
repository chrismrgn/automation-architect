import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Shield,
  Zap,
  Eye,
  Target,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Automation Architects",
  description:
    "We're not consultants — we're builders. Automation Architects was founded by operators who lived the problem and built agentic AI systems to solve it.",
};

/* ─────────────────────────────────────────── DATA */

const usualAgency = [
  "6-month contracts before seeing results",
  "Offshore developers you'll never meet",
  "Black-box tools you can't access or own",
  "\"Strategy decks\" with no implementation",
  "Locked into their platform forever",
];

const howWeDoIt = [
  "Working automations in 4\u20138 weeks",
  "Direct access to your builder, always",
  "You own everything. 100%.",
  "We build. We don\u2019t consult from a distance.",
  "Open stack \u2014 switch tools any time",
];

const values = [
  {
    icon: Shield,
    title: "Ownership",
    description:
      "You own everything we build. Code, prompts, integrations. No lock-in, ever.",
  },
  {
    icon: Zap,
    title: "Speed",
    description:
      "Working systems in weeks, not months. We move fast because your time matters.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No black boxes. You see how everything works and why it works that way.",
  },
  {
    icon: Target,
    title: "Results",
    description:
      "We measure success in hours saved and revenue gained \u2014 not deliverables shipped.",
  },
];

/* ─────────────────────────────────────────── HERO */

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#FF6B47] mb-4 font-medium">About Us</p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 text-[#F5F0EB]">
          We&apos;re not consultants.{" "}
          <span className="text-gradient">We&apos;re builders.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#8399AE] leading-relaxed max-w-2xl mx-auto">
          Automation Architects was founded on one idea: your business
          shouldn&apos;t need you for the tasks a machine can do better.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── ORIGIN STORY */

function OriginStory() {
  return (
    <section className="py-16 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-12 text-center">
          Built from experience,{" "}
          <span className="text-[#8399AE] font-normal">not theory</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column — narrative */}
          <div className="space-y-5">
            <p className="text-[#8399AE] leading-relaxed">
              We started Automation Architects because we lived the problem. As
              operators and founders ourselves, we spent years drowning in the
              kind of work that should have been automated a decade ago &mdash; email
              triage, CRM updates, weekly reports, invoice processing.
            </p>
            <p className="text-[#8399AE] leading-relaxed">
              We tried Zapier. We tried Make.com. We tried hiring VAs. Nothing
              worked at the level we needed. So we built our own agentic
              systems &mdash; and the results were immediate. Hours reclaimed. Revenue
              up. Operations running while we slept.
            </p>
            <p className="text-[#8399AE] leading-relaxed">
              Now we build those same systems for businesses like yours. Not
              templates. Not plugins. Custom AI operating systems that actually
              understand your business.
            </p>
          </div>

          {/* Right column — pull quote */}
          <div className="border-l-4 border-l-[#6C47FF] bg-[#2E3B47] p-8">
            <Quote className="h-8 w-8 text-[#6C47FF]/40 mb-4" />
            <blockquote className="text-xl md:text-2xl font-bold text-[#F5F0EB] leading-snug mb-6">
              We saved ourselves 30+ hours/week before we saved our first
              client.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6C47FF]/20 flex items-center justify-center text-[#6C47FF] font-bold text-sm">
                AA
              </div>
              <div>
                <p className="text-sm font-medium text-[#F5F0EB]">
                  Founding Team
                </p>
                <p className="text-xs text-[#8399AE]">
                  Automation Architects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── COMPARISON */

function Comparison() {
  return (
    <section className="py-16 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-12 text-center">
          We&apos;re not like the others.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The usual agency */}
          <div className="bg-[#2E3B47] border border-[#3C4C5C] p-8">
            <h3 className="font-semibold text-[#8399AE] text-lg mb-6 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-400/70" />
              The usual agency experience
            </h3>
            <ul className="space-y-3.5">
              {usualAgency.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="h-4 w-4 text-red-400/50 mt-0.5 shrink-0" />
                  <span className="text-[#8399AE] text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* How we do it */}
          <div className="border border-[#00C896]/20 bg-[#00C896]/5 p-8">
            <h3 className="font-semibold text-[#00C896] text-lg mb-6 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              How we do it
            </h3>
            <ul className="space-y-3.5">
              {howWeDoIt.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-[#00C896] mt-0.5 shrink-0" />
                  <span className="text-[#8399AE] text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── VALUES */

function Values() {
  return (
    <section className="py-16 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-12 text-center">
          What we believe
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`p-8 ${i > 0 ? "border-t sm:border-t-0 sm:border-l border-[#3C4C5C]" : ""}`}
              >
                <div className="mb-5 w-11 h-11 rounded-xl bg-[#6C47FF]/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#6C47FF]" />
                </div>
                <h3 className="font-semibold text-[#F5F0EB] text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-[#8399AE] text-sm leading-relaxed">
                  {value.description}
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
          Want to work with us?
        </h2>
        <p className="text-[#8399AE] text-lg leading-relaxed max-w-xl mx-auto mb-8">
          We&apos;re selective about who we work with &mdash; because we go deep. If
          you&apos;re serious about automating your business, let&apos;s talk.
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

export default function AboutPage() {
  return (
    <main className="bg-[#252F3A]">
      <Hero />
      <OriginStory />
      <Comparison />
      <Values />
      <CTA />
    </main>
  );
}
