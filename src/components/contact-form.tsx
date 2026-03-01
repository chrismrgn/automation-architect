"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  challenge: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="w-14 h-14 rounded-full bg-[#00C896]/10 flex items-center justify-center mb-5">
          <CheckCircle className="h-7 w-7 text-[#00C896]" />
        </div>
        <h3 className="text-xl font-bold text-[#F5F0EB] mb-2">
          Thanks! We&apos;ll be in touch within 24 hours.
        </h3>
        <p className="text-sm text-[#8399AE]">
          Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-[#252F3A] border border-[#3C4C5C] text-[#F5F0EB] px-4 py-3 text-sm placeholder:text-[#8399AE] focus:border-[#6C47FF] focus:outline-none focus:ring-1 focus:ring-[#6C47FF]/30 transition-colors";
  const labelClasses = "block text-sm text-[#8399AE] font-medium mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name <span className="text-[#6C47FF]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email <span className="text-[#6C47FF]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className={labelClasses}>
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Your company name"
        />
      </div>

      <div>
        <label htmlFor="teamSize" className={labelClasses}>
          Team Size
        </label>
        <select
          id="teamSize"
          name="teamSize"
          value={formData.teamSize}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select team size</option>
          <option value="1-5">1&ndash;5</option>
          <option value="6-15">6&ndash;15</option>
          <option value="16-50">16&ndash;50</option>
          <option value="50+">50+</option>
        </select>
      </div>

      <div>
        <label htmlFor="challenge" className={labelClasses}>
          Biggest Challenge
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          value={formData.challenge}
          onChange={handleChange}
          className={inputClasses}
          placeholder="What's the biggest manual bottleneck in your business?"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#6C47FF] hover:bg-[#7C5CFF] text-white h-12 text-sm font-medium transition-colors rounded-[2px] inline-flex items-center justify-center gap-2"
      >
        Send Message <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
