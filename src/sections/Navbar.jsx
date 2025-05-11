import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10 shadow-md overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 overflow-x-hidden ">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/assets/Futuristic MN Web Solutions Logo.png"
            alt="MN Web Solutions"
            className="h-14 w-14 rounded-full border-2 border-white object-cover"
          />
          <span className="ml-3 text-white font-semibold text-xl hidden sm:inline">
            MN Web Solutions
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-white text-lg font-medium">
          <a href="#services" className="hover:text-cyan-400 transition-all duration-200">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition-all duration-200">Portfolio</a>
          <a href="#about" className="hover:text-cyan-400 transition-all duration-200">About</a>
          <a href="#contact" className="hover:text-cyan-400 transition-all duration-200">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white ml-4 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 text-white space-y-4 text-base font-medium">
          <a href="#services" className="block hover:text-cyan-400">Services</a>
          <a href="#portfolio" className="block hover:text-cyan-400">Portfolio</a>
          <a href="#about" className="block hover:text-cyan-400">About</a>
          <a href="#contact" className="block hover:text-cyan-400">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
