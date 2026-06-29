'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { services, site } from '@/data/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/components/ui/Reveal';

export function WhatIDo() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="what-i-do"
      title="# What I do."
      subtitle="Capabilities shaped by real production work — not a laundry list of frameworks."
    >
      <p className="mb-8 max-w-3xl text-muted">{site.stackAgnostic}</p>

      <motion.div
        variants={prefersReducedMotion ? undefined : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={prefersReducedMotion ? undefined : staggerItem}>
            <Card className="h-full">
              <h3 className="font-display text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
