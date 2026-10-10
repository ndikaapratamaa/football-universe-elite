import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

const FOOTER_LINKS = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative">
      <div className="glow-divider" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(34,197,94,0.06),transparent_70%)]" />
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="group flex items-center gap-2.5">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
            <Image src="/logo-web.png" alt="Football Universe Elite" fill className="object-contain" />
          </div>
          <div>
            <p className="font-display text-sm font-bold tracking-tight text-white">Football Universe Elite</p>
            <p className="text-xs text-muted">© 2026. All rights reserved.</p>
          </div>
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://github.com"
            target="_blank"
            className="flex items-center gap-1.5 transition-colors duration-300 hover:text-white"
          >
            <Github size={15} /> Github
          </Link>
        </nav>
      </div>
    </footer>
  );
}
