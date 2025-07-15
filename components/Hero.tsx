'use client';

import { Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col lg:justify-center items-center py-8 h-screen px-4 text-white overflow-hidden"
    >
      <div className="flex flex-col max-w-5xl z-10">
        <p className="text-4xl font-medium text-gray-300">Hello there!</p>

        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-bold leading-tight">I'm Nicolás Bugedo.</h1>
          <h2 className="text-5xl font-light text-gray-400">I build web applications.</h2>
        </div>

        <p className="text-2xl text-gray-400 py-6 leading-relaxed">
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

        <div className="flex items-center justify-between gap-6">
          <a
            href="/nicolas-bugedo-fullstack-cv.pdf"
            download
            className="inline-block text-2xl px-5 py-4 border border-gray-500 text-gray-300 rounded hover:bg-gray-700 hover:text-gray-100 transition-colors duration-200"
          >
            Download CV
          </a>

          <div className="flex gap-4 text-gray-400">
            <a
              href="https://github.com/CaimanBrujo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover:scale-110 duration-200"
            >
              <Github className="w-15 h-15" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicobugedo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover:scale-110 duration-200"
            >
              <Linkedin className="w-15 h-15" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
