'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { FadeSection, staggerContainer, staggerItem } from '@/components/ui/Reveal';
import { useLocale } from '@/hooks/useLocale';

export function Experience() {
  const { t } = useLocale();
  const prefersReducedMotion = useReducedMotion();

  return (
    <FadeSection>
      <Section id="experience" title={t.experienceTitle} subtitle={t.experienceSubtitle}>
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6"
        >
          {t.experience.map((job) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              variants={prefersReducedMotion ? undefined : staggerItem}
              className="group border border-border bg-surface-raised/50 p-6 transition-colors hover:border-white/20 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm font-semibold uppercase tracking-wider text-muted">
                    {job.role}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition-colors hover:text-white"
                      >
                        {job.company}
                        <ExternalLink className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg/90">{job.summary}</p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="font-display text-sm font-semibold text-fg">{job.period}</p>
                  <p className="mt-1 text-sm text-muted">{job.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </FadeSection>
  );
}
