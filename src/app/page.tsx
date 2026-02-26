"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail, BarChart2, Calendar, FileText, Brain, Zap,
  CheckCircle, XCircle, ArrowRight, Menu, X,
} from "lucide-react";

/* ─────────────────────────────────────────── NAV */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#results", label: "Results" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#0A0A0F]/85 border-b border-[#1E1E2E]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-lg tracking-tight text-[#F0F0FF]">
          Automation<span className="text-[#6C47FF]">Architects</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#A0A0BB] hover:text-[#F0F0FF] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          asChild
          size="sm"
          className="hidden md:inline-flex bg-[#6C47FF] hover:bg-[#7C5CFF] text-white violet-glow transition-all"
        >
          <a href="#contact">Book Free Audit <ArrowRight className="ml-1 h-3.5 w-3.5" /></a>
        </Button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#A0A0BB] hover:text-[#F0F0FF]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1E1E2E] bg-[#13131A] px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#A0A0BB] hover:text-[#F0F0FF] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Separator className="bg-[#1E1E2E]" />
          <a
            href="#contact"
            className="text-sm font-medium text-[#6C47FF]"
            onClick={() => setMenuOpen(false)}
          >
            Book Free Audit →
          </a>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────── HERO */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(108,71,255,0.12),transparent)]" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <Badge
          variant="outline"
          className="mb-8 border-[#6C47FF]/30 bg-[#6C47FF]/10 text-[#6C47FF] text-xs px-3 py-1"
        >
          <Zap className="mr-1.5 h-3 w-3" />
          AI Operating Systems for Growing Businesses
        </Badge>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="text-gradient">Your business</span>
          <br />
          <span className="text-[#F0F0FF]">runs itself.</span>
        </h1>

        <p className="text-lg md:text-xl text-[#A0A0BB] leading-relaxed max-w-2xl mx-auto mb-8">
          We build custom AI operating systems for growing businesses — so you can stop
          doing the work your business should be doing automatically.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button
            asChild
            size="lg"
            className="bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-8 h-12 text-base violet-glow transition-all"
          >
            <a href="#contact">
              Book Your Free AI Audit <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <a
            href="#process"
            className="text-sm text-[#A0A0BB] hover:text-[#F0F0FF] transition-colors"
          >
            See how it works ↓
          </a>
        </div>

        <p className="text-xs text-[#A0A0BB]">
          No commitment · 30 minutes · Immediate value, guaranteed
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── STATS */
function Stats() {
  const items = [
    { value: "20+", label: "hours saved per week" },
    { value: "<3mo", label: "average payback period" },
    { value: "4–8wk", label: "from kickoff to live" },
    { value: "100%", label: "custom-built systems" },
  ];
  return (
    <div className="border-y border-[#1E1E2E] bg-[#13131A]/60">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item) => (
            <div key={item.label}>
              <div className="text-2xl font-bold text-[#00C896]">{item.value}</div>
              <div className="text-xs text-[#A0A0BB] mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────── PROBLEM */
function Problem() {
  const pains = [
    {
      icon: <Mail className="h-6 w-6 text-[#6C47FF]" />,
      title: "Your inbox is a full-time job",
      desc: "Sorting, triaging, drafting replies. Hours disappear every day into work that AI should be handling for you.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-[#6C47FF]" />,
      title: "Admin eats half your week",
      desc: "Scheduling, reporting, invoicing — all manual. All your time. None of it is actually growing your business.",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-[#6C47FF]" />,
      title: "The same tasks. Every day.",
      desc: "Follow-ups, status updates, data entry — on repeat. You're trapped in the machine instead of building it.",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-5">
            You&apos;re running a business.
            <br />
            <span className="text-[#A0A0BB] font-normal">
              And doing jobs that shouldn&apos;t exist.
            </span>
          </h2>
          <p className="text-[#A0A0BB] text-lg max-w-xl mx-auto leading-relaxed">
            You started to build something. Instead, you&apos;re stuck in it. Every hour
            spent on admin is an hour not spent on growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((p) => (
            <Card key={p.title} className="bg-[#13131A] border-[#1E1E2E] hover:border-[#6C47FF]/30 transition-colors">
              <CardContent className="p-8">
                <div className="mb-5 w-11 h-11 rounded-xl bg-[#6C47FF]/10 flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-[#F0F0FF] text-lg mb-2">{p.title}</h3>
                <p className="text-[#A0A0BB] text-sm leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── SOLUTION */
function Solution() {
  const caps = [
    { icon: <Mail className="h-5 w-5" />, title: "Email Intelligence", desc: "Triage, draft, prioritize, and respond — automatically, 24/7." },
    { icon: <Zap className="h-5 w-5" />, title: "CRM Automation", desc: "Leads followed up, deals tracked, nothing ever dropped." },
    { icon: <FileText className="h-5 w-5" />, title: "Content Pipeline", desc: "Blog posts, social, newsletters — generated and scheduled." },
    { icon: <BarChart2 className="h-5 w-5" />, title: "Reporting & Finance", desc: "KPIs tracked, reports written, invoices processed." },
    { icon: <Calendar className="h-5 w-5" />, title: "Scheduling & Tasks", desc: "Meetings booked, tasks assigned, deadlines managed." },
    { icon: <Brain className="h-5 w-5" />, title: "Business Memory", desc: "Your AI learns your business over time and gets smarter." },
  ];

  return (
    <section id="services" className="py-16 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-5 border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF] text-xs"
          >
            Not a chatbot. Not Zapier.
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-5">
            We build the AI operating system
            <br />
            <span className="text-gradient">your business needs.</span>
          </h2>
          <p className="text-[#A0A0BB] text-lg max-w-xl mx-auto leading-relaxed">
            A full intelligent system — custom-built for how your business actually runs.
            Every workflow. Every integration. Every edge case.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caps.map((c) => (
            <Card
              key={c.title}
              className="bg-[#13131A] border-[#1E1E2E] hover:border-[#00D4FF]/25 transition-colors group"
            >
              <CardContent className="p-6">
                <div className="mb-4 w-10 h-10 rounded-lg bg-[#6C47FF]/10 flex items-center justify-center text-[#00D4FF] group-hover:bg-[#6C47FF]/20 transition-colors">
                  {c.icon}
                </div>
                <h3 className="font-semibold text-[#F0F0FF] mb-1.5">{c.title}</h3>
                <p className="text-[#A0A0BB] text-sm leading-relaxed">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── PROCESS */
function Process() {
  const steps = [
    { n: "01", time: "Week 0 · Free", title: "AI Audit", desc: "30-min call. We map every manual task and show you exactly what's automatable. No commitment." },
    { n: "02", time: "$2.5K – $5K", title: "Design Your OS", desc: "We architect your custom agentic system. Process maps, tech stack, integration plan." },
    { n: "03", time: "$8K – $25K", title: "Build & Deploy", desc: "We build and launch your AI OS in 4–8 weeks. Fully tested, fully yours." },
    { n: "04", time: "$1.5K – $4K/mo", title: "Ongoing Optimization", desc: "Maintenance, new agent builds, and improvements as your business grows." },
  ];

  return (
    <section id="process" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-5">
            From chaos to autopilot
            <br />
            <span className="text-[#6C47FF]">in 4–8 weeks.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-14 right-[-1rem] h-px bg-[#6C47FF]/20" />
              )}
              <div className="w-14 h-14 rounded-2xl bg-[#6C47FF]/10 border border-[#6C47FF]/25 flex items-center justify-center text-[#6C47FF] font-bold text-lg mb-5">
                {s.n}
              </div>
              <div className="text-xs text-[#00D4FF] font-medium mb-1.5">{s.time}</div>
              <h3 className="font-semibold text-[#F0F0FF] text-lg mb-2">{s.title}</h3>
              <p className="text-[#A0A0BB] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── RESULTS */
function Results() {
  const metrics = [
    { value: "20+", label: "Hours saved", sub: "per week, per client" },
    { value: "3mo", label: "Average ROI", sub: "typical payback period" },
    { value: "8wk", label: "Max to deploy", sub: "kickoff to live system" },
    { value: "0", label: "Off-the-shelf", sub: "everything is custom" },
  ];

  return (
    <section id="results" className="py-16 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] mb-5">
            The numbers that matter.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {metrics.map((m) => (
            <Card key={m.label} className="bg-[#13131A] border-[#1E1E2E] text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-[#00C896] mb-1">{m.value}</div>
                <div className="text-sm font-medium text-[#F0F0FF]">{m.label}</div>
                <div className="text-xs text-[#A0A0BB] mt-1">{m.sub}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial placeholder */}
        <Card className="bg-[#13131A] border-[#6C47FF]/20">
          <CardContent className="p-8">
            <div className="border-l-4 border-[#6C47FF] pl-6">
              <p className="text-[#A0A0BB] italic text-lg leading-relaxed mb-4">
                &ldquo;A professional services firm saved{" "}
                <strong className="text-[#00C896] not-italic">22 hours per week</strong> and
                closed{" "}
                <strong className="text-[#00C896] not-italic">40% more deals</strong> within
                60 days of deployment.&rdquo;
              </p>
              <p className="text-xs text-[#A0A0BB]">Case study · Professional Services · 2026</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── ICP */
function ICP() {
  const forYou = [
    "$1M–$20M revenue, feeling operationally stretched",
    "5–50 employees, owner still buried in admin",
    "Paying for 5+ SaaS tools you underuse",
    "Tried AI but nothing has actually worked yet",
    "Want to scale without just hiring more people",
  ];
  const notForYou = [
    "You just want a chatbot or a simple automation",
    "You're not ready to invest in your systems",
    "You need it done in a week",
    "You're comfortable with the status quo",
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-5">
            Built for businesses
            <br />
            <span className="text-gradient">ready to scale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-[#00C896]/20 bg-[#00C896]/5">
            <CardContent className="p-8">
              <h3 className="font-semibold text-[#00C896] text-lg mb-6 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> This is for you if…
              </h3>
              <ul className="space-y-3">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-[#00C896] mt-0.5 shrink-0" />
                    <span className="text-[#A0A0BB] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#13131A] border-[#1E1E2E]">
            <CardContent className="p-8">
              <h3 className="font-semibold text-[#A0A0BB] text-lg mb-6 flex items-center gap-2">
                <XCircle className="h-5 w-5" /> This isn&apos;t for you if…
              </h3>
              <ul className="space-y-3">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 text-[#A0A0BB]/40 mt-0.5 shrink-0" />
                    <span className="text-[#A0A0BB] text-sm leading-relaxed">{item}</span>
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

/* ─────────────────────────────────────────── PRICING */
function Pricing() {
  const plans = [
    {
      name: "Free AI Audit",
      price: "$0",
      period: "",
      desc: "See exactly what's automatable in your business.",
      features: ["30-minute strategy call", "Full process mapping", "Automation opportunity report", "Zero commitment required"],
      cta: "Book Now",
      highlight: false,
    },
    {
      name: "Build Sprint",
      price: "$8K–$25K",
      period: "one-time",
      desc: "Your full custom AI OS, deployed in 4–8 weeks.",
      features: ["Complete agentic OS build", "Email, CRM, content & more", "Integrations with your existing tools", "Testing, docs & handoff"],
      cta: "Get Started",
      highlight: true,
    },
    {
      name: "Retainer",
      price: "$1.5K–$4K",
      period: "/month",
      desc: "Ongoing optimization as your business grows.",
      features: ["System maintenance & monitoring", "New agent builds monthly", "Model & prompt optimization", "Priority support"],
      cta: "Learn More",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-5">
            What does it cost?
            <br />
            <span className="text-[#6C47FF]">Less than hiring.</span>
          </h2>
          <p className="text-[#A0A0BB] text-lg max-w-xl mx-auto leading-relaxed">
            A full-time ops hire costs $60–80K/year — and still can&apos;t match what a
            well-built AI OS does 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`flex flex-col relative ${
                p.highlight
                  ? "border-[#6C47FF]/50 bg-[#6C47FF]/8"
                  : "bg-[#13131A] border-[#1E1E2E]"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                  <Badge className="bg-[#6C47FF] text-white text-xs px-3">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardContent className="p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <p className="text-xs text-[#A0A0BB] font-medium uppercase tracking-wider mb-3">
                    {p.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-[#F0F0FF]">{p.price}</span>
                    {p.period && (
                      <span className="text-[#A0A0BB] text-sm">{p.period}</span>
                    )}
                  </div>
                  <p className="text-[#A0A0BB] text-sm">{p.desc}</p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-[#00C896] mt-0.5 shrink-0" />
                      <span className="text-[#A0A0BB] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    p.highlight
                      ? "bg-[#6C47FF] hover:bg-[#7C5CFF] text-white violet-glow"
                      : "bg-transparent border border-[#1E1E2E] text-[#F0F0FF] hover:border-[#6C47FF]/40 hover:bg-[#6C47FF]/5"
                  } transition-all`}
                >
                  <a href="#contact">
                    {p.cta} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── CTA */
function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(108,71,255,0.1),transparent)]" />
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0D0D14] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="text-[#F0F0FF]">What would you do with </span>
          <span className="text-gradient">20 extra hours</span>
          <span className="text-[#F0F0FF]"> a week?</span>
        </h2>
        <p className="text-[#A0A0BB] text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Book a free 30-minute AI Audit. We&apos;ll map out exactly what&apos;s automatable
          in your business — no pitch, no pressure, just clarity on what&apos;s possible.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-10 h-14 text-base violet-glow transition-all"
        >
          <a href="mailto:hello@automationarchitects.ai">
            Book Your Free AI Audit <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <p className="text-xs text-[#A0A0BB] mt-5">
          No commitment · 30 minutes · Immediate value, guaranteed
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── FOOTER */
function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] bg-[#0A0A0F] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-[#F0F0FF] text-lg">
            Automation<span className="text-[#6C47FF]">Architects</span>
          </p>
          <p className="text-[#A0A0BB] text-sm mt-1">Your business, on autopilot.</p>
        </div>
        <div className="flex gap-6 text-sm text-[#A0A0BB]">
          {["#services", "#process", "#results", "#pricing"].map((href) => (
            <a key={href} href={href} className="hover:text-[#F0F0FF] transition-colors capitalize">
              {href.replace("#", "")}
            </a>
          ))}
        </div>
        <p className="text-xs text-[#A0A0BB]">© 2026 Automation Architects</p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────── PAGE */
export default function Home() {
  return (
    <main className="bg-[#0A0A0F]">
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <Process />
      <Results />
      <ICP />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
