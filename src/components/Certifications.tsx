"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { CERTS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <SectionHeading eyebrow="05 — Credentials" title="Certifications" />

      <div className="grid gap-5 sm:grid-cols-2">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass glass-hover flex items-center gap-4 p-5"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan">
              <BadgeCheck className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white">{c.name}</h3>
              <p className="text-xs text-slate-400">{c.issuer}</p>
              <p className="mt-0.5 font-mono text-[11px] text-slate-500">{c.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
