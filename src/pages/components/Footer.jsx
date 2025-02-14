import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 text-white bg-gradient-to-r from-[#002d64] to-[#001f3f]">
      <div className="container mx-auto px-5">
        {/* Sezione principale con quattro colonne */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Informazioni di Contatto */}
          <div className="md:w-1/4">
            <h2 className="text-2xl font-bold tracking-wide mb-4">
              Capri | Digitalizzazione della Giustizia
            </h2>
            <hr className="border-gray-400 mb-6 w-40" />
            <p className="mb-2">Via Sella Orta 2, Capri</p>
            <p className="mb-2">
              Telefono:{" "}
              <a
                href="tel:+3906852641"
                className="hover:underline hover:text-gray-300 transition-colors duration-300"
              >
                +39 392578
              </a>
            </p>
            <p className="mb-2">
              PEC:{" "}
              <a
                href="mailto:protocollo@digitalizzazionecapri.it"
                className="hover:underline hover:text-gray-300 transition-colors duration-300"
              >
                protocollo@digitalizzazionecapri.it
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:eventodigitalizzazionecapri@gmail.com"
                className="hover:underline hover:text-gray-300 transition-colors duration-300"
              >
                eventodigitalizzazionecapri@gmail.com
              </a>
            </p>
          </div>

          {/* Link Utili */}
          <div className="md:w-1/4 text-right">
            <h2 className="text-2xl font-bold tracking-wide mb-4">LINK UTILI</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="trasparenza"
                  className="hover:underline hover:text-gray-300 transition-colors duration-300"
                >
                  Amministrazione trasparente
                </a>
              </li>
              <li>
                <a
                  href="domande"
                  className="hover:underline hover:text-gray-300 transition-colors duration-300"
                >
                  Domande frequenti
                </a>
              </li>
              <li>
                <a
                  href="legali"
                  className="hover:underline hover:text-gray-300 transition-colors duration-300"
                >
                  Note Legali
                </a>
              </li>
            </ul>
          </div>

          {/* Siti Tematici */}
          <div className="md:w-1/4 text-right">
            <h2 className="text-2xl font-bold tracking-wide mb-4">SITI TEMATICI</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.giustizia.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-gray-300 transition-colors duration-300"
                >
                  Ministero della Giustizia
                </a>
              </li>
              <li>
                <a
                  href="https://www.scuolamagistratura.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-gray-300 transition-colors duration-300"
                >
                  Scuola Superiore Della Magistratura
                </a>
              </li>
              <li>
                <a
                  href="https://www.cortedicassazione.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-gray-300 transition-colors duration-300"
                >
                  Corte Suprema di Cassazione
                </a>
              </li>
              <li>
                <a
                  href="https://www.agid.gov.it/it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-gray-300 transition-colors duration-300"
                >
                  Agenzia per l'Italia Digitale
                </a>
              </li>
            </ul>
          </div>

          {/* Sito a cura di */}
          <div className="md:w-1/4 text-right">
            <h2 className="text-2xl font-bold tracking-wide mb-4">Sito a cura di:</h2>
            <ul className="space-y-3">
              <li>
                <span className="hover:underline hover:text-gray-300 transition-colors duration-300">
                  Cons. Antonella Ciriello
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-gray-300 transition-colors duration-300">
                  Dott. Ivana Petrone
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-gray-300 transition-colors duration-300">
                  Ing. Francesco Barbato
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sezione inferiore: Copyright e Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-gray-500 pt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Capri | Digitalizzazione della Giustizia. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:underline hover:text-gray-300 transition-transform duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:underline hover:text-gray-300 transition-transform duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:underline hover:text-gray-300 transition-transform duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="#"
              className="hover:underline hover:text-gray-300 transition-transform duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="hover:underline hover:text-gray-300 transition-transform duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
