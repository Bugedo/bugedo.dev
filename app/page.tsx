'use client';

import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { useLocale } from '@/hooks/useLocale';

export default function Home() {
  const { locale } = useLocale();

  return (
    <div key={locale}>
      <Hero />
      <Experience />
      <SelectedWork />
      <Skills />
      <Education />
      <ContactCTA />
    </div>
  );
}
