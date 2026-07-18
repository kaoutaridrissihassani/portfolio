import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto">

          <div className="backdrop-blur-xl bg-white/80 dark:bg-[#161616]/80 border border-gray-200 dark:border-white/10 rounded-full shadow-xl px-6 py-4 flex items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold text-[#293681] dark:text-white"
            >
              KI Studio
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">

              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#4274D9] transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-3">

              {/* Dark Mode */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-11 h-11 rounded-full bg-[#4274D9] text-white flex items-center justify-center hover:rotate-180 duration-500"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden w-11 h-11 rounded-full bg-[#293681] text-white flex items-center justify-center"
              >
                <FaBars />
              </button>

            </div>

          </div>

        </div>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Background */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        ></div>

        {/* Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white dark:bg-[#1B1B1B] shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">

            <h2 className="text-2xl font-bold text-[#293681] dark:text-white">
              KI Studio
            </h2>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl dark:text-white"
            >
              <FaTimes />
            </button>

          </div>

          <ul className="flex flex-col p-6 gap-6 text-lg font-medium">

            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-[#4274D9] dark:text-white transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          <div className="px-6 mt-8">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-[#293681] hover:bg-[#4274D9] text-white py-3 rounded-full transition"
            >
              Hire Me
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;