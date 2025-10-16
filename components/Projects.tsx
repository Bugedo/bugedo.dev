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
              A comprehensive web application for a padel club with complex backend logic built on
              Supabase. Manages 3 courts with dynamic daily scheduling, handling 50+ confirmed
              bookings per week. Features complete user system with email confirmations, allowing
              clients to manage everything from the app including cantina consumption tracking and
              seamless scheduling operations.
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

          {/* Project 3 - Prepaga Argentina */}
          <div className="bg-[#1f1f1f] rounded-2xl p-6 hover:scale-[1.02] transition-transform">
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
              <img
                src="/prepagaargentina.jpg"
                alt="Prepaga Argentina Preview"
                className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-3xl font-bold mb-2">Prepaga Argentina</h3>
            <p className="text-gray-400 mb-4">
              A data capture web application with a form connected to a database and an admin panel
              for managing collected data. Employees can upload enrollment forms with file
              attachments to the bucket for streamlined data collection and management.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.prepagaargentina.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                Deployment
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Bugedo/medweb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                GitHub Repo
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Project 4 - Yas y Manu */}
          <div className="bg-[#1f1f1f] rounded-2xl p-6 hover:scale-[1.02] transition-transform">
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
              <img
                src="/yasymanu.jpg"
                alt="Yas y Manu Wedding Invitation Preview"
                className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-3xl font-bold mb-2">Wedding Invitation</h3>
            <p className="text-gray-400 mb-4">
              A virtual wedding invitation website connected to Google Sheets API for data
              management. Handles confirmation and payment processing for 1500+ guests with dynamic
              pricing controlled from Google Sheets, allowing the couple to manage all guest
              information and pricing updates in real-time.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://yasymanu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                Deployment
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Bugedo/yasymanu"
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
