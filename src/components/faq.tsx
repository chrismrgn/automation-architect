"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/faq-data";

export function FAQ() {
  return (
    <section id="faq" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-4">
            Questions we always get
          </h2>
          <p className="text-[#8888AA] text-lg">
            Straight answers, no corporate speak.
          </p>
        </div>

        <Accordion type="single" collapsible>
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-[#1E1E2E] px-1"
            >
              <AccordionTrigger className="text-[#F0F0FF] hover:no-underline text-left text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#A0A0BB] leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
