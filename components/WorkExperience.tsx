'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { ExternalLink } from 'lucide-react';

export default function WorkExperience() {
  return (
    <section
      id="work"
      className="relative flex flex-col justify-start sm:justify-center items-center py-16 sm:py-20 pb-8 sm:pb-20 px-4 text-white"
    >
      <div className="flex flex-col max-w-5xl z-10">
        {/* TITLE */}
        <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-white text-center">
          Work Experience
        </h2>

        {/* Tabs */}
        <Tabs.Root defaultValue="fullstack" className="w-full">
          <Tabs.List className="flex justify-center mb-8 gap-4">
            <Tabs.Trigger
              value="fullstack"
              className="px-5 py-3 rounded-full text-gray-300 hover:text-white hover:bg-[#353535] transition-colors duration-200 data-[state=active]:bg-[#353535] data-[state=active]:text-white text-xl sm:text-2xl"
            >
              Full Stack
            </Tabs.Trigger>
            <Tabs.Trigger
              value="previous"
              className="px-5 py-3 rounded-full text-gray-300 hover:text-white hover:bg-[#353535] transition-colors duration-200 data-[state=active]:bg-[#353535] data-[state=active]:text-white text-xl sm:text-2xl"
            >
              Previous
            </Tabs.Trigger>
          </Tabs.List>

          {/* Content Wrapper */}
          <div className="relative w-full">
            {/* Tab: Fullstack */}
            <Tabs.Content value="fullstack">
              <div className="space-y-12">
                {/* Ewents */}
                <div className="space-y-6">
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-100">
                    Full Stack Engineer
                  </h3>
                  <p className="text-gray-400 text-xl sm:text-2xl mb-4">
                    Ewents (USA) · Aug 2025 - Present
                  </p>
                  <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed">
                    Develop and maintain a comprehensive internal CRM system for managing
                    operations, contracts, and financials using a modern tech stack including Hono
                    on Cloudflare Workers for serverless API deployment, Supabase/PostgreSQL with
                    Prisma for database management, and Angular 18+ with Signals for responsive
                    frontend interfaces.
                  </p>
                  <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed">
                    Built core features including automated invoicing and commission calculation
                    systems, multi-model contract management (Staff Augmentation and Custom
                    Development), real-time timesheet tracking with approval workflows, and
                    financial dashboards with profitability analytics. Architected
                    microservices-based backend achieving sub-50ms global response times, optimized
                    database queries for complex business logic, and implemented CI/CD pipelines for
                    edge deployment, reducing manual processing workflows by 80% and enabling
                    real-time operational visibility across the organization.
                  </p>
                </div>

                {/* Developing Bridges */}
                <div className="space-y-6">
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-100">
                    Full Stack Developer & Founder
                  </h3>
                  <p className="text-gray-400 text-xl sm:text-2xl mb-4">
                    Developing Bridges · May 2025 - Present
                  </p>
                  <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed mb-4">
                    After relocating to Europe and reflecting deeply on my career path, I decided to
                    return to tech with renewed energy and purpose. I founded{' '}
                    <a
                      href="https://developingbridges.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase text-gray-300 hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      DEVELOPING BRIDGES
                      <ExternalLink className="w-5 h-5" />
                    </a>{' '}
                    to help businesses bridge their ideas with technology.
                  </p>
                  <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed mb-4">
                    Designed and developed full stack web applications using Next.js, React,
                    TypeScript, Tailwind CSS, and modern development workflows, delivering
                    responsive and accessible user interfaces.
                  </p>
                  <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed mb-4">
                    Built and maintained REST APIs, integrated third-party services, and managed
                    deployments for production-ready applications.
                  </p>
                  <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed mb-4">
                    Implemented authentication and data management using Supabase, ensuring secure
                    and scalable user management.
                  </p>
                  <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed mb-4">
                    Configured and maintained Hetzner servers running Ubuntu for production
                    environments, implementing best practices for security and performance.
                  </p>
                  <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed">
                    Deployed and managed self-hosted Supabase instances via Docker, enabling
                    scalable backend infrastructure with high availability and simplified
                    maintenance.
                  </p>
                </div>
              </div>
            </Tabs.Content>

            {/* Tab: Previous */}
            <Tabs.Content value="previous">
              <div className="space-y-6">
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-100">
                  Electrician & Solar Energy Technician
                </h3>
                <p className="text-gray-400 text-xl sm:text-2xl mb-4">
                  Self-employed · 2017 - 2024
                </p>
                <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed mb-4">
                  For several years, I worked independently and with small teams, delivering
                  reliable electrical solutions for residential and commercial clients. I
                  specialized in designing and implementing energy-efficient systems, including
                  heating systems and solar panels.
                </p>
                <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed">
                  This experience taught me to approach challenges with precision and creativity, to
                  adapt quickly, and to communicate effectively with clients.
                </p>
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </section>
  );
}
