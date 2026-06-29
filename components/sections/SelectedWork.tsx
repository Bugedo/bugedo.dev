'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '@/data/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { staggerContainer, staggerItem } from '@/components/ui/Reveal';

export function SelectedWork() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="work"
      title="# Work."
      subtitle="Production systems shipped for real businesses."
    >
      <motion.div
        variants={prefersReducedMotion ? undefined : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={prefersReducedMotion ? undefined : staggerItem}>
            <Card className="overflow-hidden p-0">
              <div className="relative flex h-56 w-full items-center justify-center overflow-hidden bg-surface">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <span className="font-display text-4xl font-bold text-white/10">{project.title}</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
                  >
                    Live site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
                    >
                      Source
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
  );
}
