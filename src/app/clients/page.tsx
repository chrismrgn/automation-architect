import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    { name: "Weekly Report", status: "Scheduled", color: "text-[#00D4FF]" },
    { name: "CRM Sync", status: "Running", color: "text-[#00C896]" },
  ];

  return (
    <div className="relative mx-auto max-w-2xl rounded-2xl border border-[#1E1E2E] bg-[#13131A] overflow-hidden shadow-2xl shadow-[#6C47FF]/10">
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E1E2E] bg-[#0D0D14]">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-4 text-xs text-[#8888AA] font-mono">client.automationarchitects.ai/dashboard</span>
      </div>

      {/* Dashboard header */}
      <div className="px-6 pt-6 pb-4 border-b border-[#1E1E2E]">
        <p className="text-xs text-[#8888AA] mb-1">Your Agentic OS — Week of Feb 24, 2026</p>
        <div className="flex items-end gap-8">
          <div>
            <p className="text-3xl font-bold text-[#00C896]">18.5</p>
            <p className="text-xs text-[#8888AA] mt-0.5">Hours saved this week</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#F0F0FF]">12</p>
            <p className="text-xs text-[#8888AA] mt-0.5">Automations running</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#6C47FF]">$4,200</p>
            <p className="text-xs text-[#8888AA] mt-0.5">Est. value this month</p>
          </div>
        </div>
      </div>

      {/* Workflow list */}
      <div className="px-6 py-4">
        <p className="text-xs uppercase tracking-widest text-[#8888AA] mb-3 font-medium">Active Workflows</p>
        <div className="space-y-2">
          {workflows.map((wf) => (
            <div key={wf.name} className="flex items-center justify-between py-2 border-b border-[#1E1E2E]/60 last:border-0">
              <span className="text-sm text-[#F0F0FF]">{wf.name}</span>
              <span className={`text-xs font-medium ${wf.color} flex items-center gap-1.5`}>
                <span className={`h-1.5 w-1.5 rounded-full ${wf.status === "Running" ? "bg-[#00C896]" : "bg-[#00D4FF]"}`} />
                {wf.status}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#8888AA] mt-4">Last updated: 2 minutes ago · <span className="text-[#6C47FF]">View full report →</span></p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────── HERO */
function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(108,71,255,0.08),transparent)]" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 border-[#6C47FF]/30 bg-[#6C47FF]/10 text-[#6C47FF] text-xs px-3 py-1"
          >
            Client Portal
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-[#F0F0FF]">
            Your automation dashboard.<br />
            <span className="text-[#6C47FF]">Always on.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#A0A0BB] leading-relaxed max-w-2xl mx-auto mb-10">
            Every client gets a live view of their agentic OS — what&apos;s running, what it saved this week, and what&apos;s coming next.
          </p>
        </div>

        <DashboardMockup />

        <div className="text-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-8 h-12 text-base violet-glow transition-all"
          >
            <Link href="/contact">
              Become a client <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
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
      title: "Live Visibility",
      description:
        "See every automation running in real time. Know exactly what your AI OS is doing and what it saved you this week.",
    },
    {
      icon: BarChart2,
      title: "Results Tracking",
      description:
        "Hours saved, tasks completed, revenue impacted. Your ROI tracked automatically, every week — no manual reporting.",
    },
    {
      icon: Zap,
      title: "Direct Access",
      description:
        "One Slack channel. Direct access to your builder. No tickets, no delays, no project manager middlemen.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF]">What clients get</h2>
          <p className="text-[#A0A0BB] mt-3 max-w-xl mx-auto">
            Not just automation — visibility, accountability, and a team that stays with you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Card key={f.title} className="bg-[#13131A] border-[#1E1E2E] hover:border-[#6C47FF]/30 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-5 w-12 h-12 rounded-full bg-[#6C47FF]/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-semibold text-[#F0F0FF] text-lg mb-2">{f.title}</h3>
                  <p className="text-[#A0A0BB] text-sm leading-relaxed">{f.description}</p>
                </CardContent>
              </Card>
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
    { week: "Week 1", label: "Free Audit", desc: "We map your business and show you what's automatable." },
    { week: "Weeks 2–3", label: "Design", desc: "We architect your custom agentic OS — process maps, stack, integrations." },
    { week: "Weeks 4–8", label: "Build & Deploy", desc: "We build, test, and launch your AI OS. You get access to your dashboard." },
    { week: "Week 9+", label: "Your Dashboard is Live", desc: "Track hours saved, automations running, and ROI — in real time." },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF]">The client experience</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <div key={step.week} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+2rem)] right-[-2rem] h-px bg-[#1E1E2E]" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[#6C47FF]/20 border border-[#6C47FF]/40 flex items-center justify-center mb-4 relative z-10">
                  <CheckCircle className="h-5 w-5 text-[#6C47FF]" />
                </div>
                <p className="text-xs text-[#8888AA] mb-1">{step.week}</p>
                <p className="font-semibold text-[#F0F0FF] mb-2">{step.label}</p>
                <p className="text-sm text-[#A0A0BB] leading-relaxed">{step.desc}</p>
              </div>
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
    <section className="py-20 px-6 bg-[#0D0D14]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] mb-4">
          The first step is free.
        </h2>
        <p className="text-[#A0A0BB] text-lg mb-8 leading-relaxed">
          Book a 30-minute AI Audit. We&apos;ll show you exactly what your dashboard could be tracking — before you spend a dollar.
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
    <main className="bg-[#0A0A0F]">
      <Hero />
      <WhatClientsGet />
      <Timeline />
      <Cta />
    </main>
  );
}
