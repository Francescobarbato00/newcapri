import React, { useState } from 'react';
import Head from 'next/head';

const SezioneStreamingMateriali = () => {
  const [selectedSection, setSelectedSection] = useState("registrazioni2024");

  const handleSectionClick = (section, e) => {
    e.preventDefault();
    setSelectedSection(section);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Lista dei tab (le etichette possono essere capitalizzate in base alle preferenze)
  const tabs = [
    { id: "registrazioni2024", label: "Registrazioni 2024" },
    { id: "registrazioni2023", label: "Registrazioni 2023" },
    { id: "interventiVideo", label: "Interventi Video Registrati" },
    { id: "materiali", label: "Materiali" },
    { id: "locandine", label: "Locandine" },
    { id: "criteri", label: "Criteri Redazionali" },
  ];

  return (
    <>
      <Head>
        <title>Sezione Streaming e Materiali</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="bg-white py-16">
        <div className="container mx-auto px-5">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 text-gray-500">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Streaming</span>
          </div>

          {/* Layout a due colonne: Indice e Contenuto */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Colonna Indice */}
            <div className="md:col-span-1">
              <div className="sticky top-16 p-4">
                <h2 className="mb-4 text-[48px] leading-[56px] font-light text-black">
                  Indice della pagina
                </h2>
                <ul className="space-y-2">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <a
                        href={`#${tab.id}`}
                        onClick={(e) => handleSectionClick(tab.id, e)}
                        className={`block p-3 transition-colors duration-300 text-[20px] font-semibold rounded ${
                          selectedSection === tab.id
                            ? "bg-[#F0F6FC] text-[#01478E] border-l-4 border-[#01478E]"
                            : "text-[#01478E] hover:text-[#012E5E]"
                        }`}
                      >
                        {tab.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonna Contenuto */}
            <div className="md:col-span-3">
              {/* Titolo e descrizione principali */}
              <h1 className="text-[56px] leading-[64px] font-light text-black mb-6">
                Sezione Streaming e Materiali
              </h1>
              <p className="text-[18px] sm:text-[20px] text-gray-600 mb-8 leading-relaxed">
                In questa sezione troverai tutti i collegamenti ai webinar, ai video registrati e ai materiali dell'evento. Potrai accedere alle registrazioni delle edizioni passate, scaricare locandine e consultare documenti utili per la tua partecipazione.
              </p>

              {/* Contenuto in base al tab selezionato */}
              {selectedSection === "registrazioni2024" && (
                <section id="registrazioni2024" className="fade-in">
                  <h2 className="text-3xl font-light text-black mb-4">
                    Registrazioni 2024
                  </h2>
                  <p className="mb-4">
                    Sono disponibili le video registrazioni dei vari momenti del convegno
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://youtu.be/R__gHo6SqWs?si=bMK1oWnBYy6d1wK-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Questioni di diritto e processo del lavoro, <br />
                        nell’era della rivoluzione tecnologica <br />
                        Venerdì 4 ottobre 2024 - 14:30 - 18:00
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/0cz6gVI2fGg?si=zjzDeym889cWLCMY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        La Giustizia moderna alla luce dei <br />
                        Regolamenti adottati dall’UE nel Decennio Digitale <br />
                        Sabato 5 ottobre 2024 - 08:45 - 13:30
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/lZKnzcbWVeQ?si=nvJwV2bkO5JE0Hyh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        GRUPPO 1 <br /> L’innovazione e la digitalizzazione nel diritto e processo civile <br />
                        Sabato 5 ottobre 2024 - 14:45 - 17:30
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/FatAvW5d3j8?si=SshTReKxHJdiovLc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        GRUPPO 2 <br /> L’innovazione e la digitalizzazione del processo penale <br />
                        Sabato 5 ottobre 2024 - 14:45 - 17:30
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/UK3TUgqLmWk?si=Yy2knlfT9lG9Omzm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        GRUPPO 3 <br /> Processo Telematico ed Intelligenza Artificiale: Rischi e Opportunità per la Giustizia Tributaria <br />
                        Sabato 5 ottobre 2024 - 14:45 - 17:30
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/UILghXjQKEg?si=mD3_jCVpYHXCsj5T"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        GRUPPO 4 <br /> L'Intelligenza Artificiale <br />
                        Sabato 5 ottobre 2024 - 14:45 - 17:30
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/lErIN0WBtWU?si=ZFy5icJQaA9qF_nD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        GRUPPO 5 <br /> GRUPPO 5: Europe’s Digital Decade (La digitalizzazione in Europa) - Prima Parte <br />
                        Sabato 5 ottobre 2024 - 14:45 - 17:30
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/watch?v=aRnHtv1eSJM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        GRUPPO 5 <br /> GRUPPO 5: Europe’s Digital Decade (La digitalizzazione in Europa) - Seconda Parte <br />
                        Sabato 5 ottobre 2024 - 14:45 - 17:30
                      </a>
                    </li>
                  </ul>
                </section>
              )}

              {selectedSection === "registrazioni2023" && (
                <section id="registrazioni2023" className="fade-in">
                  <h2 className="text-3xl font-light text-black mb-4">
                    Registrazioni 2023
                  </h2>
                  <p className="mb-4">Ecco le registrazioni degli eventi del 2023:</p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://youtu.be/g2Ebj1B1GD8?si=lUCLFJdGWYvsuFfJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Capri 13 ottobre 2023 - Sala Pollio
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/qa89hs8aRHI?si=CJchAU5onjgKXnYX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Capri 14 ottobre 2023 - Certosa plenaria
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/RsaW7YqeaYk?si=Jhb2DqSsb0ZFj3A3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Capri 14 ottobre 2023 - Gruppo civile
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/jLwu33aPEyc?si=y92Zf42gPtzZ5UII"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Capri 14 ottobre 2023 - Gruppo penale
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/qCvOuyjFiLE?si=XcsdSQp7HG4vyM8-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Capri 14 ottobre 2023 - Gruppo Giustizia Tributaria
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/ZxIpP4vX-VI?si=3DKxuEIzCU0fFCDv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Capri 14 ottobre 2023 - Gruppo intermagistratura
                      </a>
                    </li>
                  </ul>
                </section>
              )}

              {selectedSection === "interventiVideo" && (
                <section id="interventiVideo" className="fade-in">
                  <h2 className="text-3xl font-light text-black mb-4">
                    Interventi Video Registrati
                  </h2>
                  <p className="mb-4">Ecco i video degli interventi registrati durante l'evento:</p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://youtu.be/1Ac-ynp7QEs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Presidente della Camera Avvocati Tributaristi di Napoli: <br />
                        "Intervento Capri" <br />
                        Relatore: Avv. Michele Di Fiore
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/J0bCufBj2BA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        "La Global Governance per l'informatica giudiziaria" <br />
                        Relatore: Presidente Claudio Castelli
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/3yFDBehX-dw?si=BVrK6uPRFl4q9jLA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        "Giudici: mente umana o meccanismo in difesa dell'uguaglianza?" <br />
                        Relatore: Giovanna De Minico, Prof. Diritto Costituzionale, Univ. Federico II Napoli <br /> e Legal chief del partenariato FAIR.
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtu.be/tMKqbFWjma4?si=WyHD69nknz56AfSy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        "Le videoregistrazioni del processo penale e il portale delle videoregistrazioni" <br />
                        Relatore: Dottoressa Fernanda Iannone
                      </a>
                    </li>
                  </ul>
                </section>
              )}

              {selectedSection === "materiali" && (
                <section id="materiali" className="fade-in">
                  <h2 className="text-3xl font-light text-black mb-4">Materiali</h2>
                  <p>
                    Una volta ricevuti i materiali didattici da parte dei Docenti, verranno caricati in questa sezione.
                  </p>
                </section>
              )}

              {selectedSection === "locandine" && (
                <section id="locandine" className="fade-in">
                  <h2 className="text-3xl font-light text-black mb-4">Locandine</h2>
                  <p>Qui puoi scaricare le locandine degli eventi:</p>
                  <ul className="space-y-2">
                    <li>
                      <a href="/4.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                        Locandina del 4 Ottobre 2024
                      </a>
                    </li>
                    <li>
                      <a href="/5.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                        Locandina del 5 Ottobre 2024
                      </a>
                    </li>
                  </ul>
                </section>
              )}

              {selectedSection === "criteri" && (
                <section id="criteri" className="fade-in">
                  <h2 className="text-3xl font-light text-black mb-4">Criteri Redazionali</h2>
                  <p>
                    Riferimento per la pubblicazione: si utilizzano i criteri redazionali della Scuola Superiore della Magistratura, consultabili tramite questo{" "}
                    <a href="/criteri.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                      link
                    </a>.
                  </p>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default SezioneStreamingMateriali;
