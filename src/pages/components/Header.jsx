import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Finder from "./Finder"; // Assicurati che il percorso sia corretto

export default function Header() {
  const [isFinderOpen, setIsFinderOpen] = useState(false);

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
            <button className="w-10 h-10 bg-white text-blue-900 rounded-full flex justify-center items-center">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l4.28 4.28"
                />
              </svg>
            </button>

            <button className="ml-4 text-blue-900 focus:outline-none">
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
          </div>
        </div>
      </nav>

      {isFinderOpen && <Finder onClose={() => setIsFinderOpen(false)} />}
    </>
  );
}
