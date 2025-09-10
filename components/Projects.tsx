'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section className="relative flex flex-col justify-start sm:justify-center items-center py-16 sm:py-20 px-4 text-white min-h-[80vh] sm:min-h-[100svh]">
      <div className="flex flex-col max-w-5xl z-10">
        <h2 id="projects" className="text-5xl sm:text-6xl font-bold mb-8 text-white text-center">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-[#1f1f1f] rounded-2xl p-6 hover:scale-[1.02] transition-transform">
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
              <img
                src="/devbridges.jpg"
                alt="Developing Bridges Preview"
                className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-3xl font-bold mb-2">Developing Bridges</h3>
            <p className="text-gray-400 mb-4">
              A landing website for a web agency, designed to showcase services and projects while
              making it easy for potential clients to get in touch. Built with Next.js, Tailwind
              CSS, and Framer Motion for a sleek, performant, and interactive user experience.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://developingbridges.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                Deployment
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/CaimanBrujo/dev-bridges"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                GitHub Repo
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Project 2 - Mundo Padel Club */}
          <div className="bg-[#1f1f1f] rounded-2xl p-6 hover:scale-[1.02] transition-transform">
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
              <img
                src="/mundopadel.jpg"
                alt="Mundo Padel Club Preview"
                className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-3xl font-bold mb-2">Mundo Padel Club</h3>
            <p className="text-gray-400 mb-4">
              A web application for a padel club with frontend and backend built on Supabase. It
              includes user management, booking system, and an admin dashboard for seamless
              scheduling and operations.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.mundopadelclub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                Deployment
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/CaimanBrujo/mundo-padel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                GitHub Repo
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
