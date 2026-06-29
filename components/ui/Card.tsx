'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
      transition={{ duration: 0.2 }}
      className={`rounded-lg border border-white/10 bg-surface-raised p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
