import React, { useState } from "react";

const Archive = () => {
  // Dati degli eventi divisi per anno
  const eventsData = {
    "2022": [
      {
        date: "VENERDI 4 OTTOBRE 2022",
        title: "Evento Lavoro 2022",
        description: `"Il diritto del lavoro nel mondo post-pandemia"`,
        location: "Capri Sala Pollio - 4 ottobre 2022",
        timings: [
          { time: "14:30", detail: "Inizio dei lavori" },
          { time: "17:00", detail: "Tavola rotonda conclusiva" },
          { time: "17:50", detail: "Chiusura dei lavori" },
        ],
      },
      {
        date: "SABATO 5 OTTOBRE 2022",
        title: "Evento Digitalizzazione 2022",
        description: `"Innovazione e giustizia: un binomio vincente"`,
        location: "Certosa di San Giacomo - 5 ottobre 2022",
        timings: [
          { time: "09:00", detail: "Saluti introduttivi" },
          { time: "10:00", detail: "Focus Innovazione" },
          { time: "11:00", detail: "Discussione Interattiva" },
          { time: "12:30", detail: "Conclusione" },
        ],
      },
    ],
    "2021": [
      {
        date: "SABATO 5 OTTOBRE 2021",
        title: "Evento Digitalizzazione 2021",
        description: `"Innovazione e giustizia: il futuro digitale"`,
        location: "Certosa di San Giacomo - 5 ottobre 2021",
        timings: [
          { time: "09:00", detail: "Saluti introduttivi" },
          { time: "10:00", detail: "Focus su Innovazione" },
          { time: "10:50", detail: "Discussione Interattiva" },
          { time: "12:00", detail: "Conclusione" },
        ],
      },
    ],
    "2020": [
      {
        date: "DOMENICA 3 OTTOBRE 2020",
        title: "Evento Innovazione 2020",
        description: `"Tecnologie emergenti e riforma giuridica"`,
        location: "Teatro di Capri - 3 ottobre 2020",
        timings: [
          { time: "15:00", detail: "Apertura" },
          { time: "16:30", detail: "Panel di discussione" },
          { time: "18:00", detail: "Chiusura" },
        ],
      },
    ],
    // Immagina qui altri anni...
  };

  // Estraiamo gli anni (tab) dall'oggetto eventsData e li ordiniamo dal più recente
  const years = Object.keys(eventsData).sort((a, b) => b - a);
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <section className="bg-gray-100 py-6 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Titolo con minore margine superiore per spostare il contenuto più su */}
        <h2 className="text-4xl font-normal text-gray-800 mb-6">
          Archivio Eventi
        </h2>

        {/* Container scrollabile orizzontalmente per i tab (in caso di molti anni) */}
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-6 border-b border-gray-300 mb-6">
            {years.map((year) => (
              <button
                key={year}
                className={`whitespace-nowrap text-lg font-semibold pb-2 transition-colors duration-300 ${
                  activeYear === year
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-blue-500 hover:text-blue-700"
                }`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Lista degli eventi per l'anno attivo */}
        <div className="space-y-8">
          {eventsData[activeYear]?.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300"
            >
              <p className="text-gray-700 mb-2">
                <strong>{event.date}</strong>
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-2">
                {event.title}
              </p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <p className="text-gray-700 mb-2">{event.location}</p>
              <ul className="text-gray-700 space-y-1">
                {event.timings.map((timing, i) => (
                  <li key={i}>
                    <strong>{timing.time}</strong>: {timing.detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archive;
