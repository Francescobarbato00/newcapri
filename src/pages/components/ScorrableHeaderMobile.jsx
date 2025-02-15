import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ScorrableHeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Blocca lo scroll della pagina quando il menu è aperto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Blocca anche lo scroll sull'HTML
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Header mobile */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full fixed top-0 left-0 bg-[#1f5bbf] shadow-md z-[100] py-3 md:hidden"
      >
        <div className="container mx-auto px-5 flex justify-between items-center">
          {/* Logo a sinistra */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <img
                src="/fara.svg"
                alt="Fara Logo"
                className="w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </Link>
          </div>
          {/* Bottone hamburger a destra */}
          <div>
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Drawer (menu scorrevole) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Il menu scorrevole */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#1f5bbf] z-[110] shadow-lg"
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-white text-xl font-semibold">
                    Evento digitalizzazione Capri
                  </h2>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-white focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <ul className="flex flex-col gap-4">
                  <li>
                    <Link
                      href="/event"
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-lg font-medium hover:underline"
                    >
                      L'Evento
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service"
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-lg font-medium hover:underline"
                    >
                      Servizi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/communication"
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-lg font-medium hover:underline"
                    >
                      Comunicazioni
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/streaming"
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-lg font-medium hover:underline"
                    >
                      Streaming
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-lg font-medium hover:underline"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-lg font-medium hover:underline"
                    >
                      Contattaci
                    </Link>
                  </li>
                  <li className="pt-4 border-t border-white">
                    <Link
                      href="/login"
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-lg font-medium hover:underline"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/registers"
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-lg font-medium hover:underline"
                    >
                      Registrazione
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Overlay: cliccando si chiude il menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[105]"
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
