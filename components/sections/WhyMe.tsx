'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { advantages } from '@/data/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { SectionCTA } from '@/components/ui/SectionCTA';
import { staggerContainer, staggerItem } from '@/components/ui/Reveal';
import { parseBoldText } from '@/lib/parseBoldText';

export function WhyMe() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Section
        id="why-me"
        title="# Why me."
        subtitle="What working with me actually feels like."
      >
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {advantages.map((item) => (
            <motion.div key={item.title} variants={prefersReducedMotion ? undefined : staggerItem}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {parseBoldText(item.description)}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <SectionCTA label="Ready to start a project?" buttonText="Get in touch" />
    </>
  );
}
