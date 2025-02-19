import React, { useState } from "react";

const FAQ = () => {
  // Dati delle FAQ: domanda e risposta formale
  const faqData = [
    {
      question: "Come posso contattare gli organizzatori?",
      answer:
        "Per ulteriori informazioni o per eventuali richieste, La invitiamo a contattare gli organizzatori inviando una email a eventodigitalizzazionecapri@gmail.com. Saremo lieti di assisterLa.",
    },
    {
      question: "Quando si terrà l'evento?",
      answer:
        "Le date per l'edizione 25 sono ancora in fase di definizione; tuttavia, come da consuetudine, l'evento è previsto per il mese di Ottobre.",
    },
    {
      question: "Come mi iscrivo all'evento?",
      answer:
        "Per iscriversi, è sufficiente cliccare sul pulsante 'Iscriviti al convegno' presente nella homepage. L'iscrizione è immediata e, contestualmente, riceverà una email di conferma. La preghiamo di verificare anche la cartella spam.",
    },
    {
      question: "È previsto un costo per partecipare?",
      answer:
        "La partecipazione all'evento non comporta alcun costo. È tuttavia obbligatorio completare il modulo di iscrizione per ricevere tutte le informazioni necessarie.",
    },
    {
      question: "Come posso pubblicare un articolo nel blog?",
      answer:
        "Per pubblicare un articolo, La invitiamo a compilare il modulo di invio che trova in fondo ad ogni pagina del sito. I contenuti verranno valutati e, in caso di approvazione, pubblicati sul nostro blog.",
    },
  ];

  // Stato per tracciare la domanda attualmente aperta (null = nessuna aperta)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
          Domande Frequenti
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-xl font-medium text-blue-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-900 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 py-2 text-gray-700 border-t transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
