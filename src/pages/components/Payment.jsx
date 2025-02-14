import React from 'react';
import Head from 'next/head';

const Payment = () => {
  const iban = "ITXXXXXXXXXXXXXXXX"; // Esempio di IBAN fisso

  return (
    <>
      <Head>
        <title>Pagamento Cena - Evento Digitale</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-white text-black font-sans py-10">
        <div className="container mx-auto px-5">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-500">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Servizi</span>
          </div>

          {/* Header: Titolo e Descrizione */}
          <div className="flex flex-col md:flex-row items-start mb-10">
            {/* Titolo */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h1 className="text-[56px] leading-[64px] font-normal text-black text-left">
                Pagamento Cena Evento
              </h1>
            </div>
            {/* Descrizione */}
            <div className="w-full md:w-2/3 md:pl-10">
              <p className="text-[18px] sm:text-[20px] text-gray-600 mb-4 leading-relaxed">
                In questa sezione, a breve, sarà possibile effettuare il pagamento per partecipare alla cena del nostro evento presso i ristoranti. Il sistema di pagamento verrà attivato non appena le prenotazioni saranno confermate.
              </p>
            </div>
          </div>

          {/* Lista degli Articoli (Box) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-6 text-center transition-transform hover:-translate-y-1 duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Cena Evento
                </h2>
                <p className="text-[18px] font-light text-gray-700 mb-4">
                  Cena prefissata al ristorante per l'evento previsto per il prossimo anno.
                </p>
                <p className="text-[18px] font-semibold text-blue-600 mb-6">
                  Prezzo: prossimamente disponibile
                </p>
                <a 
                  href={`mailto:info@example.com?subject=Pagamento Cena&body=Ecco i dettagli del pagamento:\n\nIBAN: ${iban}\nImporto: 50€\n\nGrazie per aver partecipato all'evento!`}
                  className="inline-block px-5 py-3 bg-blue-600 text-white font-semibold rounded-md transition-colors duration-300 hover:bg-blue-700"
                >
                  Paga ora
                </a>
              </div>
            ))}
          </div>

          {/* Sezione Informazioni sul Pagamento */}
          <div className="mt-16 text-center">
            <h3 className="text-[56px] leading-[64px] font-normal text-black mb-6">
              Istruzioni per il pagamento
            </h3>
            <p className="text-[18px] sm:text-[20px] font-light text-gray-600 mb-4 leading-relaxed">
              Effettua il pagamento tramite bonifico bancario al seguente IBAN:
            </p>
            <p className="text-2xl font-semibold text-blue-600 break-words mb-4">
              {iban}
            </p>
            <p className="text-[18px] sm:text-[20px] font-light text-gray-600 leading-relaxed">
              Indica nella causale: <strong>Pagamento Cena Evento</strong> e specifica il nome dei partecipanti. Grazie per aver partecipato!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
