import type { Metadata } from "next";
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
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#FF6B47] mb-4 font-medium">Get Started</p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F5F0EB]">
          Book Your Free AI Audit
        </h1>

        <p className="text-lg md:text-xl text-[#8399AE] leading-relaxed max-w-2xl mx-auto mb-8">
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
    <section className="py-16 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left column — Calendly */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-[#F5F0EB] mb-6">
              Pick a time that works
            </h2>
            <div className="bg-[#2E3B47] border border-[#3C4C5C] overflow-hidden">
              <iframe
                src="https://calendly.com/automation-architects/free-audit"
                width="100%"
                height={700}
                frameBorder="0"
                title="Schedule a free AI audit"
                className="block"
              />
            </div>
          </div>

          {/* Right column — Contact form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#F5F0EB] mb-2">
              Or send us a message
            </h2>
            <p className="text-sm text-[#8399AE] mb-6">
              Prefer email? Fill out this form and we&apos;ll get back to you
              within 24 hours.
            </p>
            <div className="bg-[#2E3B47] border border-[#3C4C5C] p-6">
              <ContactForm />
            </div>
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
      n: "01",
      title: "We audit your operations",
      description:
        "We\u2019ll walk through your day-to-day and identify every task that\u2019s automatable.",
    },
    {
      icon: DollarSign,
      n: "02",
      title: "You see the ROI",
      description:
        "We\u2019ll estimate how many hours and dollars you\u2019d save with an agentic OS.",
    },
    {
      icon: ThumbsUp,
      n: "03",
      title: "You decide \u2014 no pressure",
      description:
        "If it makes sense, we\u2019ll outline next steps. If not, you walk away with a free audit report.",
    },
  ];

  return (
    <section className="py-16 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight">
            What happens on the call
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`p-8 ${i > 0 ? "border-t md:border-t-0 md:border-l border-[#3C4C5C]" : ""}`}
              >
                <span className="text-[#6C47FF] font-bold text-sm mb-3 block">{step.n}</span>
                <div className="mb-4 w-10 h-10 rounded-lg bg-[#6C47FF]/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#FF6B47]" />
                </div>
                <h3 className="font-semibold text-[#F5F0EB] text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-[#8399AE] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
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
    <section className="py-16 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight">
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
    <main className="bg-[#252F3A]">
      <Hero />
      <BookingSection />
      <WhatToExpect />
      <Faq />
    </main>
  );
}
