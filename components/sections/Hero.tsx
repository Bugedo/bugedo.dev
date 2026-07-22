'use client';

import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/ui/Button';
import { FadeSection, Reveal } from '@/components/ui/Reveal';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { useLocale } from '@/hooks/useLocale';

export function Hero() {
  const { t, shared } = useLocale();

  return (
    <FadeSection>
      <section
        id="home"
        className="relative flex min-h-[85svh] flex-col justify-center overflow-hidden px-6 py-24"
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
              {t.role}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
              {shared.tagline}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-base text-fg/80 sm:text-lg">{t.stackFlexible}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href={shared.cvUrl} download>
                {t.downloadCv}
              </ButtonLink>
              <ButtonLink href={`mailto:${shared.email}`} variant="ghost">
                {t.email}
              </ButtonLink>
              <div className="ml-1 flex items-center gap-4">
                <a
                  href={shared.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-fg"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={shared.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-fg"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 h-px w-24 bg-white/20"
          />
        </div>
      </section>
    </FadeSection>
  );
}
