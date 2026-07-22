'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { FadeSection, staggerContainer, staggerItem } from '@/components/ui/Reveal';
import { useLocale } from '@/hooks/useLocale';

export function SelectedWork() {
  const { t, projects } = useLocale();
  const prefersReducedMotion = useReducedMotion();

  return (
    <FadeSection>
      <Section id="work" title={t.workTitle} subtitle={t.workSubtitle}>
        <motion.div
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={prefersReducedMotion ? undefined : staggerItem}
            >
              <Card className="overflow-hidden p-0">
                <div className="relative flex h-52 w-full items-center justify-center overflow-hidden bg-surface">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  ) : (
                    <span className="font-display text-4xl font-bold text-white/10">
                      {project.title}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {project.role}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg/90">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-2 py-0.5 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
                    >
                      {t.liveSite}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
                      >
                        {t.source}
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </FadeSection>
  );
}
