import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-5">
        {/* Breadcrumb */}
        <div className="text-sm mb-4 text-gray-500">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>L'Evento</span>
        </div>

        {/* Titolo e descrizione */}
        <div className="flex flex-col md:flex-row items-start">
          {/* Colonna sinistra: Titolo */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="font-normal text-[56px] leading-[64px] text-black">
              L'Evento Annuale per la trasformazione Digitale della Giustizia
            </h1>
          </div>
          {/* Colonna destra: Descrizione */}
          <div className="w-full md:w-2/3 md:pl-10">
            <p className="text-[18px] sm:text-[20px] text-gray-600 mb-4 leading-relaxed">
              Dal 2013 un momento di confronto costruttivo con l’intervento di tutti gli interessati, a ogni livello,{" "}
              <strong>
                sulla digitalizzazione della giustizia, della pubblica amministrazione, dei rapporti commerciali.
              </strong>{" "}
              Prima limitato alla sola giustizia ordinaria è stato poi allargato a tutti i processi telematici, e in generale agli istituti del digitale trasversali tra pubblico e privato, con la recente apertura ad interventi di{" "}
              <strong>
                esperti delle istituzioni europee (Commissione Europea, European Judicial Training Network, Corte europea dei diritti dell’Uomo, Corte europea di giustizia).
              </strong>
            </p>
            <p className="text-[18px] sm:text-[20px] text-gray-600 mb-6 leading-relaxed">
              Gli Organizzatori dell'Evento possono essere contattati tramite mail:{" "}
              <a href="/contact" className="text-blue-500 hover:underline">
                in questa pagina
              </a>{" "}
              trovi i riferimenti.
            </p>
            <a
              href="/index"
              className="inline-flex items-center text-blue-600 font-semibold text-[18px] sm:text-[20px] hover:underline"
            >
              ISCRIVITI AL CONVEGNO
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
