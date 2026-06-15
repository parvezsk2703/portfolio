"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#showcase", label: "Analytics" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-base-900/70 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="font-mono text-sm font-bold tracking-tight text-white">
          SP<span className="text-accent-cyan">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-300 transition-colors hover:text-accent-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.resume}
            download
            className="hidden items-center gap-2 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 text-xs font-semibold text-accent-cyan transition-all hover:bg-accent-cyan/20 sm:flex"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
          <button
            aria-label="Toggle menu"
            className="text-white md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="space-y-1 border-t border-white/10 bg-base-900/95 px-5 py-4 md:hidden"
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-accent-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={PROFILE.resume}
              download
              className="mt-2 flex items-center gap-2 rounded-lg bg-accent-cyan/10 px-3 py-2 text-sm font-semibold text-accent-cyan"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </li>
        </motion.ul>
      )}
    </motion.header>
  );
}
