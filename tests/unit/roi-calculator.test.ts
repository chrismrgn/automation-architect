import { describe, it, expect } from 'vitest'

// ROI Calculator formula (mirrored from roi-calculator.tsx)
const savingsRate: Record<string, number> = {
  email: 0.75,
  crm: 0.80,
  finance: 0.85,
  reporting: 0.90,
  scheduling: 0.70,
  content: 0.65,
}

function calcROI(hoursPerWeek: number, painArea: string, hourlyRate: number) {
  const weeklyHoursSaved = hoursPerWeek * (savingsRate[painArea] ?? 0)
  const monthlyDollarsSaved = weeklyHoursSaved * 4.33 * hourlyRate
  const annualDollarsSaved = monthlyDollarsSaved * 12
  const paybackMonths = monthlyDollarsSaved > 0 ? 15000 / monthlyDollarsSaved : 0
  return { weeklyHoursSaved, monthlyDollarsSaved, annualDollarsSaved, paybackMonths }
}

describe('ROI Calculator formula', () => {
  it('calculates correctly for email at $50/hr, 20hrs/week', () => {
    const result = calcROI(20, 'email', 50)
    expect(result.weeklyHoursSaved).toBeCloseTo(15)
    expect(result.monthlyDollarsSaved).toBeCloseTo(3247.5, 0)
    expect(result.annualDollarsSaved).toBeCloseTo(38970, 0)
    expect(result.paybackMonths).toBeCloseTo(4.62, 1)
  })

  it('has highest savings rate for reporting (0.90)', () => {
    const reporting = calcROI(10, 'reporting', 100)
    const email = calcROI(10, 'email', 100)
    expect(reporting.weeklyHoursSaved).toBeGreaterThan(email.weeklyHoursSaved)
  })

  it('has lowest savings rate for content (0.65)', () => {
    const content = calcROI(10, 'content', 100)
    expect(content.weeklyHoursSaved).toBeCloseTo(6.5)
  })

  it('payback is 0 when hours are 0', () => {
    const result = calcROI(0, 'email', 50)
    expect(result.monthlyDollarsSaved).toBe(0)
    expect(result.paybackMonths).toBe(0)
  })

  it('all pain areas have defined savings rates', () => {
    const areas = ['email', 'crm', 'finance', 'reporting', 'scheduling', 'content']
    for (const area of areas) {
      expect(savingsRate[area]).toBeDefined()
      expect(savingsRate[area]).toBeGreaterThan(0)
      expect(savingsRate[area]).toBeLessThanOrEqual(1)
    }
  })

  it('annual is 12x monthly', () => {
    const result = calcROI(15, 'crm', 75)
    expect(result.annualDollarsSaved).toBeCloseTo(result.monthlyDollarsSaved * 12, 1)
  })
})
