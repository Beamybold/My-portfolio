import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-black text-white px-6 py-4 fixed w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">AdebimpeAI</h1>

        {/* Hamburger button for  small screens) */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

        {/* Links (hidden on small screens, flex on medium+) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/skills" className="hover:text-blue-400">Skills</Link>
          <Link to="/experience" className="hover:text-blue-400">Experience</Link>
          <Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link>
          <Link to="/testimonials" className="hover:text-blue-400">Testimonials</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>

      {/* Mobile menu (visible when hamburger is clicked) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col">
          <Link to="/" onClick={toggleMenu} className="hover:text-blue-400">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-blue-400">About</Link>
          <Link to="/projects" onClick={toggleMenu} className="hover:text-blue-400">Projects</Link>
          <Link to="/skills" onClick={toggleMenu} className="hover:text-blue-400">Skills</Link>
          <Link to="/experience" onClick={toggleMenu} className="hover:text-blue-400">Experience</Link>
          <Link to="/portfolio" onClick={toggleMenu} className="hover:text-blue-400">Portfolio</Link>
          <Link to="/testimonials" onClick={toggleMenu} className="hover:text-blue-400">Testimonials</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
