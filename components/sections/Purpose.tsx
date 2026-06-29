'use client';

import { purpose } from '@/data/site';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Purpose() {
  return (
    <Section id="purpose" title={`# ${purpose.title}`} className="bg-surface">
      <div className="max-w-3xl space-y-6">
        {purpose.paragraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
