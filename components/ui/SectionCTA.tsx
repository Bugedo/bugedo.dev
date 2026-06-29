'use client';

import { Reveal } from './Reveal';
import { Button, ButtonLink } from './Button';
import { scrollToSection } from '@/lib/scroll';

type SectionCTAProps = {
  label: string;
  buttonText: string;
  onClick?: () => void;
  href?: string;
};

export function SectionCTA({ label, buttonText, onClick, href }: SectionCTAProps) {
  const handleClick = onClick ?? (() => scrollToSection('contact'));

  return (
    <div className="border-y border-border bg-surface px-6 py-16">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-display text-2xl font-semibold sm:text-3xl">{label}</p>
        {href ? (
          <ButtonLink href={href} variant="primary">
            {buttonText}
          </ButtonLink>
        ) : (
          <Button variant="primary" onClick={handleClick}>
            {buttonText}
          </Button>
        )}
      </Reveal>
    </div>
  );
}
