"use client";

import { useState, useEffect, useRef } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const savingsRate: Record<string, number> = {
  email: 0.75,
  crm: 0.8,
  finance: 0.85,
  reporting: 0.9,
  scheduling: 0.7,
  content: 0.65,
};

const painAreas = [
  { value: "email", label: "Email & communication management" },
  { value: "crm", label: "Lead follow-up & CRM" },
  { value: "finance", label: "Invoicing & finance admin" },
  { value: "reporting", label: "Reporting & analytics" },
  { value: "scheduling", label: "Scheduling & project management" },
  { value: "content", label: "Content creation & marketing" },
];

const hourlyRates = [
  { value: 25, label: "$25/hr" },
  { value: 35, label: "$35/hr" },
  { value: 50, label: "$50/hr" },
  { value: 75, label: "$75/hr" },
  { value: 100, label: "$100+/hr" },
];

const teamSizes = [
  { value: "1-5", label: "1\u20135 people" },
  { value: "6-15", label: "6\u201315 people" },
  { value: "16-50", label: "16\u201350 people" },
  { value: "50+", label: "50+ people" },
];

function useCountUp(target: number, duration = 400): number {
  const [value, setValue] = useState(target);
  const rafRef = useRef<number>(0);
  const currentRef = useRef(target);

  useEffect(() => {
    const from = currentRef.current;
    if (from === target) return;
    const start = performance.now();
    const diff = target - from;

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + diff * eased);
      currentRef.current = current;
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        currentRef.current = target;
        setValue(target);
      }
    }

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return value;
}

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

const selectClasses =
  "w-full rounded-lg border border-[#1E1E2E] bg-[#13131A] text-[#F0F0FF] px-4 py-3 text-sm focus:outline-none focus:border-[#6C47FF]/50 appearance-none cursor-pointer";

export function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [painArea, setPainArea] = useState("email");
  const [hourlyRate, setHourlyRate] = useState(50);
  const [, setTeamSize] = useState("1-5");

  const weeklyHoursSaved = hoursPerWeek * savingsRate[painArea];
  const monthlyDollarsSaved = weeklyHoursSaved * 4.33 * hourlyRate;
  const annualDollarsSaved = monthlyDollarsSaved * 12;
  const paybackMonths =
    monthlyDollarsSaved > 0 ? 15000 / monthlyDollarsSaved : 0;

  const animatedMonthly = useCountUp(Math.round(monthlyDollarsSaved));
  const animatedAnnual = useCountUp(Math.round(annualDollarsSaved));
  const animatedHours = useCountUp(
    Math.round(weeklyHoursSaved * 10)
  );

  return (
    <section id="roi" className="py-16 px-6 bg-[#0D0D14]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F0F0FF] leading-tight mb-4">
            See what automation
            <br />
            <span className="text-gradient">could save you.</span>
          </h2>
          <p className="text-[#8888AA] text-lg">
            Adjust the inputs below to estimate your potential savings.
          </p>
        </div>

        <div className="rounded-2xl border border-[#1E1E2E] bg-[#13131A] p-8 mb-8">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm text-[#A0A0BB] mb-2">
                Team size
              </label>
              <select
                className={selectClasses}
                onChange={(e) => setTeamSize(e.target.value)}
                defaultValue="1-5"
                data-testid="team-size"
              >
                {teamSizes.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-[#A0A0BB] mb-2">
                Primary pain area
              </label>
              <select
                className={selectClasses}
                value={painArea}
                onChange={(e) => setPainArea(e.target.value)}
                data-testid="pain-area"
              >
                {painAreas.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-[#A0A0BB] mb-2">
                Average employee hourly cost
              </label>
              <select
                className={selectClasses}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                data-testid="hourly-rate"
              >
                {hourlyRates.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-[#A0A0BB] mb-2">
                Hours your team spends on this per week:{" "}
                <span className="text-[#F0F0FF] font-semibold">
                  {hoursPerWeek} hrs
                </span>
              </label>
              <div className="pt-2">
                <Slider
                  min={1}
                  max={40}
                  step={1}
                  value={[hoursPerWeek]}
                  onValueChange={(v) => setHoursPerWeek(v[0])}
                  data-testid="hours-slider"
                />
              </div>
              <div className="flex justify-between text-xs text-[#8888AA] mt-1">
                <span>1 hr</span>
                <span>40 hrs</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div
            className="rounded-xl border border-[#6C47FF]/20 bg-[#6C47FF]/5 p-8"
            data-testid="roi-results"
          >
            <p className="text-sm text-[#A0A0BB] mb-4">You could save:</p>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              <div>
                <div
                  className="text-2xl md:text-3xl font-bold text-[#00C896]"
                  data-testid="monthly-savings"
                >
                  {formatCurrency(animatedMonthly)}
                </div>
                <div className="text-sm text-[#A0A0BB] mt-1">per month</div>
              </div>
              <div>
                <div
                  className="text-2xl md:text-3xl font-bold text-[#00C896]"
                  data-testid="annual-savings"
                >
                  {formatCurrency(animatedAnnual)}
                </div>
                <div className="text-sm text-[#A0A0BB] mt-1">per year</div>
              </div>
              <div>
                <div
                  className="text-2xl md:text-3xl font-bold text-[#00C896]"
                  data-testid="hours-saved"
                >
                  ~{(animatedHours / 10).toFixed(1)}
                </div>
                <div className="text-sm text-[#A0A0BB] mt-1">hrs/week saved</div>
              </div>
              <div>
                <div
                  className="text-2xl md:text-3xl font-bold text-[#00D4FF]"
                  data-testid="payback-period"
                >
                  {paybackMonths < 1 ? "<1" : paybackMonths.toFixed(1)}
                </div>
                <div className="text-sm text-[#A0A0BB] mt-1">month payback</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#6C47FF] hover:bg-[#7C5CFF] text-white px-8 h-12 text-base violet-glow transition-all"
          >
            <a href="/contact">
              Book Your Free Audit to Confirm{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="text-xs text-[#8888AA] mt-4">
            Estimates based on industry averages. Your actual results depend on
            your specific workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
