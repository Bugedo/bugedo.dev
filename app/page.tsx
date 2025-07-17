import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <WorkExperience />
      <Education />
    </main>
  );
}
