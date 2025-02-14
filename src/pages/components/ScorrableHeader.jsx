import { motion } from "framer-motion";
import Link from "next/link";

export default function ScorrableHeader() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 bg-[#1f5bbf] shadow-md z-[100] py-3"
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/fara.svg"
              alt="Fara Logo"
              className="w-12 h-12 md:w-16 md:h-16 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
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

        <div className="hidden md:flex items-center space-x-4">
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
          <button
            onClick={() => {
              /* Logica per aprire il Finder se necessario */
            }}
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
      </div>
    </motion.nav>
  );
}
