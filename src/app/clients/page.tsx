import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, BarChart2, Eye, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Portal — Automation Architects",
  description:
    "Every Automation Architects client gets a live dashboard showing exactly what their AI OS is doing — hours saved, automations running, and what's coming next.",
};

/* ─────────────────────────────────────────── DASHBOARD MOCKUP */
function DashboardMockup() {
  const workflows = [
    { name: "Email Triage", status: "Running", color: "text-[#00C896]" },
    { name: "Lead Follow-Up", status: "Running", color: "text-[#00C896]" },
    { name: "Invoice Processing", status: "Running", color: "text-[#00C896]" },
    { name: "Weekly Report", status: "Scheduled", color: "text-[#FF6B47]" },
    { name: "CRM Sync", status: "Running", color: "text-[#00C896]" },
  ];

  return (
    <div className="relative mx-auto max-w-2xl border border-[#3C4C5C] bg-[#2E3B47] overflow-hidden">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#3C4C5C] bg-[#252F3A]">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-4 text-xs text-[#8399AE] font-mono">client.automationarchitects.ai/dashboard</span>
      </div>

      {/* Dashboard header */}
      <div className="px-6 pt-6 pb-4 border-b border-[#3C4C5C]">
        <p className="text-xs text-[#8399AE] mb-1">Your Agentic OS &mdash; Week of Feb 24, 2026</p>
        <div className="flex items-end gap-8">
          <div>
            <p className="text-3xl font-bold text-[#00C896]">18.5</p>
            <p className="text-xs text-[#8399AE] mt-0.5">Hours saved this week</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#F5F0EB]">12</p>
            <p className="text-xs text-[#8399AE] mt-0.5">Automations running</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#6C47FF]">$4,200</p>
            <p className="text-xs text-[#8399AE] mt-0.5">Est. value this month</p>
          </div>
        </div>
      </div>

      {/* Workflow list */}
      <div className="px-6 py-4">
        <p className="text-xs uppercase tracking-widest text-[#8399AE] mb-3 font-medium">Active Workflows</p>
        <div className="space-y-2">
          {workflows.map((wf) => (
            <div key={wf.name} className="flex items-center justify-between py-2 border-b border-[#3C4C5C]/60 last:border-0">
              <span className="text-sm text-[#F5F0EB]">{wf.name}</span>
              <span className={`text-xs font-medium ${wf.color} flex items-center gap-1.5`}>
                <span className={`h-1.5 w-1.5 rounded-full ${wf.status === "Running" ? "bg-[#00C896]" : "bg-[#FF6B47]"}`} />
                {wf.status}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#8399AE] mt-4">Last updated: 2 minutes ago &middot; <span className="text-[#6C47FF]">View full report &rarr;</span></p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────── HERO */
function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#6C47FF] mb-4 font-medium">Client Portal</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F5F0EB]">
            Your automation dashboard.<br />
            <span className="text-[#6C47FF]">Always on.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#8399AE] leading-relaxed max-w-2xl mx-auto mb-10">
            Every client gets a live view of their agentic OS &mdash; what&apos;s running, what it saved this week, and what&apos;s coming next.
          </p>
        </div>

        <DashboardMockup />

        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-8 py-4 text-base font-medium transition-colors rounded-[2px]"
          >
            Become a client <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── WHAT CLIENTS GET */
function WhatClientsGet() {
  const features = [
    {
      icon: Eye,
      n: "01",
      title: "Live Visibility",
      description:
        "See every automation running in real time. Know exactly what your AI OS is doing and what it saved you this week.",
    },
    {
      icon: BarChart2,
      n: "02",
      title: "Results Tracking",
      description:
        "Hours saved, tasks completed, revenue impacted. Your ROI tracked automatically, every week \u2014 no manual reporting.",
    },
    {
      icon: Zap,
      n: "03",
      title: "Direct Access",
      description:
        "One Slack channel. Direct access to your builder. No tickets, no delays, no project manager middlemen.",
    },
  ];

  return (
    <section className="py-20 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB]">What clients get</h2>
          <p className="text-[#8399AE] mt-3 max-w-xl mx-auto">
            Not just automation &mdash; visibility, accountability, and a team that stays with you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className={`p-8 ${i > 0 ? "border-t md:border-t-0 md:border-l border-[#3C4C5C]" : ""}`}>
                <span className="text-[#6C47FF] font-bold text-sm mb-3 block">{f.n}</span>
                <div className="mb-5 w-10 h-10 rounded-lg bg-[#6C47FF]/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#FF6B47]" />
                </div>
                <h3 className="font-semibold text-[#F5F0EB] text-lg mb-2">{f.title}</h3>
                <p className="text-[#8399AE] text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── TIMELINE */
function Timeline() {
  const steps = [
    { week: "Week 1", label: "Free Audit", desc: "We map your business and show you what\u2019s automatable." },
    { week: "Weeks 2\u20133", label: "Design", desc: "We architect your custom agentic OS \u2014 process maps, stack, integrations." },
    { week: "Weeks 4\u20138", label: "Build & Deploy", desc: "We build, test, and launch your AI OS. You get access to your dashboard." },
    { week: "Week 9+", label: "Your Dashboard is Live", desc: "Track hours saved, automations running, and ROI \u2014 in real time." },
  ];

  return (
    <section className="py-20 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB]">The client experience</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={step.week} className={`p-6 text-center ${i > 0 ? "border-t md:border-t-0 md:border-l border-[#3C4C5C]" : ""}`}>
              <div className="w-10 h-10 rounded-full bg-[#6C47FF]/20 border border-[#6C47FF]/40 flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="h-5 w-5 text-[#6C47FF]" />
              </div>
              <p className="text-xs text-[#8399AE] mb-1">{step.week}</p>
              <p className="font-semibold text-[#F5F0EB] mb-2">{step.label}</p>
              <p className="text-sm text-[#8399AE] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── CTA */
function Cta() {
  return (
    <section className="py-20 px-6 border-t border-[#3C4C5C]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] mb-4">
          The first step is free.
        </h2>
        <p className="text-[#8399AE] text-lg mb-8 leading-relaxed">
          Book a 30-minute AI Audit. We&apos;ll show you exactly what your dashboard could be tracking &mdash; before you spend a dollar.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-10 py-4 text-base font-medium transition-colors rounded-[2px]"
        >
          Book Your Free Audit <ArrowRight className="h-5 w-5" />
        </a>
        <div className="flex items-center justify-center gap-6 mt-6">
          {["No commitment", "30 minutes", "Instant value"].map((s) => (
            <span key={s} className="flex items-center gap-1.5 text-xs text-[#00C896]">
              <CheckCircle className="h-3.5 w-3.5" /> {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── PAGE */
export default function ClientsPage() {
  return (
    <main className="bg-[#252F3A]">
      <Hero />
      <WhatClientsGet />
      <Timeline />
      <Cta />
    </main>
  );
}
