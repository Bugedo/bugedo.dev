'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { processSteps } from '@/data/site';
import { Section } from '@/components/ui/Section';
import { Reveal, staggerContainer, staggerItem } from '@/components/ui/Reveal';

export function Process() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="process"
      title="# Process."
      subtitle="Here's what working together looks like."
      className="bg-surface"
    >
      <motion.div
        variants={prefersReducedMotion ? undefined : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-12 md:grid-cols-3"
      >
        {processSteps.map((step) => (
          <motion.div key={step.step} variants={prefersReducedMotion ? undefined : staggerItem}>
            <Reveal>
              <span className="font-display text-5xl font-bold text-white/20">{step.step}</span>
              <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
