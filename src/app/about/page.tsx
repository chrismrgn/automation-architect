import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(108,71,255,0.08),transparent)]" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <Badge
          variant="outline"
          className="mb-6 border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] text-xs px-3 py-1"
        >
          About Us
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 text-[#F0F0FF]">
          We&apos;re not consultants.{" "}
          <span className="text-gradient">We&apos;re builders.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#A0A0BB] leading-relaxed max-w-2xl mx-auto">
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
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-12 text-center">
          Built from experience,{" "}
          <span className="text-[#A0A0BB] font-normal">not theory</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column — narrative */}
          <div className="space-y-5">
            <p className="text-[#A0A0BB] leading-relaxed">
              We started Automation Architects because we lived the problem. As
              operators and founders ourselves, we spent years drowning in the
              kind of work that should have been automated a decade ago — email
              triage, CRM updates, weekly reports, invoice processing.
            </p>
            <p className="text-[#A0A0BB] leading-relaxed">
              We tried Zapier. We tried Make.com. We tried hiring VAs. Nothing
              worked at the level we needed. So we built our own agentic
              systems — and the results were immediate. Hours reclaimed. Revenue
              up. Operations running while we slept.
            </p>
            <p className="text-[#A0A0BB] leading-relaxed">
              Now we build those same systems for businesses like yours. Not
              templates. Not plugins. Custom AI operating systems that actually
              understand your business.
            </p>
          </div>

          {/* Right column — pull quote card */}
          <Card className="bg-[#13131A] border-l-4 border-l-[#6C47FF] border-t-[#1E1E2E] border-r-[#1E1E2E] border-b-[#1E1E2E]">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-[#6C47FF]/40 mb-4" />
              <blockquote className="text-xl md:text-2xl font-bold text-[#F0F0FF] leading-snug mb-6">
                We saved ourselves 30+ hours/week before we saved our first
                client.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6C47FF]/20 flex items-center justify-center text-[#6C47FF] font-bold text-sm">
                  AA
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0F0FF]">
                    Founding Team
                  </p>
                  <p className="text-xs text-[#A0A0BB]">
                    Automation Architects
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── COMPARISON */

function Comparison() {
  return (
    <section className="py-16 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-12 text-center">
          We&apos;re not like the others.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The usual agency */}
          <Card className="bg-[#13131A] border-[#1E1E2E]">
            <CardContent className="p-8">
              <h3 className="font-semibold text-[#A0A0BB] text-lg mb-6 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-400/70" />
                The usual agency experience
              </h3>
              <ul className="space-y-3.5">
                {usualAgency.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-red-400/50 mt-0.5 shrink-0" />
                    <span className="text-[#A0A0BB] text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* How we do it */}
          <Card className="border-[#00C896]/20 bg-[#00C896]/5">
            <CardContent className="p-8">
              <h3 className="font-semibold text-[#00C896] text-lg mb-6 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                How we do it
              </h3>
              <ul className="space-y-3.5">
                {howWeDoIt.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-[#00C896] mt-0.5 shrink-0" />
                    <span className="text-[#A0A0BB] text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── VALUES */

function Values() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-12 text-center">
          What we believe
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card
                key={value.title}
                className="bg-[#13131A] border-[#1E1E2E] hover:border-[#6C47FF]/30 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="mb-5 w-11 h-11 rounded-xl bg-[#6C47FF]/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#6C47FF]" />
                  </div>
                  <h3 className="font-semibold text-[#F0F0FF] text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#A0A0BB] text-sm leading-relaxed">
                    {value.description}
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
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0A0A0F] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F0F0FF]">
          Want to work with us?
        </h2>
        <p className="text-[#A0A0BB] text-lg leading-relaxed max-w-xl mx-auto mb-8">
          We&apos;re selective about who we work with — because we go deep. If
          you&apos;re serious about automating your business, let&apos;s talk.
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

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0F]">
      <Hero />
      <OriginStory />
      <Comparison />
      <Values />
      <CTA />
    </main>
  );
}
