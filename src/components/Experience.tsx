"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading eyebrow="04 — Experience" title="Where I've Worked" />

      <div className="mx-auto max-w-4xl space-y-8">
        {EXPERIENCE.map((e, i) => (
          <motion.article
            key={e.role + e.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1 }}
            className="glass glass-hover relative overflow-hidden p-7 sm:p-9"
          >
            {/* gradient top accent bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet" />
            {/* decorative corner glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-violet/10 blur-3xl" />

            {/* header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan">
                  <Briefcase className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">{e.role}</h3>
                  <p className="font-medium text-accent-cyan">{e.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  <Calendar className="h-3.5 w-3.5 text-accent-cyan" /> {e.period}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-accent-violet" /> {e.location}
                </span>
              </div>
            </div>

            {/* divider */}
            <div className="my-6 h-px w-full bg-white/10" />

            {/* responsibilities in a two-column grid */}
            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {e.points.map((pt) => (
                <div key={pt} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                  <p className="text-sm leading-relaxed text-slate-300">{pt}</p>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
