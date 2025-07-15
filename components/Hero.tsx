'use client';

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:justify-center items-center py-10 h-screen px-4 text-white overflow-hidden">
      <div className="flex flex-col gap-8 max-w-5xl z-10">
        <p className="text-5xl font-medium text-gray-300">Hello there!</p>

        <div className="flex flex-col gap-2">
          <h1 className="text-7xl font-bold leading-tight">I'm Nicolás Bugedo.</h1>
          <h2 className="text-5xl font-light text-gray-400">I build web applications.</h2>
        </div>

        <p className="text-2xl text-gray-400 leading-relaxed">
          As a <span className="text-white text-3xl"> Full-Stack Developer</span>, I craft
          high-performance web experiences with modern tools like{' '}
          <span className="text-white text-3xl"> Next.js</span> and{' '}
          <span className="text-white text-3xl"> TypeScript</span> on the frontend, and{' '}
          <span className="text-white text-3xl"> Node.js</span> with{' '}
          <span className="text-white text-3xl"> Express</span> on the backend. I work with{' '}
          <span className="text-white text-3xl"> PostgreSQL</span> and{' '}
          <span className="text-white text-3xl"> MongoDB</span> for data management, deploy on{' '}
          <span className="text-white text-3xl"> Vercel</span> and{' '}
          <span className="text-white text-3xl"> Railway</span> , and design clean interfaces using{' '}
          <span className="text-white text-3xl"> Figma</span>.
        </p>
      </div>
    </section>
  );
}
