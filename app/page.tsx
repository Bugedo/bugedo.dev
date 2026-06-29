import { Hero } from '@/components/sections/Hero';
import { MarqueeBand } from '@/components/sections/MarqueeBand';
import { WhatIDo } from '@/components/sections/WhatIDo';
import { WhyMe } from '@/components/sections/WhyMe';
import { Process } from '@/components/sections/Process';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Purpose } from '@/components/sections/Purpose';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <WhatIDo />
      <WhyMe />
      <Process />
      <SelectedWork />
      <Purpose />
      <ContactCTA />
    </>
  );
}
