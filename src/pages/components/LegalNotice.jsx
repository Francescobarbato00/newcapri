import React from "react";

const LegalNotice = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-5">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center">
          Note Legali
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-8 text-gray-800 leading-relaxed">
          <p className="mb-6">
            Il presente sito web è di proprietà dell'Organizzazione dell'Evento{" "}
            <span className="font-semibold">Digitalizzazione Capri</span>. Tutti i contenuti presenti, inclusi testi, immagini, loghi e altri materiali, sono protetti dalla normativa sul diritto d'autore e sono di proprietà esclusiva o dei relativi licenziatari.
          </p>
          <p className="mb-6">
            Le informazioni fornite sul sito hanno esclusivamente scopo informativo e non costituiscono in alcun modo una consulenza legale. L'Organizzatore non si assume alcuna responsabilità per eventuali errori, omissioni o incongruenze presenti nei contenuti.
          </p>
          <p className="mb-6">
            L'uso del sito implica l'accettazione integrale delle presenti note legali. È severamente vietata la riproduzione, distribuzione o utilizzo dei contenuti senza il consenso scritto dell'Organizzatore dell'Evento.
          </p>
          <p className="mb-6">
            Per ulteriori informazioni o chiarimenti in merito alle note legali, La invitiamo a contattarci tramite il modulo di contatto presente sul sito.
          </p>
          <p className="text-sm text-gray-600">
            Data di aggiornamento: [19/02/25]
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;
