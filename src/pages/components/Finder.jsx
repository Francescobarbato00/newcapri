import React, { useState, useEffect } from 'react';

const Finder = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Blocca lo scroll del background quando il Finder è aperto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex justify-center items-center transition-opacity duration-500 ease-in-out">
      <div className="w-full max-w-3xl mx-auto px-4">
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
      </div>
    </div>
  );
};

export default Finder;
