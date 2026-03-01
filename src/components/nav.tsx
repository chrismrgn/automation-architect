"use client";

import { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-[#252F3A]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight text-[#F5F0EB]">
          Automation<span className="text-[#6C47FF]">Architects</span>
        </Link>

        {/* Desktop links + CTA */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#8399AE] hover:text-[#F5F0EB] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-semibold text-[#F5F0EB] hover:text-[#FF6B47] transition-colors"
          >
            Book Audit &rarr;
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#8399AE] hover:text-[#F5F0EB]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#3C4C5C] bg-[#2E3B47] px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#8399AE] hover:text-[#F5F0EB] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Separator className="bg-[#3C4C5C]" />
          <Link
            href="/contact"
            className="text-sm font-semibold text-[#F5F0EB]"
            onClick={() => setMenuOpen(false)}
          >
            Book Audit &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
