'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { FadeSection, staggerContainer, staggerItem } from '@/components/ui/Reveal';
import { useLocale } from '@/hooks/useLocale';

export function Education() {
  const { t } = useLocale();
  const prefersReducedMotion = useReducedMotion();

  return (
    <FadeSection>
      <Section id="education" title={t.educationTitle} className="!py-16">
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {t.education.map((item) => (
            <motion.article
              key={item.title}
              variants={prefersReducedMotion ? undefined : staggerItem}
              className="border border-border px-5 py-4"
            >
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-fg/90">{item.school}</p>
              <p className="mt-2 text-sm text-muted">{item.period}</p>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </FadeSection>
  );
}
