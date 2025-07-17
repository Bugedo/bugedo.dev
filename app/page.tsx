import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <WorkExperience />
    </main>
  );
}
