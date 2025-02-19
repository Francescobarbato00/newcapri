import React, { useState } from "react";
import ArticlePublicationModal from "./ArticlePublicationModal";

export default function PubblicaArticolo() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Sezione blu */}
      <section className="bg-[#003366] text-white">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start">
          {/* Colonna sinistra: Titolo */}
          <div className="md:w-1/2">
            <h2 className="font-normal text-[56px] leading-[64px]">
              Vuoi pubblicare
              <br />
              un articolo?
            </h2>
          </div>

          {/* Colonna destra: Testo + Bottone */}
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <p className="font-normal text-[18px] leading-[28px] mb-6">
              Per pubblicare un articolo basterà contattarci premendo il bottone e compilare il form.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="text-white underline font-normal text-[18px] leading-[28px] hover:text-gray-200 transition-colors duration-300"
            >
              APPROFONDISCI &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Spazio bianco in fondo */}
      <div className="bg-white h-12" />

      {/* Modal per la pubblicazione dell'articolo */}
      {modalOpen && <ArticlePublicationModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
