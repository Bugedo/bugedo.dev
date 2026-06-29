'use client';

import { motion } from 'framer-motion';
import { site } from '@/data/site';
import { Button, ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { scrollToSection } from '@/lib/scroll';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90svh] flex-col justify-center overflow-hidden px-6 py-24"
      style={{
        backgroundImage: "url('/stars_pattern.svg')",
        backgroundRepeat: 'repeat',
        backgroundSize: '400px',
        backgroundPosition: 'center',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-bg/95" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            {site.role}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
            {site.tagline}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">{site.subheadline}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection('contact')}>Get in touch</Button>
            <ButtonLink href={site.cvUrl} variant="ghost" download>
              Download CV
            </ButtonLink>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 h-px w-24 bg-white/20"
        />
      </div>
    </section>
  );
}
