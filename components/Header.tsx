'use client';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center px-6 py-4 border-b border-gray-800 bg-black/80 backdrop-blur">
      <a href="#home" className="flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={32}
          height={32}
          className="hover:scale-110 transition-transform duration-300"
        />
      </a>

      <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-sm text-gray-400">
        <a href="#projects" className="hover:text-white">
          Projects
        </a>
        <a href="#work" className="hover:text-white">
          Work
        </a>
        <a href="#education" className="hover:text-white">
          Education
        </a>
        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </nav>
    </header>
  );
}
