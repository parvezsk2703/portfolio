"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad">
      <SectionHeading eyebrow="06 — Recognition" title="Achievements" />

      <div className="mx-auto max-w-3xl space-y-4">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1 }}
            className="glass glass-hover flex items-start gap-4 p-6"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-400/20 to-accent-violet/20 text-amber-300">
              <Trophy className="h-6 w-6" />
            </span>
            <p className="pt-2 text-sm leading-relaxed text-slate-200">{a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
