'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { FadeSection, Reveal, staggerContainer, staggerItem } from '@/components/ui/Reveal';
import { useLocale } from '@/hooks/useLocale';

export function Skills() {
  const { t, skillGroups } = useLocale();
  const prefersReducedMotion = useReducedMotion();

  return (
    <FadeSection>
      <Section id="skills" title={t.skillsTitle} subtitle={t.skillsIntro} className="bg-surface">
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.label} variants={prefersReducedMotion ? undefined : staggerItem}>
              <Reveal>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 bg-surface-raised px-3 py-1.5 text-sm text-fg/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </FadeSection>
  );
}
