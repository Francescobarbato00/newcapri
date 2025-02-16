import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const immagini = [
    { src: '6.jpg', alt: 'Immagine 1', didascalia: 'Certosa di San Giacomo' },
    { src: '2.jpg', alt: 'Immagine 2', didascalia: 'Sessione del 5/10/24' },
    { src: '1.jpg', alt: 'Immagine 3', didascalia: 'Plenaria nella Certosa' },
    { src: '5.jpg', alt: 'Immagine 4', didascalia: 'Sala Diefenbach' },
    { src: '4.jpg', alt: 'Immagine 5', didascalia: 'Museo archeologico di Capri - Quarto del Priore della Certosa di San Giacomo' },
    { src: '3.jpg', alt: 'Immagine 6', didascalia: 'Sala Pollio' },
  ];

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  // Blocca lo scroll del background quando una foto è aperta
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-5 space-y-8">
        {/* Header della sezione */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2">
            <h1 className="text-[56px] leading-[64px] font-light mb-4 text-left text-black">
              Galleria dell'Evento
            </h1>
            <p className="text-[18px] sm:text-[20px] mb-4 text-left text-black">
              Esplora la galleria e riscopri i momenti più significativi del nostro evento
            </p>
          </div>
        </div>

        {/* Griglia immagini */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {immagini.map((immagine, index) => (
            <div key={index} className="group">
              <div
                onClick={() => handleClick(immagine)}
                className="cursor-pointer block relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out lg:group-hover:scale-105"
              >
                <div className="relative pb-[100%] bg-gray-200">
                  <img
                    src={immagine.src}
                    alt={immagine.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-black md:text-gray-700 text-sm sm:text-base mt-1 text-center">
                {immagine.didascalia}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999] overflow-y-auto"
          onClick={handleClose}
        >
          <div
            className="relative max-w-full max-h-full flex flex-col items-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pulsante Chiudi */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition-colors duration-300"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[90vw] max-h-[70vh] object-contain"
            />
            <p className="text-white text-lg text-center mt-4">
              {selectedImage.didascalia}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
