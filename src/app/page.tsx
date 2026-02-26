"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  BarChart2,
  Calendar,
  FileText,
  Brain,
  Zap,
  CheckCircle,
  XCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

/* ── Nav ─────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#0A0A0F]/80 border-b border-[#1E1E2E]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg text-[#F0F0FF] tracking-tight">
          Automation<span className="text-[#6C47FF]">Architects</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#8888AA]">
          <a href="#services" className="hover:text-[#F0F0FF] transition-colors">Services</a>
          <a href="#process" className="hover:text-[#F0F0FF] transition-colors">Process</a>
          <a href="#results" className="hover:text-[#F0F0FF] transition-colors">Results</a>
          <a href="#pricing" className="hover:text-[#F0F0FF] transition-colors">Pricing</a>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6C47FF] text-white text-sm font-medium hover:bg-[#7C5CFF] transition-all glow-violet"
        >
          Book Free Audit <ArrowRight size={14} />
        </a>
        <button className="md:hidden text-[#8888AA]" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#13131A] border-t border-[#1E1E2E] px-6 py-4 flex flex-col gap-4 text-sm">
          <a href="#services" className="text-[#8888AA]" onClick={() => setOpen(false)}>Services</a>
          <a href="#process" className="text-[#8888AA]" onClick={() => setOpen(false)}>Process</a>
          <a href="#results" className="text-[#8888AA]" onClick={() => setOpen(false)}>Results</a>
          <a href="#pricing" className="text-[#8888AA]" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#contact" className="text-[#6C47FF] font-medium" onClick={() => setOpen(false)}>Book Free Audit →</a>
        </div>
      )}
    </nav>
  );
}

/* ── Hero ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/50 to-[#0A0A0F]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6C47FF]/30 bg-[#6C47FF]/10 text-[#6C47FF] text-xs font-medium mb-8">
          <Zap size={12} />
          AI Operating Systems for Growing Businesses
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-gradient">Your business</span>
          <br />
          <span className="text-[#F0F0FF]">runs itself.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8888AA] max-w-2xl mx-auto mb-10 leading-relaxed">
          We build custom AI operating systems for growing businesses — so you can stop
          doing the work your business should be doing automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#6C47FF] text-white font-semibold text-base hover:bg-[#7C5CFF] transition-all glow-violet"
          >
            Book Your Free AI Audit <ArrowRight size={18} />
          </a>
          <a href="#process" className="text-[#8888AA] text-sm hover:text-[#F0F0FF] transition-colors">
            See how it works ↓
          </a>
        </div>
        <p className="text-[#8888AA] text-xs mt-6">
          No commitment · 30 minutes · Immediate value, guaranteed
        </p>
      </div>
    </section>
  );
}

/* ── Stats strip ─────────────────────────────────────── */
function StatsStrip() {
  const stats = [
    { value: "20+", label: "hours saved per week" },
    { value: "<3mo", label: "to full ROI" },
    { value: "4–8wk", label: "to deploy" },
    { value: "100%", label: "custom-built" },
  ];
  return (
    <div className="border-y border-[#1E1E2E] bg-[#13131A]/60">
      <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-bold text-[#00C896]">{s.value}</div>
            <div className="text-xs text-[#8888AA] mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Problem ─────────────────────────────────────────── */
function Problem() {
  const pains = [
    {
      icon: <Mail size={24} className="text-[#6C47FF]" />,
      title: "Your inbox is a full-time job",
      desc: "Sorting, replying, triaging. Hours disappear every single day into email that AI should be handling.",
    },
    {
      icon: <Calendar size={24} className="text-[#6C47FF]" />,
      title: "Admin eats half your week",
      desc: "Scheduling, reporting, invoicing — all manual. All your time. None of it grows your business.",
    },
    {
      icon: <BarChart2 size={24} className="text-[#6C47FF]" />,
      title: "The same tasks. Every single day.",
      desc: "Follow-ups. Status updates. Data entry. You're trapped in the machine instead of building the business.",
    },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0FF] mb-4">
            You're running a business.
            <br />
            <span className="text-[#8888AA]">And doing jobs that shouldn't exist.</span>
          </h2>
          <p className="text-[#8888AA] max-w-2xl mx-auto text-lg">
            You started a business to build something. Instead, you're trapped in the machine.
            Every hour spent on admin is an hour not spent on growth.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[#1E1E2E] bg-[#13131A] p-8 hover:border-[#6C47FF]/40 transition-colors"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-[#F0F0FF] font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-[#8888AA] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Solution ────────────────────────────────────────── */
function Solution() {
  const capabilities = [
    { icon: <Mail size={20} />, title: "Email Intelligence", desc: "Triage, draft, prioritize, and respond — automatically." },
    { icon: <Zap size={20} />, title: "CRM Automation", desc: "Leads followed up, deals tracked, nothing dropped." },
    { icon: <FileText size={20} />, title: "Content Pipeline", desc: "Blog posts, social, newsletters — generated and scheduled." },
    { icon: <BarChart2 size={20} />, title: "Reporting & Finance", desc: "KPIs tracked, reports written, invoices processed." },
    { icon: <Calendar size={20} />, title: "Scheduling & Tasks", desc: "Meetings booked, tasks assigned, deadlines managed." },
    { icon: <Brain size={20} />, title: "Business Memory", desc: "Your AI learns your business over time and gets smarter." },
  ];
  return (
    <section id="services" className="py-24 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0FF] mb-4">
            We build the AI operating system
            <br />
            <span className="text-gradient">your business needs.</span>
          </h2>
          <p className="text-[#8888AA] max-w-2xl mx-auto text-lg">
            Not a chatbot. Not a Zapier workflow. A full intelligent system —
            custom-built for how your business actually runs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-[#1E1E2E] bg-[#13131A] p-6 hover:border-[#00D4FF]/30 hover:bg-[#13131A]/80 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#6C47FF]/15 flex items-center justify-center text-[#00D4FF] mb-4 group-hover:bg-[#6C47FF]/25 transition-colors">
                {c.icon}
              </div>
              <h3 className="text-[#F0F0FF] font-semibold mb-1">{c.title}</h3>
              <p className="text-[#8888AA] text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process ─────────────────────────────────────────── */
function Process() {
  const steps = [
    { num: "01", title: "Free AI Audit", time: "Week 0", desc: "30-min call. We map every manual task in your business and show you exactly what's automatable. Zero commitment." },
    { num: "02", title: "Design Your OS", time: "$2.5K–$5K", desc: "We architect your custom agentic system. Process maps, tech stack, integration plan." },
    { num: "03", title: "Build & Deploy", time: "$8K–$25K", desc: "We build and launch your AI OS in 4–8 weeks. Fully tested, fully integrated, fully yours." },
    { num: "04", title: "Ongoing Optimization", time: "$1.5K–$4K/mo", desc: "We maintain, improve, and expand your system as your business grows." },
  ];
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0FF] mb-4">
            From chaos to autopilot
            <br />
            <span className="text-[#6C47FF]">in 4–8 weeks.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#6C47FF]/40 to-transparent" />
          {steps.map((s) => (
            <div key={s.num} className="relative text-center md:text-left">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#6C47FF]/15 border border-[#6C47FF]/30 text-[#6C47FF] font-bold text-lg mb-4">
                {s.num}
              </div>
              <div className="text-xs text-[#00D4FF] font-medium mb-1">{s.time}</div>
              <h3 className="text-[#F0F0FF] font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-[#8888AA] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Results ─────────────────────────────────────────── */
function Results() {
  const metrics = [
    { value: "20+", label: "Hours saved", sub: "per week, per client" },
    { value: "3mo", label: "Average ROI", sub: "typical payback period" },
    { value: "8wk", label: "Max deployment", sub: "from kickoff to live" },
    { value: "0", label: "Generic templates", sub: "everything is custom" },
  ];
  return (
    <section id="results" className="py-24 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0FF] mb-4">
            The numbers that matter.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-[#1E1E2E] bg-[#13131A] p-8 text-center"
            >
              <div className="text-4xl font-bold text-[#00C896] mb-1">{m.value}</div>
              <div className="text-[#F0F0FF] font-medium text-sm">{m.label}</div>
              <div className="text-[#8888AA] text-xs mt-1">{m.sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-[#6C47FF]/20 bg-[#6C47FF]/5 p-8 text-center">
          <p className="text-[#8888AA] text-sm italic mb-2">Case study coming soon</p>
          <p className="text-[#F0F0FF] text-lg">
            "A professional services firm saved <strong className="text-[#00C896]">22 hours/week</strong> and closed{" "}
            <strong className="text-[#00C896]">40% more deals</strong> within 60 days of deployment."
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── ICP ─────────────────────────────────────────────── */
function ICP() {
  const forYou = [
    "$1M–$20M revenue, operationally stretched",
    "5–50 employees, owner still doing admin",
    "Paying for 5+ SaaS tools you underuse",
    "Heard of AI but nothing has actually worked",
    "Want to scale without just hiring more people",
  ];
  const notForYou = [
    "You just want a chatbot or a simple automation",
    "You're not ready to invest in your systems",
    "You need it built in a week",
    "You're happy with the status quo",
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0FF] mb-4">
            Built for businesses that are
            <br />
            <span className="text-gradient">ready to scale.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[#00C896]/20 bg-[#00C896]/5 p-8">
            <h3 className="text-[#00C896] font-semibold text-lg mb-6 flex items-center gap-2">
              <CheckCircle size={20} /> This is for you if…
            </h3>
            <ul className="space-y-3">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#8888AA] text-sm">
                  <CheckCircle size={16} className="text-[#00C896] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#1E1E2E] bg-[#13131A] p-8">
            <h3 className="text-[#8888AA] font-semibold text-lg mb-6 flex items-center gap-2">
              <XCircle size={20} /> This isn't for you if…
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#8888AA] text-sm">
                  <XCircle size={16} className="text-[#8888AA]/50 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ─────────────────────────────────────────── */
function Pricing() {
  const plans = [
    {
      name: "Free AI Audit",
      price: "$0",
      period: "one-time",
      desc: "See exactly what's automatable in your business.",
      features: ["30-minute strategy call", "Full process mapping", "Automation opportunity report", "Zero commitment"],
      cta: "Book Now",
      highlight: false,
    },
    {
      name: "Build Sprint",
      price: "$8K–$25K",
      period: "one-time",
      desc: "Your full custom AI OS, deployed in 4–8 weeks.",
      features: ["Complete agentic OS build", "Email, CRM, content & more", "Integrations with your tools", "Testing & handoff"],
      cta: "Get Started",
      highlight: true,
    },
    {
      name: "Retainer",
      price: "$1.5K–$4K",
      period: "/month",
      desc: "Ongoing optimization as your business grows.",
      features: ["System maintenance", "New agent builds", "Model updates & improvements", "Priority support"],
      cta: "Learn More",
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="py-24 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0FF] mb-4">
            What does it cost?
            <br />
            <span className="text-[#6C47FF]">Less than hiring.</span>
          </h2>
          <p className="text-[#8888AA] max-w-xl mx-auto">
            Compare to a full-time ops hire at $60–80K/year who still can't match
            what a well-built AI OS does 24/7.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                p.highlight
                  ? "border-[#6C47FF]/60 bg-[#6C47FF]/10 relative"
                  : "border-[#1E1E2E] bg-[#13131A]"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#6C47FF] text-white text-xs font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <div className="text-[#8888AA] text-sm font-medium mb-2">{p.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#F0F0FF]">{p.price}</span>
                  <span className="text-[#8888AA] text-sm">{p.period}</span>
                </div>
                <p className="text-[#8888AA] text-sm mt-2">{p.desc}</p>
              </div>
              <ul className="space-y-2 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#8888AA]">
                    <CheckCircle size={14} className="text-[#00C896] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all ${
                  p.highlight
                    ? "bg-[#6C47FF] text-white hover:bg-[#7C5CFF] glow-violet"
                    : "border border-[#1E1E2E] text-[#F0F0FF] hover:border-[#6C47FF]/40"
                }`}
              >
                {p.cta} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ───────────────────────────────────────── */
function FinalCTA() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-transparent to-[#0A0A0F]" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#F0F0FF] mb-6">
          What would you do with
          <br />
          <span className="text-gradient">20 extra hours a week?</span>
        </h2>
        <p className="text-[#8888AA] text-lg mb-10 max-w-xl mx-auto">
          Book a free 30-minute AI Audit. We'll map out exactly what's automatable
          in your business — no pitch, no pressure, just clarity.
        </p>
        <a
          href="mailto:hello@automationarchitects.ai"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-[#6C47FF] text-white font-semibold text-lg hover:bg-[#7C5CFF] transition-all glow-violet"
        >
          Book Your Free AI Audit <ArrowRight size={20} />
        </a>
        <p className="text-[#8888AA] text-sm mt-6">
          No commitment · 30 minutes · Immediate value, guaranteed
        </p>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] bg-[#0A0A0F] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-bold text-[#F0F0FF]">
            Automation<span className="text-[#6C47FF]">Architects</span>
          </span>
          <p className="text-[#8888AA] text-sm mt-1">Your business, on autopilot.</p>
        </div>
        <div className="flex gap-6 text-sm text-[#8888AA]">
          <a href="#services" className="hover:text-[#F0F0FF] transition-colors">Services</a>
          <a href="#process" className="hover:text-[#F0F0FF] transition-colors">Process</a>
          <a href="#results" className="hover:text-[#F0F0FF] transition-colors">Results</a>
          <a href="#pricing" className="hover:text-[#F0F0FF] transition-colors">Pricing</a>
        </div>
        <p className="text-[#8888AA] text-xs">© 2026 Automation Architects. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ── Page ────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsStrip />
      <Problem />
      <Solution />
      <Process />
      <Results />
      <ICP />
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  );
}
