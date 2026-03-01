import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
  { href: "/clients", label: "For Clients" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#3C4C5C] bg-[#252F3A] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-[#F5F0EB] text-lg">
            Automation<span className="text-[#6C47FF]">Architects</span>
          </p>
          <p className="text-[#8399AE] text-sm mt-1">Your business, on autopilot.</p>
        </div>
        <div className="flex gap-6 text-sm text-[#8399AE]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#F5F0EB] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-[#8399AE]">&copy; {new Date().getFullYear()} Automation Architects</p>
      </div>
    </footer>
  );
}
