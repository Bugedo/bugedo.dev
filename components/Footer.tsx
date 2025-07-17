'use client';
import { DataList } from '@radix-ui/themes';
import Image from 'next/image';

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#171717] px-6 lg:px-30 pt-20 h-[100svh]"
      style={{
        backgroundImage: "url('/stars_pattern_large_delicate_bg.svg')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundAttachment: 'fixed', // Parallax effect
      }}
    >
      {/* SVG background (Moon) */}
      <div className="absolute inset-0 flex justify-end items-end">
        <Image
          src="/moon.svg"
          alt="To the moon"
          width={790}
          height={500}
          className="w-full max-w-[790px] md:max-h-[500px]"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-10">
        {/* Contact Section */}
        <div id="contact" className="text-left">
          <h4 className="text-gray-100 font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <span className="font-medium text-gray-100">Email:</span>{' '}
              <a
                href="mailto:nicolas@bugedo.dev"
                className="no-underline text-gray-400 hover:text-white transition-colors duration-200"
              >
                nicolas@bugedo.dev
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-100">Phone:</span>{' '}
              <a
                href="tel:+393791025851"
                className="no-underline text-gray-400 hover:text-white transition-colors duration-200"
              >
                +39 3791025851
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-100">GitHub:</span>{' '}
              <a
                href="https://github.com/CaimanBrujo"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-gray-400 hover:text-white transition-colors duration-200"
              >
                github.com/caimanbrujo
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-100">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/nicobugedo/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline text-gray-400 hover:text-white transition-colors duration-200"
              >
                linkedin.com/in/nicobugedo
              </a>
            </li>
          </ul>
        </div>

        {/* Stack Section */}
        <div className="text-left">
          <h4 className="text-gray-100 font-semibold mb-4">Tech Stack</h4>
          <DataList.Root orientation="vertical" size="2">
            <DataList.Item>
              <DataList.Label color="gray">Frontend</DataList.Label>
              <DataList.Value>
                Next.js, React, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label color="gray">Backend</DataList.Label>
              <DataList.Value>Node.js, Express, REST APIs, Supabase, BaaS</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label color="gray">Databases</DataList.Label>
              <DataList.Value>PostgreSQL, MongoDB</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label color="gray">Tools</DataList.Label>
              <DataList.Value>
                Git & GitHub, Vercel, Railway, Jest, Webpack, Vite, ESLint, Prettier
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label color="gray">Design</DataList.Label>
              <DataList.Value>Figma, Photoshop</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="relative mt-8 text-left text-gray-500 text-xs z-10">
        © {new Date().getFullYear()} Nicolás Bugedo. All rights reserved.
      </div>
    </footer>
  );
}
