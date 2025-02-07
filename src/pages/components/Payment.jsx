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

      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          padding: '30px', 
          fontFamily: "'Titillium Web', Geneva, Tahoma, sans-serif", 
          backgroundColor: '#ffffff', 
          color: '#000000' 
        }}
      >
        <div style={{ width: '90%', maxWidth: '1200px', paddingLeft: '20px' }}>
          {/* Breadcrumb: allineato a sinistra */}
          <div 
            className="breadcrumb" 
            style={{ 
              margin: '40px 0 20px 0', 
              fontSize: '14px', 
              lineHeight: '20px', 
              fontWeight: 400, 
              color: 'rgb(107, 114, 128)' 
            }}
          >
            <a href="/" className="hover:underline" style={{ color: 'inherit' }}>Home</a>
            <span className="mx-2">/</span>
            <span>Servizi</span>
          </div>

          {/* Header: il titolo è a sinistra, la descrizione a destra */}
          <div className="flex flex-col md:flex-row items-start mb-8">
            {/* Titolo */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h1 
                className="text-3xl sm:text-4xl text-black font-light leading-snug"
                style={{ textAlign: 'left' }}
              >
                Pagamento Cena Evento
              </h1>
            </div>
            {/* Descrizione */}
            <div className="w-full md:w-2/3 md:pl-10">
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                In questa sezione, in futuro, sarà possibile effettuare il pagamento per partecipare alla cena del nostro evento presso i ristoranti. Il pagamento verrà attivato appena le prenotazioni saranno disponibili.
              </p>
            </div>
          </div>

          {/* Lista degli articoli */}
          <div className="articoli-container">
            {/* Articolo singolo */}
            <div className="articolo">
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                Cena Evento
              </h2>
              <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', marginBottom: '20px' }}>
                Cena prefissata al ristorante per l'evento previsto per il prossimo anno.
              </p>
              <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'rgb(0, 102, 204)', marginBottom: '30px' }}>
                Prezzo: prossimamente disponibile
              </p>
              {/* Pulsante Paga */}
              <a 
                href={`mailto:info@example.com?subject=Pagamento Cena&body=Ecco i dettagli del pagamento:\n\nIBAN: ${iban}\nImporto: 50€\n\nGrazie per aver partecipato all'evento!`}
                style={{
                  display: 'inline-block',
                  padding: '12px 20px',
                  backgroundColor: 'rgb(0, 102, 204)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(0, 92, 190)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(0, 102, 204)'}
              >
                Paga ora
              </a>
            </div>

            {/* Articolo singolo 2 */}
            <div className="articolo">
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                Cena Evento
              </h2>
              <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', marginBottom: '20px' }}>
                Cena prefissata al ristorante per l'evento previsto per il prossimo anno.
              </p>
              <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'rgb(0, 102, 204)', marginBottom: '30px' }}>
                Prezzo: prossimamente disponibile
              </p>
              {/* Pulsante Paga */}
              <a 
                href={`mailto:info@example.com?subject=Pagamento Cena&body=Ecco i dettagli del pagamento:\n\nIBAN: ${iban}\nImporto: 50€\n\nGrazie per aver partecipato all'evento!`}
                style={{
                  display: 'inline-block',
                  padding: '12px 20px',
                  backgroundColor: 'rgb(0, 102, 204)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(0, 92, 190)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(0, 102, 204)'}
              >
                Paga ora
              </a>
            </div>

            {/* Articolo singolo 3 */}
            <div className="articolo">
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '10px' }}>
                Cena Evento
              </h2>
              <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', marginBottom: '20px' }}>
                Cena prefissata al ristorante per l'evento previsto per il prossimo anno.
              </p>
              <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'rgb(0, 102, 204)', marginBottom: '30px' }}>
                Prezzo: prossimamente disponibile
              </p>
              {/* Pulsante Paga */}
              <a 
                href={`mailto:info@example.com?subject=Pagamento Cena&body=Ecco i dettagli del pagamento:\n\nIBAN: ${iban}\nImporto: 50€\n\nGrazie per aver partecipato all'evento!`}
                style={{
                  display: 'inline-block',
                  padding: '12px 20px',
                  backgroundColor: 'rgb(0, 102, 204)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(0, 92, 190)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(0, 102, 204)'}
              >
                Paga ora
              </a>
            </div>
          </div>

          {/* Sezione informazioni sul pagamento */}
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'rgb(26, 26, 26)', marginBottom: '20px' }}>
              Istruzioni per il pagamento
            </h3>
            <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '1.5', marginBottom: '20px' }}>
              Effettua il pagamento tramite bonifico bancario al seguente IBAN:
            </p>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: 'rgb(0, 102, 204)', wordWrap: 'break-word' }}>
              {iban}
            </p>
            <p style={{ fontSize: '1rem', fontWeight: '300', color: 'rgb(47, 71, 94)', lineHeight: '1.5', marginTop: '20px' }}>
              Indica nella causale: <strong>Pagamento Cena Evento</strong> e specifica il nome dei partecipanti. Grazie per aver partecipato!
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .articoli-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        }

        .articolo {
          width: calc(33.33% - 20px);
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          p {
            font-size: 0.875rem;
          }

          .articolo {
            width: 100%;
            margin-bottom: 20px;
          }

          p[style*='break-word'] {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.75rem;
          }

          h2 {
            font-size: 1.25rem;
          }

          p {
            font-size: 0.75rem;
          }

          .articolo {
            width: 100%;
            margin-bottom: 20px;
          }

          p[style*='break-word'] {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Payment;
