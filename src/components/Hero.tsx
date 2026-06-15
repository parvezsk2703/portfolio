"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, ArrowDown, MapPin } from "lucide-react";
import { PROFILE, STATS } from "@/lib/data";
import Counter from "@/components/ui/Counter";
import ErrorBoundary from "@/components/ErrorBoundary";

// 3D canvas is client-only and heavy → load it lazily, never on the server.
const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 1.5 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* faint grid + 3D background */}
      <div className="absolute inset-0 -z-10 bg-grid-faint [background-size:44px_44px] opacity-60" />
      <div className="absolute inset-0 -z-10">
        {/* If WebGL ever fails, the gradient + grid above remain — no white screen. */}
        <ErrorBoundary fallback={null}>
          <Scene3D />
        </ErrorBoundary>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-5 sm:px-8"
      >
        <motion.span
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Open to Data Analyst internships & entry-level roles
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl"
        >
          {PROFILE.name}
          <br />
          <span className="text-gradient">{PROFILE.title}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-4 flex items-center gap-2 text-sm text-slate-400">
          <MapPin className="h-4 w-4 text-accent-cyan" /> {PROFILE.location}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={PROFILE.resume}
            download
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet px-6 py-3 text-sm font-semibold text-base-900 transition-transform hover:scale-[1.03]"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-accent-cyan/50"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
          <div className="flex items-center gap-1">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-3 text-slate-300 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-3 text-slate-300 transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Headline stats */}
        <motion.div
          variants={item}
          className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="glass px-4 py-4 text-center">
              <div className="text-2xl font-bold text-white">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
