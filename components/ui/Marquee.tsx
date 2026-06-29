'use client';

import { marqueeWords } from '@/data/site';

export function Marquee() {
  const text = marqueeWords.join(' ');
  const repeated = `${text} ${text} ${text} ${text}`;

  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4">
      <div className="flex whitespace-nowrap">
        <div className="animate-marquee flex shrink-0 items-center gap-8 px-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold tracking-widest text-muted sm:text-3xl"
            >
              {repeated}
            </span>
          ))}
        </div>
        <div
          className="animate-marquee flex shrink-0 items-center gap-8 px-4"
          aria-hidden="true"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold tracking-widest text-muted sm:text-3xl"
            >
              {repeated}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
