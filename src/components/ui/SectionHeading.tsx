"use client";

import { motion } from "framer-motion";

type Props = { eyebrow: string; title: string; subtitle?: string };

/** Animated section header used across the page for visual consistency. */
export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-14 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delay: 0.05 }}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
