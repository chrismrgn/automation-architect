"use client";

import {
  CheckCircle, XCircle, ArrowRight,
} from "lucide-react";
import { BeforeAfter } from "@/components/before-after";
import { FAQ } from "@/components/faq";
import { FaqSchema } from "@/components/faq-schema";
import { ROICalculator } from "@/components/roi-calculator";
import Link from "next/link";

/* ─────────────────────────────────────────── HERO */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-0">
      {/* Giant viewport-width type */}
      <h1 className="hero-wordmark" aria-label="Your business runs itself">
        <span className="block text-left">Your</span>
        <span className="block text-right">Business</span>
        <span className="block text-center">Runs.</span>
      </h1>

      {/* Standfirst below */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-2xl">
          <p className="standfirst text-[#F5F0EB] mb-8">
            We build custom AI operating systems for growing businesses &mdash;
            so you can stop doing the work your business should be doing automatically.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-8 py-4 text-base font-medium transition-colors rounded-[2px]">
              Book Your Free AI Audit &rarr;
            </a>
            <a href="#process" className="text-[#8399AE] hover:text-[#F5F0EB] transition-colors underline underline-offset-4 decoration-[#8399AE]/40">
              See how it works
            </a>
          </div>
          <p className="text-sm text-[#8399AE] mt-4">No commitment &middot; 30 minutes &middot; Immediate value</p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── STATS */
function Stats() {
  const items = [
    { value: "20+", label: "hours saved", sub: "per client, per week" },
    { value: "<3mo", label: "to full ROI", sub: "typical payback period" },
    { value: "4\u20138wk", label: "to deploy", sub: "from kickoff to live" },
    { value: "0", label: "off-the-shelf", sub: "everything is custom" },
  ];
  return (
    <div className="border-y border-[#3C4C5C]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between gap-8 text-center">
          {items.map((item, i) => (
            <div key={item.label} className="flex items-center gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#00C896]">{item.value}</div>
                <div className="text-sm text-[#F5F0EB] font-medium mt-1">{item.label}</div>
                <div className="text-xs text-[#8399AE] mt-0.5">{item.sub}</div>
              </div>
              {i < items.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-[#3C4C5C]" />
              )}
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
      n: "01",
      title: "Your inbox is a full-time job",
      desc: "Sorting, triaging, drafting replies. Hours disappear every day into work that AI should be handling for you.",
    },
    {
      n: "02",
      title: "Admin eats half your week",
      desc: "Scheduling, reporting, invoicing \u2014 all manual. All your time. None of it is actually growing your business.",
    },
    {
      n: "03",
      title: "The same tasks. Every day.",
      desc: "Follow-ups, status updates, data entry \u2014 on repeat. You\u2019re trapped in the machine instead of building it.",
    },
  ];

  return (
    <section className="editorial-section">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="editorial-grid">
          <div className="editorial-label">
            <span className="section-number">01</span>
            <span className="section-title">The Problem</span>
          </div>
          <div className="editorial-content">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-4">
              You&apos;re running a business.{" "}
              <span className="text-[#8399AE] font-normal">
                And doing jobs that shouldn&apos;t exist.
              </span>
            </h2>
            <p className="text-[#8399AE] mb-10 max-w-xl leading-relaxed">
              You started to build something. Instead, you&apos;re stuck in it. Every hour
              spent on admin is an hour not spent on growth.
            </p>
            <div className="space-y-0">
              {pains.map((p) => (
                <div key={p.n} className="border-t border-[#3C4C5C] py-6">
                  <div className="flex items-start gap-4">
                    <span className="text-[#6C47FF] font-bold text-sm mt-1 shrink-0">{p.n}</span>
                    <div>
                      <h3 className="font-semibold text-[#F5F0EB] text-lg mb-1">{p.title}</h3>
                      <p className="text-[#8399AE] text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── SOLUTION */
function Solution() {
  const caps = [
    { n: "01", title: "Email Intelligence", desc: "Triage, draft, prioritize, and respond \u2014 automatically, 24/7." },
    { n: "02", title: "CRM Automation", desc: "Leads followed up, deals tracked, nothing ever dropped." },
    { n: "03", title: "Content Pipeline", desc: "Blog posts, social, newsletters \u2014 generated and scheduled." },
    { n: "04", title: "Reporting & Finance", desc: "KPIs tracked, reports written, invoices processed." },
    { n: "05", title: "Scheduling & Tasks", desc: "Meetings booked, tasks assigned, deadlines managed." },
    { n: "06", title: "Business Memory", desc: "Your AI learns your business over time and gets smarter." },
  ];

  return (
    <section id="services" className="editorial-section">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="editorial-grid">
          <div className="editorial-label">
            <span className="section-number">02</span>
            <span className="section-title">What We Build</span>
          </div>
          <div className="editorial-content">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-4">
              We build the AI operating system{" "}
              <span className="text-gradient">your business needs.</span>
            </h2>
            <p className="text-[#8399AE] mb-10 max-w-xl leading-relaxed">
              A full intelligent system &mdash; custom-built for how your business actually runs.
              Every workflow. Every integration. Every edge case.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {caps.map((c) => (
                <div key={c.n} className="border-t border-[#3C4C5C] py-5">
                  <div className="flex items-start gap-4">
                    <span className="text-[#6C47FF] font-bold text-sm mt-1 shrink-0">{c.n}</span>
                    <div>
                      <h3 className="font-semibold text-[#F5F0EB] mb-1">{c.title}</h3>
                      <p className="text-[#8399AE] text-sm leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── PROCESS */
function Process() {
  const steps = [
    { n: "01", time: "Week 0 \u00b7 Free", title: "AI Audit", desc: "30-min call. We map every manual task and show you exactly what\u2019s automatable. No commitment." },
    { n: "02", time: "$2.5K \u2013 $5K", title: "Design Your OS", desc: "We architect your custom agentic system. Process maps, tech stack, integration plan." },
    { n: "03", time: "$8K \u2013 $25K", title: "Build & Deploy", desc: "We build and launch your AI OS in 4\u20138 weeks. Fully tested, fully yours." },
    { n: "04", time: "$1.5K \u2013 $4K/mo", title: "Ongoing Optimization", desc: "Maintenance, new agent builds, and improvements as your business grows." },
  ];

  return (
    <section id="process" className="editorial-section">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="editorial-grid">
          <div className="editorial-label">
            <span className="section-number">03</span>
            <span className="section-title">How It Works</span>
          </div>
          <div className="editorial-content">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-10">
              From chaos to autopilot{" "}
              <span className="text-[#6C47FF]">in 4\u20138 weeks.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {steps.map((s) => (
                <div key={s.n} className="border-t border-[#3C4C5C] py-6">
                  <span className="text-[#6C47FF] font-bold text-2xl mb-2 block">{s.n}</span>
                  <div className="text-xs text-[#FF6B47] font-medium mb-1.5">{s.time}</div>
                  <h3 className="font-semibold text-[#F5F0EB] text-lg mb-2">{s.title}</h3>
                  <p className="text-[#8399AE] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── RESULTS */
function Results() {
  const metrics = [
    { value: "80%", label: "Tasks automated", sub: "avg across client workflows" },
    { value: "40%", label: "More deals closed", sub: "with AI-assisted follow-up" },
    { value: "62%", label: "Time reclaimed", sub: "from admin and operations" },
    { value: "24/7", label: "System uptime", sub: "your AI never sleeps" },
  ];

  return (
    <section id="results" className="editorial-section">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="editorial-grid">
          <div className="editorial-label">
            <span className="section-number">04</span>
            <span className="section-title">Results</span>
          </div>
          <div className="editorial-content">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] mb-10">
              The numbers that matter.
            </h2>

            {/* Metric row */}
            <div className="flex flex-wrap gap-8 mb-12">
              {metrics.map((m, i) => (
                <div key={m.label} className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#00C896] mb-1">{m.value}</div>
                    <div className="text-sm font-medium text-[#F5F0EB]">{m.label}</div>
                    <div className="text-xs text-[#8399AE] mt-1">{m.sub}</div>
                  </div>
                  {i < metrics.length - 1 && (
                    <div className="hidden md:block w-px h-12 bg-[#3C4C5C]" />
                  )}
                </div>
              ))}
            </div>

            {/* Case studies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-t border-[#3C4C5C] pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#6C47FF]/20 flex items-center justify-center text-[#6C47FF] font-bold text-sm">PS</div>
                  <div>
                    <div className="text-[#F5F0EB] text-sm font-medium">Professional Services Firm</div>
                    <div className="text-[#8399AE] text-xs">12-person agency &middot; Full OS build</div>
                  </div>
                </div>
                <p className="text-[#8399AE] text-sm leading-relaxed mb-5">
                  Eliminated manual email triage, automated client follow-ups, and built a reporting pipeline. Owner reclaimed{" "}
                  <strong className="text-[#00C896]">22 hrs/week</strong> and closed{" "}
                  <strong className="text-[#00C896]">40% more deals</strong> within 60 days.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Email Intelligence", "CRM Automation", "Reporting"].map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-[#6C47FF]/10 text-[#8399AE]">{t}</span>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#3C4C5C] pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B47]/15 flex items-center justify-center text-[#FF6B47] font-bold text-sm">EC</div>
                  <div>
                    <div className="text-[#F5F0EB] text-sm font-medium">eCommerce Brand</div>
                    <div className="text-[#8399AE] text-xs">8-person team &middot; Content &amp; CRM</div>
                  </div>
                </div>
                <p className="text-[#8399AE] text-sm leading-relaxed mb-5">
                  Automated product listings, customer follow-up sequences, and weekly reporting. Team reclaimed{" "}
                  <strong className="text-[#00C896]">30 hrs/week</strong> in manual work and grew email revenue by{" "}
                  <strong className="text-[#00C896]">55%</strong> in 90 days.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Content Pipeline", "Email Sequences", "Analytics"].map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-[#FF6B47]/10 text-[#8399AE]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── ICP */
function ICP() {
  const forYou = [
    "$1M\u2013$20M revenue, feeling operationally stretched",
    "5\u201350 employees, owner still buried in admin",
    "Paying for 5+ SaaS tools you underuse",
    "Tried AI but nothing has actually worked yet",
    "Want to scale without just hiring more people",
  ];
  const notForYou = [
    "You just want a chatbot or a simple automation",
    "You\u2019re not ready to invest in your systems",
    "You need it done in a week",
    "You\u2019re comfortable with the status quo",
  ];

  return (
    <section className="editorial-section">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="editorial-grid">
          <div className="editorial-label">
            <span className="section-number">05</span>
            <span className="section-title">Who It&apos;s For</span>
          </div>
          <div className="editorial-content">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-10">
              Built for businesses{" "}
              <span className="text-gradient">ready to scale.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-[#00C896] text-lg mb-6 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" /> This is for you if&hellip;
                </h3>
                <ul className="space-y-3">
                  {forYou.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-[#00C896] mt-0.5 shrink-0" />
                      <span className="text-[#8399AE] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#8399AE] text-lg mb-6 flex items-center gap-2">
                  <XCircle className="h-5 w-5" /> This isn&apos;t for you if&hellip;
                </h3>
                <ul className="space-y-3">
                  {notForYou.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="h-4 w-4 text-[#8399AE]/40 mt-0.5 shrink-0" />
                      <span className="text-[#8399AE] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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
      desc: "See exactly what\u2019s automatable in your business \u2014 no strings attached.",
      features: ["30-minute strategy call", "Full process mapping", "Automation opportunity report", "Zero commitment required"],
      cta: "Book Your Audit",
      highlight: false,
    },
    {
      name: "Build Sprint",
      price: "$8K\u2013$25K",
      period: "one-time",
      desc: "Your full custom AI OS, built and deployed in 4\u20138 weeks.",
      features: ["Complete agentic OS build", "Email, CRM, content & more", "Integrations with your existing tools", "Testing, docs & handoff"],
      cta: "Get Started",
      highlight: true,
    },
    {
      name: "Retainer",
      price: "$1.5K\u2013$4K",
      period: "/month",
      desc: "Ongoing optimization and new agent builds as your business grows.",
      features: ["System maintenance & monitoring", "New agent builds monthly", "Model & prompt optimization", "Priority support"],
      cta: "Book Your Audit",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="editorial-section">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="editorial-grid">
          <div className="editorial-label">
            <span className="section-number">06</span>
            <span className="section-title">Pricing</span>
          </div>
          <div className="editorial-content">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-4">
              What does it cost?{" "}
              <span className="text-[#6C47FF]">Less than hiring.</span>
            </h2>
            <p className="text-[#8399AE] mb-10 max-w-xl leading-relaxed">
              A full-time ops hire costs $60\u201380K/year &mdash; and still can&apos;t match what a
              well-built AI OS does 24/7.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className={`relative border-t-2 pt-6 ${
                    p.highlight ? "border-t-[#6C47FF]" : "border-t-[#3C4C5C]"
                  }`}
                >
                  <p className="text-xs text-[#8399AE] font-medium uppercase tracking-wider mb-3">
                    {p.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-[#F5F0EB]">{p.price}</span>
                    {p.period && (
                      <span className="text-[#8399AE] text-sm">{p.period}</span>
                    )}
                  </div>
                  <p className="text-[#8399AE] text-sm mb-6">{p.desc}</p>

                  <ul className="space-y-2.5 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle className="h-4 w-4 text-[#00C896] mt-0.5 shrink-0" />
                        <span className="text-[#8399AE] text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      p.highlight
                        ? "bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-6 py-3 rounded-[2px]"
                        : "text-[#F5F0EB] hover:text-[#FF6B47] underline underline-offset-4 decoration-[#3C4C5C]"
                    }`}
                  >
                    {p.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── CTA */
function FinalCTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
          <span className="text-[#F5F0EB]">What would you do with </span>
          <span className="text-gradient">20 extra hours</span>
          <span className="text-[#F5F0EB]"> a week?</span>
        </h2>
        <p className="text-[#8399AE] text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Book a free 30-minute AI Audit. We&apos;ll map out exactly what&apos;s automatable
          in your business &mdash; no pitch, no pressure, just clarity on what&apos;s possible.
        </p>
        <a
          href="mailto:hello@automationarchitects.ai"
          className="inline-flex items-center gap-2 bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-10 py-4 text-base font-medium transition-colors rounded-[2px]"
        >
          Book Your Free AI Audit <ArrowRight className="h-5 w-5" />
        </a>
        <p className="text-xs text-[#8399AE] mt-5">
          No commitment &middot; 30 minutes &middot; Immediate value, guaranteed
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── BLOG TEASER */
const BLOG_POSTS = [
  { slug: "what-is-an-agentic-os", title: "What Is an Agentic OS for Business? (And Why It\u2019s Not a Chatbot)", excerpt: "The difference between a chatbot and a real AI operating system \u2014 and why it matters for your business.", readTime: "6 min read" },
  { slug: "zapier-vs-make-vs-agentic-ai", title: "Zapier vs. Make vs. Agentic AI: What\u2019s Actually the Difference?", excerpt: "Rule-based workflows vs. intelligent agents. Here\u2019s when each makes sense \u2014 and when you\u2019ve outgrown the simple tools.", readTime: "5 min read" },
  { slug: "agency-automation-quick-wins", title: "5 Business Processes Every Agency Should Automate First", excerpt: "Lead follow-up, client reporting, invoicing, content scheduling, onboarding. Start here.", readTime: "5 min read" },
];

function BlogTeaser() {
  return (
    <section className="editorial-section">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6C47FF] mb-2 font-medium">From the blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F0EB]">What we&apos;re thinking about</h2>
          </div>
          <Link href="/blog" className="hidden md:inline-flex items-center gap-1.5 text-sm text-[#8399AE] hover:text-[#F5F0EB] transition-colors">
            All posts <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block border-t border-[#3C4C5C] pt-6 transition-all">
              <p className="text-xs text-[#8399AE] mb-3">{post.readTime}</p>
              <h3 className="text-[#F5F0EB] font-semibold leading-snug mb-3 group-hover:text-[#6C47FF] transition-colors">{post.title}</h3>
              <p className="text-sm text-[#8399AE] leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-xs text-[#6C47FF] flex items-center gap-1">Read <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="text-sm text-[#8399AE] hover:text-[#F5F0EB] transition-colors">
            All posts &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── PAGE */
export default function Home() {
  return (
    <main className="bg-[#252F3A]">
      <FaqSchema />
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <BeforeAfter />
      <Process />
      <Results />
      <ICP />
      <Pricing />
      <ROICalculator />
      <FAQ />
      <BlogTeaser />
      <FinalCTA />
    </main>
  );
}
