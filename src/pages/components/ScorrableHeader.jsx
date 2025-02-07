import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Finder from './Finder'; // Assicurati che il percorso sia corretto

export default function ScorrableHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFinderOpen, setIsFinderOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if ((scrollY > 150 && !isScrolled) || (scrollY <= 150 && isScrolled)) {
            setIsScrolled(scrollY > 150);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <>
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full flex items-center justify-between px-5 md:px-10 bg-[#1f5bbf] shadow-md fixed top-0 left-0 transition-all duration-300 ease-in-out z-[100] py-3"
            style={{ fontFamily: "'Titillium Web', sans-serif" }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link href="/">
                <img
                  src="/fara.svg"
                  alt="Fara Logo"
                  className="w-12 h-12 md:w-16 md:h-16 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>

            {/* Menu links for desktop */}
            <div className="hidden md:flex absolute inset-x-0 justify-center z-10">
              <ul className="flex space-x-8 text-lg font-medium text-white">
                <li className="hover:underline transition-colors duration-300">
                  <Link href="/event">L'Evento</Link>
                </li>
                <li className="hover:underline transition-colors duration-300">
                  <Link href="/service">Servizi</Link>
                </li>
                <li className="hover:underline transition-colors duration-300">
                  <Link href="/communication">Comunicazioni</Link>
                </li>
                <li className="hover:underline transition-colors duration-300">
                  <Link href="/streaming">Streaming</Link>
                </li>
                <li className="hover:underline transition-colors duration-300">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="hover:underline transition-colors duration-300">
                  <Link href="/contact">Contattaci</Link>
                </li>
              </ul>
            </div>

            {/* Area Login, Registrazione e Icona di Ricerca for desktop */}
            <div className="hidden md:flex space-x-4 items-center z-10">
              <Link href="/login">
                <span className="text-white hover:underline font-medium transition duration-300">
                  Login
                </span>
              </Link>
              <Link href="/registers">
                <span className="text-white hover:underline font-medium transition duration-300">
                  Registrazione
                </span>
              </Link>
              {/* Icona di ricerca */}
              <button
                onClick={() => setIsFinderOpen(true)}
                className="text-white focus:outline-none transition-transform duration-300 hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Finder modale */}
      {isFinderOpen && <Finder onClose={() => setIsFinderOpen(false)} />}
    </>
  );
}
