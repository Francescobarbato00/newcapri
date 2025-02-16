import React, { useState } from 'react';

export default function Events() {
  // Stato per il tab attivo
  const [activeTab, setActiveTab] = useState('Definisce strategie');

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-5">
        {/* Breadcrumb visibile solo da mobile */}
        <div className="block sm:hidden mb-6 text-center">
          <nav className="text-sm text-gray-500 mb-2">
            Home / Streaming
          </nav>
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            Indice della pagina
          </h3>
          <p className="text-gray-700 mb-2">
            Scopri tutte le comunicazioni...
          </p>
          <button className="px-4 py-2 bg-blue-700 text-white rounded">
            Bottone
          </button>
        </div>

        {/* Titolo principale: centrato su mobile, allineato a sinistra da tablet in su */}
        <h2 className="text-4xl font-normal text-gray-800 mb-8 text-center sm:text-left">
          Programmazione dell'Evento
        </h2>

        {/* Tabs */}
        <div className="flex justify-around border-b border-gray-300 mb-6">
          <button
            className={`flex-1 text-center py-2 transition-colors duration-300 ${
              activeTab === 'Definisce strategie'
                ? 'text-blue-700 font-bold text-[24px] leading-[40px] border-b-2 border-blue-700'
                : 'text-blue-500 font-normal text-[24px] leading-[40px]'
            }`}
            onClick={() => setActiveTab('Definisce strategie')}
          >
            Primo Giorno
          </button>
          <button
            className={`flex-1 text-center py-2 transition-colors duration-300 ${
              activeTab === 'Promuove competenze digitali'
                ? 'text-blue-700 font-bold text-[24px] leading-[40px] border-b-2 border-blue-700'
                : 'text-blue-500 font-normal text-[24px] leading-[40px]'
            }`}
            onClick={() => setActiveTab('Promuove competenze digitali')}
          >
            Secondo Giorno
          </button>
          <button
            className={`flex-1 text-center py-2 transition-colors duration-300 ${
              activeTab === 'Monitora e vigila'
                ? 'text-blue-700 font-bold text-[24px] leading-[40px] border-b-2 border-blue-700'
                : 'text-blue-500 font-normal text-[24px] leading-[40px]'
            }`}
            onClick={() => setActiveTab('Monitora e vigila')}
          >
            Eventi Ludici
          </button>
        </div>

        {/* Contenuto dinamico con effetto fade in */}
        <div key={activeTab} className="animate-fadeIn text-gray-700 mb-8 text-sm sm:text-lg">
          {activeTab === 'Definisce strategie' && (
            <div>
              <p className="mb-4">
                <strong>VENERDI 4 OTTOBRE</strong>
                <br />
                Evento Lavoro
                <br />
                "Questioni di diritto e processo del lavoro, nell’era della rivoluzione tecnologica"
                <br />
                Capri Sala Pollio - 4 ottobre 2024
                <br /><br />
                <strong>14:30</strong>
                <br />
                Inizio dei lavori
                <br />
                Brevi interventi di:
                <br />
                - <span className="text-blue-700">Marco Biasi</span>, Prof. Associato di diritto del lavoro, Università degli Studi di Milano.
                <br />
                - <span className="text-blue-700">Marco Giacalone</span>, Professore di ricerca (PREC) – Università libera di Bruxelles (VUB).
                <br />
                - <span className="text-blue-700">Milena Doriano</span>, assistente di studio presso la Corte Costituzionale, "Il lavoro su piattaforma".
                <br />
                - <span className="text-blue-700">Valentina Ricchezza</span>, Giudice del lavoro, Tribunale di Santa Maria Capua Vetere, "Algoritmi e discriminazione di genere nel mondo del lavoro".
                <br />
                - <span className="text-blue-700">Luca Caputo</span>, Giudice della sezione lavoro, Tribunale di Trani.
                <br />
                - <span className="text-blue-700">Silvia Burelli</span>, Consigliere della Corte di Appello di Venezia.
                <br />
                - <span className="text-blue-700">Paola Marino</span>, Giudice della sezione lavoro, Tribunale di Palermo.
                <br />
                - <span className="text-blue-700">Carmen di Carluccio</span>, ricercatrice, Università Vanvitelli.
                <br />
                - <span className="text-blue-700">Mario Quaranta</span>, Avv. Foro di Napoli.
                <br />
                - <span className="text-blue-700">Chiara Cucinella</span>, Giudice del lavoro, Tribunale di Napoli Nord.
                <br />
                - <span className="text-blue-700">Federica Porcelli</span>, Giudice del Tribunale.
                <br />
                - <span className="text-blue-700">Maria Gallo</span>, Presidente della Sezione Lavoro, Tribunale di Napoli.
                <br /><br />
                Coordina <span className="text-blue-700">Pietro Curzio</span>, Presidente Emerito della Corte di Cassazione.
                <br /><br />
                <strong>17:00</strong>
                <br />
                Tavola rotonda conclusiva: L’impatto della rivoluzione tecnologica sul diritto e processo del lavoro.
                <br />
                Intervengono:
                <br />
                - <span className="text-blue-700">Giovanni Amoroso</span>, Giudice della Corte Costituzionale.
                <br />
                - <span className="text-blue-700">Raffaele De Luca Tamajo</span>, Prof. Avv. Emerito di diritto del lavoro, Università di Napoli Federico II.
                <br />
                - <span className="text-blue-700">Lorenzo Zoppoli</span>, Ordinario di diritto del lavoro, Università di Napoli Federico II.
                <br /><br />
                <strong>17:50</strong>
                <br />
                Chiusura dei lavori
              </p>
            </div>
          )}
          {activeTab === 'Promuove competenze digitali' && (
            <div>
              <p className="mb-4">
                <strong>SABATO 5 OTTOBRE</strong>
                <br />
                Evento Digitalizzazione
                <br />
                "La Giustizia moderna alla luce dei Regolamenti adottati dall’UE nel Decennio Digitale"
                <br />
                Certosa di San Giacomo - 5 ottobre 2024
                <br /><br />
                <strong>08:45</strong>
                <br />
                Accoglienza in Certosa di San Giacomo
                <br />
                Benvenuto da parte delle autorità locali, civili e giudiziarie:
                <br />
                - <span className="text-blue-700">Pierfrancesco Talamo</span>: Direttore Certosa
                <br />
                - <span className="text-blue-700">Paolo Falco</span>: Sindaco di Capri
                <br />
                - <span className="text-blue-700">Maria Rosaria Covelli</span>: Presidente della Corte di Appello di Napoli
                <br />
                - <span className="text-blue-700">Antonio Gialanella</span>, Procuratore Generale ff. della Corte di Appello di Napoli
                <br /><br />
                <strong>09:00</strong>
                <br />
                Saluti introduttivi dei promotori:
                <br />
                - <span className="text-blue-700">Margherita Cassano</span>, Prima Presidente della Corte di Cassazione.
                <br />
                - <span className="text-blue-700">Luigi Maruotti</span>, Presidente del Consiglio di Stato.
                <br />
                - <span className="text-blue-700">Carolina Lussana</span>, Presidente del Consiglio di Presidenza della Giustizia Tributaria.
                <br />
                - <span className="text-blue-700">Francesco Greco</span>, Presidente del Consiglio Nazionale Forense (CNF).
                <br />
                - <span className="text-blue-700">Giulio Biino</span>, Presidente del Consiglio Nazionale del Notariato (CNN).
                <br /><br />
                <strong>09:45</strong>
                <br />
                Intervento del Sig. Ministro della Giustizia <span className="text-blue-700">Carlo Nordio</span>
                <br /><br />
                <strong>10:00</strong>
                <br />
                PRIMO FOCUS: "L'Identità e domicilio digitali, presupposti per ogni negozio, procedimento e processo digitali"
                <br />
                Interviste a:
                <br />
                - <span className="text-blue-700">Ferruccio Auletta</span>, Professore ordinario di diritto processuale civile, LUISS "Guido Carli" di Roma.
                <br />
                - <span className="text-blue-700">Vincenzo Gunnella</span>, Presidente del CdA di Notartel S.p.a.
                <br />
                - <span className="text-blue-700">Carolina Scarano</span>, Vice Presidente FIIF.
                <br />
                - <span className="text-blue-700">Antonino Mazzeo</span>, Professore emerito, Università di Napoli Federico II.
                <br />
                Keynote speech: <span className="text-blue-700">Antonella Ciriello</span>, Consigliere della Corte di Cassazione e Consulente del Ministro della Giustizia.
                <br /><br />
                <strong>10:50</strong>
                <br />
                SECONDO FOCUS: Stato della digitalizzazione della giustizia in Italia e in Europa
                <br />
                Interviste a:
                <br />
                - <span className="text-blue-700">Ettore Sala</span>, Capo Dipartimento DIT, Ministero della Giustizia.
                <br />
                - <span className="text-blue-700">Maria Vittoria Marchianò</span>, Presidente della Settima Commissione del CSM.
                <br />
                - <span className="text-blue-700">Brunella Bruno</span>, Consigliera di Stato.
                <br />
                - <span className="text-blue-700">Ines Marini</span>, Vice Presidente della Scuola Superiore della Magistratura.
                <br />
                - <span className="text-blue-700">Francesco Pizzuto</span>, Consigliere Nazionale Forense.
                <br />
                Keynote speech: <span className="text-blue-700">Ileana Fedele</span> e <span className="text-blue-700">Alessio Scarcella</span>, Consiglieri della Corte di Cassazione.
                <br /><br />
                <strong>12:00</strong>
                <br />
                TERZO FOCUS: L'intelligenza artificiale, un pericolo o una sfida per i diritti umani?
                <br />
                Interviste a cura di Raffaella Calandra a:
                <br />
                - <span className="text-blue-700">Raffaele Sabato</span>, Giudice della Corte Europea dei Diritti dell'Uomo.
                <br />
                - <span className="text-blue-700">Pasquale Stanzione</span>, Presidente del Garante per la protezione dei dati personali.
                <br />
                - <span className="text-blue-700">Francesca Quadri</span>, Capo Dipartimento affari giuridici e legislativi, Presidenza del Consiglio dei Ministri.
                <br />
                - <span className="text-blue-700">Bruno Frattasi</span>, Direttore Generale dell'Agenzia per la cybersicurezza nazionale.
                <br />
                - <span className="text-blue-700">Antonio Mura</span>, Capo Ufficio legislativo, Ministero della Giustizia.
                <br />
                Keynote speech: <span className="text-blue-700">Mario Nobile</span>, Direttore Generale dell'Agenzia per l'Italia Digitale.
                <br /><br />
                <strong>13:45</strong>
                <br />
                Light lunch nel Chiostro piccolo della Certosa.
                <br /><br />
                <strong>14:45</strong>
                <br />
                Divisione nei GRUPPI DI DISCUSSIONE:
                <br />
                Gruppo 1: L'innovazione e la digitalizzazione nel diritto e processo civile.
                <br />
                Gruppo 2: L'innovazione e la digitalizzazione del processo penale.
                <br />
                Gruppo 3: Processo Telematico ed Intelligenza Artificiale.
                <br />
                Gruppo 4: L'intelligenza artificiale.
                <br />
                Gruppo 5: Europe’s Digital Decade.
                <br />
                Gruppo 6: Interventi video registrati.
                <br /><br />
                <strong>17:30</strong>
                <br />
                Chiusura dei lavori.
              </p>
            </div>
          )}
          {activeTab === 'Monitora e vigila' && (
            <div>
              <p className="text-gray-700 mb-4">
                <strong>Passeggiata guidata (da prenotare)</strong>
                <br />
                <em>n.b. non è stato organizzato il percorso ad Anacapri per ragioni logistiche</em>
                <br />
                VISITA GRATUITA DEL BORGO DI CAPRI con il prof. <span className="text-blue-700">Renato Esposito</span>.
                <br />
                La visita inizierà alle ore 10:15 sotto il campanile con la storia della Piazza e del Borgo.
                <br />
                Proseguirà poi, alle 11:15, con la visita al Museo Archeologico della Certosa (INGRESSO GRATUITO).
                <br />
                Maggiori informazioni al link: L'Isola dei Cesari.
                <br /><br />
                <strong>Attività eventuali (dipendenti dal meteo)</strong>
                <br />
                <strong>Bagno e Pranzo:</strong> se il meteo lo permetterà, sarà organizzato un bagno al Lido Lo Smeraldo (Marina Grande, tel. 081 8375072).
                <br />
                Il pranzo potrà essere organizzato presso il ristorante Lo Smeraldo o allo Zaffiro (da confermare).
                <br />
                I partecipanti interessati sono pregati di contattare direttamente telefonando al lido o ai ristoranti (stessa gestione).
                <br /><br />
                <strong>Giro dell'isola:</strong> il giro in barca sarà confermato in base alle condizioni meteo. In caso di conferma, la partenza sarà dal Molo 1 del porto di Marina Grande con i motoscafisti capresi.
                <br /><br />
                Per ulteriori informazioni o dettagli, non esitate a contattarci a:{" "}
                <a
                  href="mailto:eventodigitalizzazionecapri@gmail.com"
                  className="hover:underline transition-colors"
                >
                  eventodigitalizzazionecapri@gmail.com
                </a>
                .
                <br /><br />
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
