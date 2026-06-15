"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = { name: string; level: number; icon: LucideIcon };

/** Animated skill proficiency bar that fills when scrolled into view. */
export default function SkillBar({ name, level, icon: Icon }: Props) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
          <Icon className="h-4 w-4 text-accent-cyan" aria-hidden />
          {name}
        </span>
        <span className="font-mono text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
