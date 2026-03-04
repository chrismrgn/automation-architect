import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Automation Architects — Your Business, On Autopilot",
  description:
    "We build custom AI operating systems for growing businesses. Email triage, CRM automation, content pipelines, and more — deployed in 4–8 weeks.",
  openGraph: {
    title: "Automation Architects — Your Business, On Autopilot",
    description:
      "Custom AI systems that handle your business operations so you can focus on growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <style>{`html { scroll-padding-top: 80px; }`}</style>
        <div className="bg-[#252F3A] min-h-screen">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
