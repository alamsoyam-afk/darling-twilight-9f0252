import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/booking", label: "Booking" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-primary text-white shadow-lg z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition duration-300">
          <img src="/logo.svg" alt="Neighborhood Builders Logo" className="h-10 w-auto" />
          <h1 className="text-lg md:text-2xl font-bold text-accent hidden sm:block">Neighborhood Builders</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-accent transition duration-300 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-primary border-t border-gray-700 px-6 py-4 space-y-3"
        >
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="block py-2 text-white hover:text-accent transition duration-300 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}