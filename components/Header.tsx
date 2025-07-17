'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show header and button after 20s
    const timer = setTimeout(() => {
      setVisible(true);
    }, 20000);

    // Show on scroll
    const handleScroll = () => {
      if (!visible && window.scrollY > 50) {
        setVisible(true);
        clearTimeout(timer); // cancel timer if scrolled
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  return (
    <>
      {/* Header */}
      <header
        className={`sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur transition-opacity duration-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="hover:scale-110 transition-transform duration-300"
          />
        </a>

        <nav className="flex gap-6 text-sm text-gray-400">
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

      {/* CV Download Button */}
      <div
        className={`sticky top-[75px] z-40 flex justify-end px-6 transition-opacity duration-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="/nicolas_bugedo_fullstack_cv.pdf"
          download
          className="inline-block text-sm px-3 py-2 text-gray-400 rounded-full bg-black/80 hover:bg-[#353535] duration-200 hover:scale-110"
        >
          DOWNLOAD CV
        </a>
      </div>
    </>
  );
}
