'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 14000);

    const handleScroll = () => {
      if (!visible && window.scrollY > 50) {
        setVisible(true);
        clearTimeout(timer);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Opcional: quitar cualquier hash de la URL
      history.replaceState(null, '', ' ');
    }
  };

  return (
    <>
      {/* Header */}
      <header
        className={`sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur transition-opacity duration-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button onClick={() => scrollToSection('home')} className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={32}
            height={32}
            className="hover:scale-110 transition-transform duration-300"
          />
        </button>

        <nav className="flex gap-6 text-sm text-gray-400">
          <button onClick={() => scrollToSection('work')} className="hover:text-white">
            Work
          </button>
          <button onClick={() => scrollToSection('education')} className="hover:text-white">
            Education
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white">
            Contact
          </button>
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
          className="absolute z-50 text-sm px-3 py-2 text-gray-400 rounded-full bg-black/80 hover:bg-[#353535] duration-200 hover:scale-110"
        >
          DOWNLOAD CV
        </a>
      </div>
    </>
  );
}
