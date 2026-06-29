'use client';

import { site, footerLinks } from '@/data/site';
import { scrollToSection } from '@/lib/scroll';

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

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-3">
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">Sitemap</h4>
          <ul className="mt-4 space-y-2">
            {footerLinks.sitemap.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider">Social</h4>
          <ul className="mt-4 space-y-2">
            {footerLinks.social.map((link) => (
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
