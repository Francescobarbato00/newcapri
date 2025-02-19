import React, { useEffect, useState } from "react";

const ArticlePublicationModal = ({ onClose }) => {
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    // Blocca lo scroll del body e dell'html
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-blue-900 bg-opacity-75 flex justify-center items-center z-[9999]">
      <div className="bg-white w-[90%] h-[90%] flex flex-col shadow-lg border border-gray-300 animate-fadeIn">
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}</style>

        {/* Header */}
        <div className="p-6 bg-white sticky top-0 z-10 flex justify-between items-center shadow">
          <h2 className="text-[56px] leading-[64px] font-normal">
            Pubblica Articolo
          </h2>
          <button
            onClick={onClose}
            className="text-blue-600 uppercase font-bold hover:text-blue-800 text-xl"
          >
            CHIUDI
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          <form>
            {/* Autore */}
            <div className="mb-8">
              <label className="block text-xl text-gray-700 mb-2">Autore</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Inserisci il tuo nome"
                className="w-full border border-gray-300 p-3"
              />
            </div>

            {/* Categoria */}
            <div className="mb-8">
              <label className="block text-xl text-gray-700 mb-2">Categoria</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Inserisci la categoria"
                className="w-full border border-gray-300 p-3"
              />
            </div>

            {/* Titolo */}
            <div className="mb-8">
              <label className="block text-xl text-gray-700 mb-2">Titolo</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Inserisci il titolo dell'articolo"
                className="w-full border border-gray-300 p-3"
              />
            </div>

            {/* Testo */}
            <div className="mb-8">
              <label className="block text-xl text-gray-700 mb-2">Testo</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Scrivi il contenuto dell'articolo"
                rows={8}
                className="w-full border border-gray-300 p-3"
              />
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 bg-white sticky bottom-0 z-10 flex flex-col sm:flex-row justify-between items-center shadow">
          <button
            type="submit"
            className="mt-4 sm:mt-0 text-blue-600 underline font-bold"
            // Inserisci qui la logica per la pubblicazione dell'articolo
          >
            PUBBLICA ARTICOLO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePublicationModal;
