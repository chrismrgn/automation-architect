"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#0A0A0F]/85 border-b border-[#1E1E2E]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight text-[#F0F0FF]">
          Automation<span className="text-[#6C47FF]">Architects</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#A0A0BB] hover:text-[#F0F0FF] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button
          asChild
          size="sm"
          className="hidden md:inline-flex bg-[#6C47FF] hover:bg-[#7C5CFF] text-white violet-glow transition-all"
        >
          <Link href="/contact">Book Free Audit <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
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
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#A0A0BB] hover:text-[#F0F0FF] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Separator className="bg-[#1E1E2E]" />
          <Link
            href="/contact"
            className="text-sm font-medium text-[#6C47FF]"
            onClick={() => setMenuOpen(false)}
          >
            Book Free Audit →
          </Link>
        </div>
      )}
    </header>
  );
}
