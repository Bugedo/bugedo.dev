import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg text-fg/80 sm:text-xl">{subtitle}</p>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
