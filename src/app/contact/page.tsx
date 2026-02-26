import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ClipboardList, DollarSign, ThumbsUp } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ContactFaq } from "@/components/contact-faq";

export const metadata: Metadata = {
  title: "Contact — Book Your Free AI Audit | Automation Architects",
  description:
    "Book a free 30-minute AI audit with Automation Architects. We'll map out exactly what's automatable in your business and show you the ROI — no commitment required.",
};

/* ─────────────────────────────────────────── HERO */

function Hero() {
  const trustSignals = ["No commitment", "30 minutes", "Immediate value"];

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(108,71,255,0.08),transparent)]" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <Badge
          variant="outline"
          className="mb-6 border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] text-xs px-3 py-1"
        >
          Get Started
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F0F0FF]">
          Book Your Free AI Audit
        </h1>

        <p className="text-lg md:text-xl text-[#A0A0BB] leading-relaxed max-w-2xl mx-auto mb-8">
          30 minutes. Zero commitment. We&apos;ll map out exactly what&apos;s
          automatable in your business and show you the ROI.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trustSignals.map((signal) => (
            <span
              key={signal}
              className="flex items-center gap-2 text-sm text-[#00C896]"
            >
              <CheckCircle className="h-4 w-4" />
              {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── BOOKING + FORM */

function BookingSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left column — Calendly */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-[#F0F0FF] mb-6">
              Pick a time that works
            </h2>
            <Card className="bg-[#13131A] border-[#1E1E2E] overflow-hidden p-0">
              <CardContent className="p-0">
                <iframe
                  src="https://calendly.com/automation-architects/free-audit"
                  width="100%"
                  height={700}
                  frameBorder="0"
                  title="Schedule a free AI audit"
                  className="block"
                />
              </CardContent>
            </Card>
          </div>

          {/* Right column — Contact form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#F0F0FF] mb-2">
              Or send us a message
            </h2>
            <p className="text-sm text-[#A0A0BB] mb-6">
              Prefer email? Fill out this form and we&apos;ll get back to you
              within 24 hours.
            </p>
            <Card className="bg-[#13131A] border-[#1E1E2E]">
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── WHAT TO EXPECT */

function WhatToExpect() {
  const steps = [
    {
      icon: ClipboardList,
      title: "We audit your operations",
      description:
        "We\u2019ll walk through your day-to-day and identify every task that\u2019s automatable.",
    },
    {
      icon: DollarSign,
      title: "You see the ROI",
      description:
        "We\u2019ll estimate how many hours and dollars you\u2019d save with an agentic OS.",
    },
    {
      icon: ThumbsUp,
      title: "You decide \u2014 no pressure",
      description:
        "If it makes sense, we\u2019ll outline next steps. If not, you walk away with a free audit report.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight">
            What happens on the call
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.title}
                className="bg-[#13131A] border-[#1E1E2E] hover:border-[#6C47FF]/30 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="mb-5 w-12 h-12 rounded-full bg-[#6C47FF]/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-semibold text-[#F0F0FF] text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#A0A0BB] text-sm leading-relaxed">
                    {step.description}
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

/* ─────────────────────────────────────────── FAQ */

function Faq() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight">
            Quick answers
          </h2>
        </div>
        <ContactFaq />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── PAGE */

export default function ContactPage() {
  return (
    <main className="bg-[#0A0A0F]">
      <Hero />
      <BookingSection />
      <WhatToExpect />
      <Faq />
    </main>
  );
}
