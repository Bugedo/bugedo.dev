'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';
import { navLinks, site } from '@/data/site';
import { scrollToSection } from '@/lib/scroll';
import { ButtonLink } from '@/components/ui/Button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3"
          aria-label="Go to home"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="transition-transform duration-300 hover:scale-110"
          />
          <span className="hidden text-sm font-semibold tracking-wide sm:inline">{site.name}</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </button>
          ))}
          <ButtonLink href={site.cvUrl} variant="ghost" download className="!px-4 !py-2 !text-xs">
            CV
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ButtonLink href={site.cvUrl} variant="ghost" download className="!px-3 !py-2 !text-xs">
            CV
          </ButtonLink>

          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                className="rounded border border-border p-2 text-muted transition-colors hover:text-fg"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
              <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-border bg-surface p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-display text-lg font-bold">Menu</Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      className="rounded border border-border p-2 text-muted hover:text-fg"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleNav(link.id)}
                      className="text-left text-lg text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
