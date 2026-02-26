"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Clock, AlertTriangle, CheckCircle, Zap } from "lucide-react";

/* ── Types ─────────────────────────────────────────────── */

interface WorkflowStep {
  text: string;
}

interface WorkflowSide {
  steps: WorkflowStep[];
  metrics: { label: string; value: string }[];
}

interface WorkflowTab {
  id: string;
  label: string;
  before: WorkflowSide;
  after: WorkflowSide;
}

/* ── Data ──────────────────────────────────────────────── */

const tabs: WorkflowTab[] = [
  {
    id: "lead-followup",
    label: "Lead Follow-Up",
    before: {
      steps: [
        { text: "New lead comes in" },
        { text: "Sales rep gets notified (maybe)" },
        { text: "Rep manually checks CRM" },
        { text: "Rep writes follow-up email" },
        { text: "Rep logs activity" },
        { text: "Rep sets reminder" },
        { text: "Reminder missed" },
        { text: "Lead goes cold" },
      ],
      metrics: [
        { label: "Time", value: "45 min/lead" },
        { label: "Reliability", value: "Human-dependent" },
      ],
    },
    after: {
      steps: [
        { text: "New lead comes in" },
        { text: "Instantly scored & tagged" },
        { text: "Personalized follow-up in <5 min" },
        { text: "Activity auto-logged" },
        { text: "Nurture sequence triggered" },
        { text: "Slack alert if no response in 48h" },
        { text: "Nothing falls through" },
      ],
      metrics: [
        { label: "Time", value: "0 min/lead" },
        { label: "Reliability", value: "100% consistent" },
      ],
    },
  },
  {
    id: "invoice-processing",
    label: "Invoice Processing",
    before: {
      steps: [
        { text: "Project complete" },
        { text: "PM emails finance" },
        { text: "Finance looks up details" },
        { text: "Creates invoice manually" },
        { text: "Sends to client" },
        { text: "Manual follow-up at 7 days" },
        { text: "Updates spreadsheet" },
        { text: "Reconciles at month end" },
      ],
      metrics: [
        { label: "Time", value: "2 hrs/invoice" },
        { label: "Errors", value: "Common" },
      ],
    },
    after: {
      steps: [
        { text: "Project marked complete" },
        { text: "Invoice auto-generated" },
        { text: "Sent automatically" },
        { text: "Auto-reminder Day 7 & 14" },
        { text: "Payment confirmed" },
        { text: "CRM + books updated" },
        { text: "Monthly reconciliation auto-generated" },
      ],
      metrics: [
        { label: "Time", value: "0 min" },
        { label: "Error rate", value: "Near zero" },
      ],
    },
  },
  {
    id: "weekly-reporting",
    label: "Weekly Reporting",
    before: {
      steps: [
        { text: "Friday afternoon" },
        { text: "Pull data from 4+ tools" },
        { text: "Copy-paste into spreadsheet" },
        { text: "Write narrative" },
        { text: "Format for leadership" },
        { text: "Email out" },
        { text: "Repeat" },
      ],
      metrics: [
        { label: "Time", value: "3-4 hrs/week" },
        { label: "Delivery", value: "Always late" },
      ],
    },
    after: {
      steps: [
        { text: "Every Friday at 4pm" },
        { text: "All data pulled automatically" },
        { text: "KPI dashboard updated" },
        { text: "Narrative AI-written" },
        { text: "Formatted report sent" },
        { text: "Done" },
      ],
      metrics: [
        { label: "Time", value: "0 min" },
        { label: "Delivery", value: "Consistent" },
      ],
    },
  },
];

/* ── Flow List Sub-component ───────────────────────────── */

function FlowList({
  steps,
  metrics,
  variant,
}: {
  steps: WorkflowStep[];
  metrics: { label: string; value: string }[];
  variant: "before" | "after";
}) {
  const isBefore = variant === "before";

  return (
    <div
      className={cn(
        "rounded-xl border p-6 flex flex-col",
        isBefore
          ? "bg-[#13131A] border-[#1E1E2E]"
          : "bg-[#00C896]/5 border-[#00C896]/20"
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        {isBefore ? (
          <AlertTriangle className="h-4 w-4 text-red-400/70" />
        ) : (
          <Zap className="h-4 w-4 text-[#00C896]" />
        )}
        <span
          className={cn(
            "text-sm font-semibold uppercase tracking-wider",
            isBefore ? "text-red-400/70" : "text-[#00C896]"
          )}
        >
          {isBefore ? "Before" : "After"}
        </span>
      </div>

      {/* Steps */}
      <div className="flex-1 space-y-0">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            {/* Timeline dot + connector */}
            <div className="flex flex-col items-center shrink-0">
              <div
                className={cn(
                  "w-2 h-2 rounded-full mt-1.5",
                  isBefore ? "bg-red-400/40" : "bg-[#00C896]"
                )}
              />
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "w-px flex-1 min-h-[20px]",
                    isBefore ? "bg-red-400/15" : "bg-[#00C896]/25"
                  )}
                />
              )}
            </div>
            <p
              className={cn(
                "text-sm leading-relaxed pb-3",
                isBefore
                  ? "font-mono text-[#8888AA]"
                  : "text-[#F0F0FF]"
              )}
            >
              {step.text}
            </p>
          </div>
        ))}
      </div>

      {/* Metrics */}
      <div
        className={cn(
          "mt-4 pt-4 border-t flex gap-6",
          isBefore ? "border-[#1E1E2E]" : "border-[#00C896]/20"
        )}
      >
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="text-xs text-[#8888AA] mb-0.5">{m.label}</div>
            <div
              className={cn(
                "text-sm font-semibold",
                isBefore ? "text-red-400/70" : "text-[#00C896]"
              )}
            >
              {m.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ────────────────────────────────────── */

export function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-5">
            Before vs. After
          </h2>
          <p className="text-[#A0A0BB] text-lg max-w-2xl mx-auto leading-relaxed">
            Here&apos;s what the same workflow looks like before and after we
            build your agentic OS.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg border border-[#1E1E2E] bg-[#13131A] p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-[#6C47FF] text-white"
                    : "text-[#A0A0BB] hover:text-[#F0F0FF] hover:bg-[#1E1E2E]/60"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FlowList
            steps={currentTab.before.steps}
            metrics={currentTab.before.metrics}
            variant="before"
          />
          <FlowList
            steps={currentTab.after.steps}
            metrics={currentTab.after.metrics}
            variant="after"
          />
        </div>
      </div>
    </section>
  );
}
