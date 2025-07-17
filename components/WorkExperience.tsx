'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { ExternalLink } from 'lucide-react';

export default function WorkExperience() {
  return (
    <section
      id="work"
      className="
        relative flex flex-col justify-center items-center
        px-4 text-white overflow-hidden min-h-dvh
      "
    >
      <div className="flex flex-col max-w-5xl z-10">
        {/* TITLE */}
        <h2 className="text-5xl sm:text-6xl font-bold mb-16 text-white text-center">
          Work Experience
        </h2>

        {/* Tabs */}
        <Tabs.Root defaultValue="fullstack" className="w-full">
          <Tabs.List className="flex justify-center mb-8 gap-4">
            <Tabs.Trigger
              value="fullstack"
              className="px-5 py-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xl sm:text-2xl"
            >
              Full Stack
            </Tabs.Trigger>
            <Tabs.Trigger
              value="previous"
              className="px-5 py-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200 data-[state=active]:bg-gray-700 data-[state=active]:text-white text-xl sm:text-2xl"
            >
              Previous
            </Tabs.Trigger>
          </Tabs.List>

          {/* Content Wrapper */}
          <div className="relative w-full h-[600px]">
            {/* Tab: Fullstack */}
            <Tabs.Content value="fullstack">
              <div className="space-y-6">
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-100">
                  Co-Founder & Full Stack Developer
                </h3>
                <p className="text-gray-400 text-xl sm:text-2xl mb-4">
                  Developing Bridges · 2025 - Present
                </p>
                <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed mb-4">
                  After relocating to Europe and reflecting deeply on my career path, I decided to
                  return to tech with renewed energy and purpose. Together with a long-time
                  collaborator and friend—someone I had worked with for years in completely
                  different industries—we co-founded{' '}
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
                <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed">
                  At Developing Bridges, I design and develop full stack web applications that
                  prioritize usability and performance. From building REST APIs and integrating
                  third-party services to crafting clean and accessible interfaces, I collaborate
                  with a small but highly motivated team. Our shared journey of transitioning into
                  tech gives us a unique perspective on problem-solving and innovation.
                </p>
              </div>
            </Tabs.Content>

            {/* Tab: Previous */}
            <Tabs.Content value="previous">
              <div className="space-y-6">
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-100">
                  Electrician & Solar Water Heater Installer
                </h3>
                <p className="text-gray-400 text-xl sm:text-2xl mb-4">
                  Self-employed · 2017 - 2024
                </p>
                <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed mb-4">
                  For several years, I worked independently and alongside small teams, serving a
                  wide range of residential and commercial clients. This period shaped my ability to
                  adapt, solve complex problems on the fly, and communicate clearly with
                  clients—skills that would later prove invaluable in the software world.
                </p>
                <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed">
                  During this time, I also met my future co-founder, and together we tackled
                  countless projects in the physical world before realizing our passion for building
                  in the digital space. That shared history of collaboration is what inspired us to
                  pivot and co-create Developing Bridges.
                </p>
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </section>
  );
}
