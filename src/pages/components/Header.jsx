import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Finder from "./Finder"; // Assicurati che il percorso sia corretto

export default function Header() {
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Blocca lo scroll della pagina quando il menu mobile è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Blocca anche lo scroll sull'html
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    // Pulizia in caso di smontaggio del componente
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav
        id="main-header"
        className="w-full py-4 bg-white shadow-md border-b border-gray-300 z-50"
      >
        <div className="container mx-auto px-5 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/logocapri.png"
                alt="Logo Capri"
                className="w-16 h-16 md:w-24 md:h-24 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8 text-lg font-medium">
              <li className="hover:text-blue-400 hover:underline transition-colors duration-300">
                <Link href="/event">L'Evento</Link>
              </li>
              <li className="hover:text-blue-400 hover:underline transition-colors duration-300">
                <Link href="/service">Servizi</Link>
              </li>
              <li className="hover:text-blue-400 hover:underline transition-colors duration-300">
                <Link href="/communication">Comunicazioni</Link>
              </li>
              <li className="hover:text-blue-400 hover:underline transition-colors duration-300">
                <Link href="/streaming">Streaming</Link>
              </li>
              <li className="hover:text-blue-400 hover:underline transition-colors duration-300">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-blue-400 hover:underline transition-colors duration-300">
                <Link href="/contact">Contattaci</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Login, Registrazione e Icona di Ricerca */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <span className="text-gray-700 hover:text-blue-600 hover:underline font-medium transition duration-300">
                Login
              </span>
            </Link>
            <Link href="/registers">
              <span className="text-gray-700 hover:text-blue-600 hover:underline font-medium transition duration-300">
                Registrazione
              </span>
            </Link>
            <button
              onClick={() => setIsFinderOpen(true)}
              className="text-blue-600 focus:outline-none transition-transform duration-300 hover:scale-110"
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

          {/* Mobile Menu Icons */}
          <div className="md:hidden flex justify-end items-center w-full">
            {/* Bottone per aprire il menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="w-10 h-10 bg-white text-blue-900 rounded-full flex justify-center items-center focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Icona di ricerca per mobile */}
            <button
              onClick={() => setIsFinderOpen(true)}
              className="ml-4 text-blue-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Slide-in da sinistra) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold text-black">
            Evento digitalizzazione Capri
          </h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
          <li className="text-black hover:underline">
            <Link href="/event" onClick={() => setIsMobileMenuOpen(false)}>
              L'Evento
            </Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/service" onClick={() => setIsMobileMenuOpen(false)}>
              Servizi
            </Link>
          </li>
          <li className="text-black hover:underline">
            <Link
              href="/communication"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Comunicazioni
            </Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/streaming" onClick={() => setIsMobileMenuOpen(false)}>
              Streaming
            </Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="text-black hover:underline">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contattaci
            </Link>
          </li>
        </ul>
        <div className="p-4 border-t mt-auto">
          <div className="flex flex-col space-y-2">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black hover:underline"
            >
              Login
            </Link>
            <Link
              href="/registers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black hover:underline"
            >
              Registrazione
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay per chiudere il menu cliccando fuori */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40"
        />
      )}

      {isFinderOpen && <Finder onClose={() => setIsFinderOpen(false)} />}
    </>
  );
}
