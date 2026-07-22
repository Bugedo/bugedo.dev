'use client';

import { useLocale } from '@/hooks/useLocale';
import type { Locale } from '@/data/content';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  const options: Locale[] = ['en', 'es'];

  return (
    <div
      className={`inline-flex items-center gap-1 text-xs font-semibold tracking-wide ${className}`}
      role="group"
      aria-label="Language"
    >
      {options.map((option, index) => (
        <span key={option} className="inline-flex items-center gap-1">
          {index > 0 && <span className="text-muted/50">|</span>}
          <button
            type="button"
            onClick={() => setLocale(option)}
            className={`uppercase transition-colors ${
              locale === option ? 'text-fg' : 'text-muted hover:text-fg'
            }`}
            aria-pressed={locale === option}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  );
}
