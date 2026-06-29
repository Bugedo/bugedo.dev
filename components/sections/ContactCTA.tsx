'use client';

import { site } from '@/data/site';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export function ContactCTA() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            # Contact.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{site.availability}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={`mailto:${site.email}`}>Get in touch</ButtonLink>
            <ButtonLink href={site.cvUrl} variant="ghost" download>
              Download CV
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-fg"
              aria-label="GitHub"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-fg"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
