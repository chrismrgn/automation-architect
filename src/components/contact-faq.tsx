"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is the audit really free?",
    answer:
      "Yes. 100%. No credit card, no commitment, no catch. We do this because the best clients come from people who\u2019ve seen the value firsthand.",
  },
  {
    question: "How should I prepare?",
    answer:
      "No prep needed. Just show up and be ready to talk about your day-to-day operations. We\u2019ll guide the conversation.",
  },
  {
    question: "What if I\u2019m not ready to commit?",
    answer:
      "That\u2019s totally fine. The audit is valuable on its own. You\u2019ll walk away with a clear picture of what\u2019s automatable \u2014 whether you work with us or not.",
  },
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="border border-[#3C4C5C] overflow-hidden bg-[#2E3B47] transition-colors"
        >
          <button
            type="button"
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className="text-[#F5F0EB] text-sm font-medium pr-4">
              {faq.question}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-[#8399AE] shrink-0 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-200 ease-in-out",
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-4 text-sm text-[#8399AE] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
