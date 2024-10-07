// src/components/Navbar.js

import React, {
  useState
} from 'react';
import {
  motion
} from 'framer-motion';
import ContactButton from './ContactButton';

const Navbar = () => {
  const [isMenuOpen,
    setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      initial={ { y: -100 }}
      animate={ { y: 0 }}
      transition={ { duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-lg z-50"
      >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-white text-3xl font-extrabold cursor-pointer"
          initial={ { opacity: 0 }}
          animate={ { opacity: 1 }}
          transition={ { duration: 1 }}
          >
          Padz Store
        </motion.h1>

        {/* Tombol Hamburger */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          initial={ { scale: 1 }}
          whileTap={ { scale: 0.9 }}
          transition={ { duration: 0.2 }}
          >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ): (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </motion.button>

        {/* Menu Navigasi */}
        <motion.div
          className={`hidden md:flex md:items-center md:space-x-8 ${isMenuOpen ? "flex": "hidden"}`}
          initial={ { opacity: 0, y: -20 }}
          animate={ { opacity: isMenuOpen ? 1: 0, y: isMenuOpen ? 0: -20 }}
          transition={ { duration: 0.3 }}
          >
          <ContactButton />
        </motion.div>
      </div>

      {/* Menu untuk mobile */}
      {isMenuOpen && (
        <motion.div
          className="flex flex-col md:hidden bg-gradient-to-r from-blue-600 to-blue-800 p-4 space-y-2"
          initial={ { opacity: 0, y: -20 }}
          animate={ { opacity: 1, y: 0 }}
          exit={ { opacity: 0, y: -20 }}
          transition={ { duration: 0.3 }}
          >
          <ContactButton />
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
