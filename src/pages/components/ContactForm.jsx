import React, { useState } from 'react';
import Head from 'next/head';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contatto',
          formData: {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        }),
      });

      if (response.ok) {
        setStatus('Messaggio inviato con successo!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Errore durante l\'invio del messaggio.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Errore durante l\'invio del messaggio.');
    }
  };

  return (
    <>
      <Head>
        <title>Contattaci - Evento Digitale</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Uso dello stesso wrapper del TopHeader: container mx-auto px-4 */}
      <section className="bg-white py-10 fade-in">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="text-sm mb-6 text-gray-500">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Contattaci</span>
          </div>

          {/* Titolo principale */}
          <div className="mb-10">
            <h1
              className="text-[56px] leading-[64px] font-light text-gray-900 text-left"
              style={{ fontFamily: "'Titillium Web', sans-serif" }}
            >
              Contattaci
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Colonna Informazioni */}
            <div className="space-y-6">
              <div>
                <h2 className="text-[18px] sm:text-[20px] text-blue-500 font-bold uppercase mb-1">
                  Sedi Didattiche
                </h2>
                <p className="text-[18px] sm:text-[20px] text-gray-700">
                  Capri, Sala Pollio
                </p>
                <p className="text-[18px] sm:text-[20px] text-gray-700">
                  Capri, Certosa di San Giacomo
                </p>
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] text-blue-500 font-bold uppercase mb-1">
                  Contatti
                </h2>
                <p className="text-[18px] sm:text-[20px] text-gray-700">
                  Tel: <a href="tel:+39xxxxxxxxxx" className="text-blue-500 hover:underline">+39 xxx xxx xxxx</a>
                </p>
                <p className="text-[18px] sm:text-[20px] text-gray-700">
                  E-mail: <a href="mailto:eventodigitalizzazionecapri@gmail.com" className="text-blue-500 hover:underline">eventodigitalizzazionecapri@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Colonna Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[18px] text-gray-700">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[18px] text-gray-900"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[18px] text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[18px] text-gray-900"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[18px] text-gray-700">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full border border-gray-300 p-3 mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[18px] text-gray-900"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    className="h-4 w-4 mt-1 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-[18px] text-gray-700">
                    Dichiaro di aver letto e compreso la{" "}
                    <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300 text-[18px]"
                  >
                    INVIA
                  </button>
                </div>
              </form>
              {status && <p className="mt-4 text-blue-500 text-[18px]">{status}</p>}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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
      `}</style>
    </>
  );
}
