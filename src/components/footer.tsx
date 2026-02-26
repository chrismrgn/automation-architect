import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] bg-[#0A0A0F] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-[#F0F0FF] text-lg">
            Automation<span className="text-[#6C47FF]">Architects</span>
          </p>
          <p className="text-[#A0A0BB] text-sm mt-1">Your business, on autopilot.</p>
        </div>
        <div className="flex gap-6 text-sm text-[#A0A0BB]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#F0F0FF] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-[#A0A0BB]">© {new Date().getFullYear()} Automation Architects</p>
      </div>
    </footer>
  );
}
