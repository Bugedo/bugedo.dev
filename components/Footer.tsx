'use client';

import { site, contactLinks } from '@/data/site';

export function Footer() {
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
          <p className="font-display text-lg font-bold">{site.name}</p>
          <p className="mt-2 text-sm text-muted">{site.role}</p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">Contact</h4>
          <p className="mt-4 text-sm text-muted">{site.availability}</p>
          <ul className="mt-4 space-y-2">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-7xl border-t border-border pt-8 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
