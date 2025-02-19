import React, { useState, useEffect } from 'react';

const Finder = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  // Stato per gestire l'animazione di ingresso
  const [showFinder, setShowFinder] = useState(false);

  useEffect(() => {
    // Quando il componente si monta, avviamo l'animazione
    setShowFinder(true);

    // Blocca lo scroll del background quando il Finder è aperto
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className={`
        fixed inset-0 bg-white z-[9999] flex justify-center items-center
        transition-all duration-500 ease-in-out
        ${showFinder ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="w-full max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl md:text-7xl font-light text-black">
            Cerca nel sito
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-lg hover:text-gray-700 transition-colors duration-300"
          >
            Chiudi X
          </button>
        </div>

        {/* Campo di ricerca */}
        <div className="w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cerca..."
            className="w-full border border-gray-300 rounded-lg p-4 text-lg text-black focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => {}}
            className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Cerca
          </button>
        </div>

        {/* Ricerche popolari (solo riempimento) */}
        <div className="mt-8">
          <h3 className="text-xl mb-4 font-semibold text-gray-800">
            Ricerche popolari
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              Blog
            </span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              Articoli
            </span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              Documenti
            </span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              Pubblicazioni
            </span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              Eventi
            </span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              Comunicati
            </span>
            <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              Notizie
            </span>
            {/* Aggiungi altri placeholder a piacere */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;
