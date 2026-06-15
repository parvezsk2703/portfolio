import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-slate-500">
          © 2026 {PROFILE.name}. Built with Next.js, Three.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 transition-colors hover:text-accent-cyan">
            <Github className="h-4 w-4" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 transition-colors hover:text-accent-cyan">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="text-slate-400 transition-colors hover:text-accent-cyan">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
