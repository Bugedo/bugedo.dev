export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <h1 className="text-2xl font-bold">Nicolás Bugedo</h1>
      <nav className="flex gap-6 text-sm text-gray-400">
        <a href="#projects" className="hover:text-white">
          Projects
        </a>
        <a href="#about" className="hover:text-white">
          About
        </a>
        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </nav>
    </header>
  );
}
