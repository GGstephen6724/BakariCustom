// components/FadeIn.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // optional stagger delay
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% of section is visible
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
