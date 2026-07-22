'use client';

import { useLocale } from '@/hooks/useLocale';

export function Footer() {
  const { t, shared } = useLocale();

  const links = [
    { label: t.email, href: `mailto:${shared.email}`, display: shared.email },
    { label: 'GitHub', href: shared.github, display: 'GitHub' },
    { label: 'LinkedIn', href: shared.linkedin, display: 'LinkedIn' },
  ];

  return (
    <footer
      className="relative overflow-hidden border-t border-border bg-surface px-6 py-16"
      style={{
        backgroundImage: "url('/stars_pattern.svg')",
        backgroundRepeat: 'repeat',
        backgroundSize: '300px',
        backgroundPosition: 'center',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-surface/95" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 sm:flex-row sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">{shared.name}</p>
          <p className="mt-2 text-sm text-muted">{t.role}</p>
          <p className="mt-1 text-sm text-muted">{t.availability}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">
            {t.contactHeading}
          </h4>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-7xl border-t border-border pt-8 text-xs text-muted">
        © {new Date().getFullYear()} {shared.name}. All rights reserved.
      </div>
    </footer>
  );
}
