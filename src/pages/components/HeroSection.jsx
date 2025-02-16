import { useState } from 'react';
import Head from 'next/head';
import SubscribeForm from './SubscribeForm'; // Assicurati che il percorso sia corretto

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  // Funzione per aprire la modale del form
  const handleSubscribe = () => {
    setShowForm(true);
  };

  // Funzione per chiudere il form, passata come prop a SubscribeForm
  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="relative min-h-screen flex flex-col justify-center items-center">
        {/* Video di sfondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/Capri4k2.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay blu */}
        <div className="absolute inset-0 bg-blue-900 opacity-70 z-10"></div>

        {/* Contenuto principale */}
        <div
          className="relative z-20 text-white flex flex-col justify-center items-center px-4 md:px-0 max-w-full sm:max-w-xl md:max-w-none"
          style={{ fontFamily: "'Titillium Web', sans-serif" }}
        >
          <h1
            className="text-3xl md:text-5xl font-light text-center mb-4 md:mb-16"
            style={{ fontWeight: 300 }}
          >
            L'Evento annuale sulla Digitalizzazione della Giustizia
          </h1>
          <h3
            className="text-2xl md:text-5xl font-light text-center mb-8 md:mb-16"
            style={{ fontWeight: 300 }}
          >
            Stay tuned for Capri 2025
          </h3>
          <button
            onClick={handleSubscribe}
            className="bg-white text-blue-900 font-bold py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300"
          >
            Iscriviti al convegno
          </button>
        </div>
      </section>

      {/* Renderizza il form se showForm è true */}
      {showForm && <SubscribeForm onClose={handleCloseForm} />}
    </>
  );
}
