'use client';

import { Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [setTimeout(() => setStep(1), 2000), setTimeout(() => setStep(2), 4500)];
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <section
      id="home"
      className="
    relative flex flex-col justify-center items-center px-4 text-white min-h-[100svh]"
    >
      <div className="flex flex-col max-w-5xl z-10">
        {/* TITLE 1 */}
        {step >= 0 && (
          <p className="mt-6 text-4xl sm:text-5xl font-medium text-gray-300">
            <Typewriter words={['Hello there!']} typeSpeed={100} cursor={false} />
          </p>
        )}

        <div className="flex flex-col gap-2">
          {/* TITLE 2 */}
          {step >= 1 && (
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
              <Typewriter words={["I'm Nicolás Bugedo."]} typeSpeed={100} cursor={false} />
            </h1>
          )}

          {/* TITLE 3 */}
          {step >= 2 && (
            <h2 className="text-4xl sm:text-5xl font-light text-gray-400">
              <Typewriter words={['I build web applications.']} typeSpeed={100} cursor={false} />
            </h2>
          )}
        </div>

        <p className="text-xl sm:text-2xl py-6 leading-relaxed">
          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            As a{' '}
          </span>

          <span
            className="text-white text-2xl sm:text-3xl opacity-0 animate-fadeIn"
            style={{ animationDelay: '7.5s', animationFillMode: 'forwards' }}
          >
            Full-Stack Developer
          </span>

          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            , I craft high-performance web experiences with modern tools like{' '}
          </span>

          <span
            className="text-white text-2xl sm:text-3xl opacity-0 animate-fadeIn"
            style={{ animationDelay: '8s', animationFillMode: 'forwards' }}
          >
            Next.js
          </span>

          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            {' '}
            and{' '}
          </span>

          <span
            className="text-white text-2xl sm:text-3xl opacity-0 animate-fadeIn"
            style={{ animationDelay: '8.5s', animationFillMode: 'forwards' }}
          >
            TypeScript
          </span>

          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            {' '}
            on the frontend, and{' '}
          </span>

          <span
            className="text-white text-2xl sm:text-3xl opacity-0 animate-fadeIn"
            style={{ animationDelay: '9s', animationFillMode: 'forwards' }}
          >
            Node.js
          </span>

          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            {' '}
            with{' '}
          </span>

          <span
            className="text-white text-2xl sm:text-3xl opacity-0 animate-fadeIn"
            style={{ animationDelay: '9.5s', animationFillMode: 'forwards' }}
          >
            Express
          </span>

          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            {' '}
            on the backend. I work with{' '}
          </span>

          <span
            className="text-white text-2xl sm:text-3xl opacity-0 animate-fadeIn"
            style={{ animationDelay: '10s', animationFillMode: 'forwards' }}
          >
            PostgreSQL
          </span>

          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            {' '}
            and{' '}
          </span>

          <span
            className="text-white text-2xl sm:text-3xl opacity-0 animate-fadeIn"
            style={{ animationDelay: '10.5s', animationFillMode: 'forwards' }}
          >
            MongoDB
          </span>

          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            {' '}
            for data management, deploy on{' '}
          </span>

          <span
            className="text-white text-2xl sm:text-3xl opacity-0 animate-fadeIn"
            style={{ animationDelay: '11s', animationFillMode: 'forwards' }}
          >
            Vercel
          </span>

          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            {' '}
            and{' '}
          </span>

          <span
            className="text-white text-2xl sm:text-3xl opacity-0 animate-fadeIn"
            style={{ animationDelay: '11.5s', animationFillMode: 'forwards' }}
          >
            Railway
          </span>

          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            , and design clean interfaces using{' '}
          </span>

          <span
            className="text-white text-2xl sm:text-3xl opacity-0 animate-fadeIn"
            style={{ animationDelay: '12s', animationFillMode: 'forwards' }}
          >
            Figma
          </span>

          <span
            className="text-gray-300 opacity-0 animate-fadeIn"
            style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
          >
            .
          </span>
        </p>

        <div
          className="flex items-center justify-end opacity-0 animate-fadeIn"
          style={{ animationDelay: '14s', animationFillMode: 'forwards' }}
        >
          <div className="flex gap-4 sm:gap-5 text-gray-400 self-end">
            <a
              href="https://github.com/CaimanBrujo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover:scale-110 duration-200"
            >
              <Github className="w-10 h-10 sm:w-12 sm:h-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicobugedo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover:scale-110 duration-200"
            >
              <Linkedin className="w-10 h-10 sm:w-12 sm:h-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
