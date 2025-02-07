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

  return (
    <>
      <Head>
        <title>Sezione Streaming e Materiali</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Breadcrumb */}
    
      <div className="container">
        {/* Colonna Indice */}
        <div className="colonna-indice">
          <h2 className="indice-titolo">INDICE DELLA PAGINA</h2>
          <ul className="indice-lista">
            <li>
              <a
                href="#registrazioni2024"
                onClick={(e) => handleSectionClick("registrazioni2024", e)}
                className={selectedSection === "registrazioni2024" ? "active" : ""}
              >
                Registrazioni 2024
              </a>
            </li>
            <li>
              <a
                href="#registrazioni2023"
                onClick={(e) => handleSectionClick("registrazioni2023", e)}
                className={selectedSection === "registrazioni2023" ? "active" : ""}
              >
                Registrazioni 2023
              </a>
            </li>
            <li>
              <a
                href="#interventiVideo"
                onClick={(e) => handleSectionClick("interventiVideo", e)}
                className={selectedSection === "interventiVideo" ? "active" : ""}
              >
                Interventi Video Registrati
              </a>
            </li>
            <li>
              <a
                href="#materiali"
                onClick={(e) => handleSectionClick("materiali", e)}
                className={selectedSection === "materiali" ? "active" : ""}
              >
                Materiali
              </a>
            </li>
            <li>
              <a
                href="#locandine"
                onClick={(e) => handleSectionClick("locandine", e)}
                className={selectedSection === "locandine" ? "active" : ""}
              >
                Locandine
              </a>
            </li>
            <li>
              <a
                href="#criteri"
                onClick={(e) => handleSectionClick("criteri", e)}
                className={selectedSection === "criteri" ? "active" : ""}
              >
                Criteri Redazionali
              </a>
            </li>
          </ul>
        </div>

        {/* Colonna Contenuto */}
        <div className="colonna-contenuto">
          {/* Titolo e descrizione sempre visibili */}
          <h1 className="font-light">Sezione Streaming e Materiali</h1>
          <p>
            In questa sezione troverai tutti i collegamenti ai webinar, ai video registrati e ai materiali dell'evento. Potrai accedere alle registrazioni delle edizioni passate, scaricare locandine e consultare documenti utili per la tua partecipazione.
          </p>

          {selectedSection === "registrazioni2024" && (
            <section id="registrazioni2024" className="fade-in">
              <h2>Registrazioni 2024</h2>
              <p>Sono disponibili le video registrazioni dei vari momenti del convegno</p>
              <ul>
                <li>
                  <a
                    href="https://youtu.be/R__gHo6SqWs?si=bMK1oWnBYy6d1wK-"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <h2>Registrazioni 2023</h2>
              <p>Ecco le registrazioni degli eventi del 2023:</p>
              <ul>
                <li>
                  <a
                    href="https://youtu.be/g2Ebj1B1GD8?si=lUCLFJdGWYvsuFfJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Capri 13 ottobre 2023 - Sala Pollio
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/qa89hs8aRHI?si=CJchAU5onjgKXnYX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Capri 14 ottobre 2023 - Certosa plenaria
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/RsaW7YqeaYk?si=Jhb2DqSsb0ZFj3A3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Capri 14 ottobre 2023 - Gruppo civile
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/jLwu33aPEyc?si=y92Zf42gPtzZ5UII"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Capri 14 ottobre 2023 - Gruppo penale
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/qCvOuyjFiLE?si=XcsdSQp7HG4vyM8-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Capri 14 ottobre 2023 - Gruppo Giustizia Tributaria
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/ZxIpP4vX-VI?si=3DKxuEIzCU0fFCDv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Capri 14 ottobre 2023 - Gruppo intermagistratura
                  </a>
                </li>
              </ul>
            </section>
          )}

          {selectedSection === "interventiVideo" && (
            <section id="interventiVideo" className="fade-in">
              <h2>Interventi Video Registrati</h2>
              <p>Ecco i video degli interventi registrati durante l'evento:</p>
              <ul>
                <li>
                  <a
                    href="https://youtu.be/1Ac-ynp7QEs"
                    target="_blank"
                    rel="noopener noreferrer"
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
              <h2>Materiali</h2>
              <p>
                Una volta ricevuti i materiali didattici da parte dei Docenti, verranno caricati in questa sezione.
              </p>
            </section>
          )}

          {selectedSection === "locandine" && (
            <section id="locandine" className="fade-in">
              <h2>Locandine</h2>
              <p>Qui puoi scaricare le locandine degli eventi:</p>
              <ul>
                <li>
                  <a href="/4.pdf" target="_blank" rel="noopener noreferrer">
                    Locandina del 4 Ottobre 2024
                  </a>
                </li>
                <li>
                  <a href="/5.pdf" target="_blank" rel="noopener noreferrer">
                    Locandina del 5 Ottobre 2024
                  </a>
                </li>
              </ul>
            </section>
          )}

          {selectedSection === "criteri" && (
            <section id="criteri" className="fade-in">
              <h2>Criteri Redazionali</h2>
              <p>
                Riferimento per la pubblicazione: si utilizzano i criteri redazionali della Scuola Superiore della Magistratura, consultabili tramite questo 
                <a href="/criteri.pdf" target="_blank" rel="noopener noreferrer"> link</a>.
              </p>
            </section>
          )}
        </div>
      </div>

      <style jsx>{`
        /* CSS Reset per eliminare margini, padding e bordi predefiniti */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Animazione fade in */
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

        /* Stili di base */
        .container {
          display: flex;
          flex-direction: row;
          margin-top: 30px;
          font-family: 'Titillium Web', sans-serif;
          background-color: #fff;
          color: #000;
          padding: 0 20px;
        }

        .colonna-indice {
          width: 20%;
          padding: 0 20px 0 10px;
          border-right: 1px solid #ccc;
          margin-right: 20px;
        }

        .indice-titolo {
          font-size: 22px;
          font-weight: 600;
          color: rgb(0, 102, 204);
        }

        .indice-lista {
          list-style-type: none;
          padding: 0;
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .indice-lista li {
          margin-bottom: 0;
        }

        .indice-lista a {
          font-weight: 600;
          font-size: 20px;
          text-decoration: none;
          cursor: pointer;
          color: #555;
          transition: all 0.3s ease;
        }
        .indice-lista a.active {
          color: rgb(0, 102, 204);
          text-decoration: underline;
        }

        .colonna-contenuto {
          width: 80%;
          padding-left: 20px;
          margin-bottom: 40px;
        }

        h1 {
          font-size: 44px;
          /* Modifica il font-weight a 300 per applicare la classe font-light */
          font-weight: 300;
          color: rgb(26, 26, 26);
          margin-bottom: 20px;
          text-align: left;
        }

        h2 {
          font-size: 26px;
          font-weight: 600;
          color: rgb(26, 26, 26);
          margin-bottom: 10px;
          text-align: left;
        }

        p {
          font-size: 20px;
          font-weight: 300;
          color: rgb(47, 71, 94);
          line-height: 30px;
          margin-bottom: 20px;
          text-align: left;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          margin-bottom: 15px;
        }

        a {
          color: rgb(0, 102, 204);
          font-weight: 600;
          font-size: 20px;
          text-decoration: none;
        }

        /* Media query per tablet e dispositivi mobili */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            padding: 0 10px;
          }

          .colonna-indice {
            width: 100%;
            padding: 10px 20px;
            margin-right: 0;
            border-right: none;
            border-bottom: 1px solid #ccc;
          }

          .indice-lista {
            display: block;
          }

          .colonna-contenuto {
            width: 100%;
            padding: 10px 0;
          }

          h1 {
            font-size: 36px;
          }

          h2 {
            font-size: 22px;
          }

          p,
          a {
            font-size: 18px;
          }

          ul {
            padding-left: 10px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 32px;
          }

          h2 {
            font-size: 20px;
          }

          p,
          a {
            font-size: 16px;
          }

          ul {
            padding-left: 5px;
          }

          .colonna-indice {
            padding-left: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default SezioneStreamingMateriali;
