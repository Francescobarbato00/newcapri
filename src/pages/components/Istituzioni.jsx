import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Istituzioni = () => {
  const loghi = [
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
    '/7.png',
    '/8.png',
    '/9.png',
    '/10.png',
    '/11.png',
    '/12.png',
    '/13.png',
  ];

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="py-16">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center md:justify-between">
          {/* Colonna sinistra: Testo */}
          <div className="md:w-1/3">
            <h2 className="text-[48px] font-light leading-[48px] text-black">
              Istituzioni che<br />hanno contribuito
            </h2>
          </div>
          {/* Colonna destra: Griglia loghi */}
          <div className="md:w-2/3 mt-8 md:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
              {loghi.map((logo, index) => (
                <div
                  key={index}
                  className="w-[150px] h-[100px] flex justify-center items-center filter grayscale transition duration-300 hover:filter-none"
                >
                  <Image
                    src={logo}
                    alt={`Logo ${index + 2}`}
                    width={150}
                    height={100}
                    objectFit="contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Istituzioni;
