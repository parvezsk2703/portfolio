"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading eyebrow="04 — Experience" title="Where I've Worked" />

      <div className="relative mx-auto max-w-3xl">
        {/* vertical timeline line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent-cyan via-accent-violet to-transparent sm:left-1/2" />

        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={e.role + e.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1 }}
            className="relative mb-10 pl-12 sm:pl-0"
          >
            {/* node */}
            <span className="absolute left-2.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-base-900 bg-accent-cyan sm:left-1/2 sm:-translate-x-1/2" />

            <div className="glass glass-hover p-6 sm:ml-[55%]">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-xl bg-accent-cyan/10 p-2 text-accent-cyan">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{e.role}</h3>
                  <p className="text-sm text-accent-cyan">
                    {e.company} · {e.location}
                  </p>
                </div>
              </div>
              <p className="mb-3 font-mono text-xs text-slate-500">{e.period}</p>
              <ul className="space-y-2">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
