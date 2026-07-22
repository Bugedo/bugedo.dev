'use client';

import { ButtonLink } from '@/components/ui/Button';
import { FadeSection, Reveal } from '@/components/ui/Reveal';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { useLocale } from '@/hooks/useLocale';

export function ContactCTA() {
  const { t, shared } = useLocale();

  return (
    <FadeSection>
      <section id="contact" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t.contactTitle}
            </h2>
            <a
              href={`mailto:${shared.email}`}
              className="mt-6 inline-block font-display text-xl text-fg transition-colors hover:text-white sm:text-2xl"
            >
              {shared.email}
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              <a
                href={shared.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-fg"
                aria-label="GitHub"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a
                href={shared.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-fg"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <ButtonLink href={shared.cvUrl} variant="ghost" download className="!px-4 !py-2 !text-xs">
                {t.downloadCv}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </FadeSection>
  );
}
