import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import Finder from './Finder'; // Assicurati che il percorso sia corretto

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
        className="w-full flex items-center justify-between py-4 px-5 md:px-10 bg-white shadow-md z-50 relative"
        style={{ fontFamily: "'Titillium Web', sans-serif" }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img
              src="/logocapri.png"
              alt="Logo Capri"
              className="w-16 h-16 md:w-24 md:h-24 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>

        {/* Menu links for desktop */}
        <div className="hidden md:flex absolute inset-x-0 justify-center z-10">
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

        {/* Area Login / Registrazione e Icona di Ricerca per desktop */}
        <div className="hidden md:flex space-x-4 items-center z-10">
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

          {/* Icona di ricerca con effetto hover che apre il Finder */}
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

        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden flex justify-end items-center w-full px-4">
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
              ></path>
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
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Finder modale */}
      {isFinderOpen && <Finder onClose={() => setIsFinderOpen(false)} />}
    </>
  );
}
