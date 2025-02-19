import React, { useState } from "react";

const Archive = () => {
  // Dati degli eventi divisi per anno, con un campo "pdfLink" per ogni evento
  const eventsData = {
    "2023": [
      {
        date: "VENERDI 13 OTTOBRE 2023",
        title: "Questioni di diritto e processo del lavoro",
        description:
          `"Dedicato al diritto del lavoro e della previdenza sociale. Webinar della Scuola Superiore della Magistratura"`,
        location: "Capri, 13 ottobre 2023 | Sala comunale Pollio",
        timings: [
          { time: "14:55", detail: "Questioni di diritto processuale del lavoro" },
          { time: "16:20", detail: "Questioni di diritto del lavoro" },
        ],
        pdfLink: "/13ott23.pdf", // Link alla locandina
      },
      {
        date: "DOMENICA 14 OTTOBRE 2023",
        title: "La digitalizzazione della giustizia tra presente e futuro",
        description:
          `"Giornata di studi - Webinar della Scuola Superiore della Magistratura"`,
        location: "Capri, 14 ottobre 2023 | Certosa di San Giacomo",
        timings: [
          { time: "08:40", detail: "Saluti di benvenuto" },
          { time: "10:00", detail: "Primo focus: Diritto e processo civile e innovazione" },
        ],
        pdfLink: "/14ott23.pdf", // Link alla locandina
      },
    ],
    "2022": [
      {
        date: "SABATO 8 OTTOBRE 2022",
        title: "Evento di studi su giustizia e innovazione",
        description:
          `"Organizzando la giustizia: Le riforme del diritto e del processo al passo dell’innovazione tecnologica"`,
        location: "Capri, 8 ottobre 2022 | Certosa di San Giacomo",
        timings: [
          { time: "08:45", detail: "Saluti e introduzione" },
          { time: "09:00", detail: "Focus riforma e innovazione" },
        ],
        pdfLink: "/8ott22.pdf", // Link alla locandina
      },
      {
        date: "VENERDI 7 OTTOBRE 2022",
        title: "Evento Lavoro e Previdenza Sociale",
        description:
          `"Causalità e danno nel 2087 c.c. e discussioni sul diritto del lavoro"`,
        location: "Capri, 7 ottobre 2022 | Sala Comunale",
        timings: [
          { time: "14:45", detail: "Sessione Lavoro" },
          { time: "16:15", detail: "Sessione Previdenza" },
        ],
        pdfLink: "/7ott22.pdf", // Link alla locandina
      },
    ],
  };

  // Estraiamo gli anni (tab) e li ordiniamo dal più recente
  const years = Object.keys(eventsData).sort((a, b) => b - a);
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-5">
        {/* Titolo principale */}
        <h2 className="text-4xl font-normal text-gray-800 mb-6">
          Archivio Eventi
        </h2>

        {/* Tabs per gli anni */}
        <div className="overflow-x-auto pb-2">
          <div className="flex space-x-6 border-b border-gray-300 mb-6">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`whitespace-nowrap text-[20px] font-medium pb-2 transition-colors duration-300 ${
                  activeYear === year
                    ? "text-black sm:text-blue-700 border-b-2 border-blue-700"
                    : "text-black sm:text-blue-500 hover:text-blue-700"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Lista degli eventi per l'anno attivo */}
        <div key={activeYear} className="animate-fadeIn space-y-8">
          {eventsData[activeYear]?.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300"
            >
              <p className="text-[16px] font-medium text-gray-700 mb-2">
                <strong>{event.date}</strong>
              </p>
              <p className="text-2xl font-bold text-gray-800 mb-2">
                {event.title}
              </p>
              <p className="text-[18px] text-gray-700 mb-4">
                {event.description}
              </p>
              <p className="text-[18px] text-gray-700 mb-2">
                {event.location}
              </p>
              <ul className="text-[16px] text-gray-700 space-y-1">
                {event.timings.map((timing, i) => (
                  <li key={i}>
                    <strong>{timing.time}</strong>: {timing.detail}
                  </li>
                ))}
              </ul>

              {/* Link alla locandina (se presente) */}
              {event.pdfLink && (
                <div className="mt-4">
                  <a
                    href={event.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 underline inline-flex items-center hover:text-blue-600"
                  >
                    LEGGI LA LOCANDINA -&gt;
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archive;
