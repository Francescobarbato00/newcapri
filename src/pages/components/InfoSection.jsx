import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const InfoSection = () => {
  const comunicazioni = [
    {
      id: 1,
      title: "Titolo Comunicazione 1",
      slug: "titolo-comunicazione-1",
      image_url: "/placeholder1.jpg",
      category: "News",
      content:
        "Questo è il contenuto della comunicazione 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Titolo Comunicazione 2",
      slug: "titolo-comunicazione-2",
      image_url: "/placeholder2.jpg",
      category: "Eventi",
      content:
        "Questo è il contenuto della comunicazione 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      created_at: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Titolo Comunicazione 3",
      slug: "titolo-comunicazione-3",
      image_url: "/placeholder3.jpg",
      category: "Comunicazioni Tecniche",
      content:
        "Questo è il contenuto della comunicazione 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      created_at: new Date().toISOString(),
    },
    {
      id: 4,
      title: "Titolo Comunicazione 4",
      slug: "titolo-comunicazione-4",
      image_url: "/placeholder4.jpg",
      category: "Pubblicazioni",
      content:
        "Questo è il contenuto della comunicazione 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      created_at: new Date().toISOString(),
    },
  ];

  const [activeTab, setActiveTab] = useState("News");

  // Filtra le comunicazioni in base al tab attivo
  const filteredCommunications = comunicazioni.filter(
    (comm) => comm.category === activeTab
  );

  // Definiamo i nomi dei tab
  const tabs = ["News", "Eventi", "Comunicazioni Tecniche", "Pubblicazioni"];

  return (
    <>
      <Head>
        <title>Info Section - Evento Digitale</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="bg-white py-16">
        <div className="container mx-auto px-5">
          {/* Breadcrumb */}
          <div className="text-sm mb-4 text-gray-500">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span>Comunicazioni</span>
          </div>

          {/* Desktop Header & Tabs */}
          <div className="hidden sm:block">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
              <h2 className="text-[32px] sm:text-[56px] leading-[40px] sm:leading-[64px] font-normal text-black">
                Comunicazioni in primo piano
              </h2>
              <a 
                href="#" 
                className="text-blue-600 font-semibold underline hover:text-blue-800"
              >
                SCOPRI TUTTE LE COMUNICAZIONI &rarr;
              </a>
            </div>
            <nav className="mb-8 border-b-2 border-gray-300 pb-2">
              <ul className="flex flex-wrap space-x-6">
                {tabs.map((tab) => (
                  <li key={tab} className="cursor-pointer">
                    <span
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap text-[20px] font-medium transition-colors duration-300 px-2 py-1 rounded ${
                        activeTab === tab
                          ? "text-blue-700 border-b-2 border-blue-700"
                          : "text-blue-500 hover:text-blue-700"
                      }`}
                    >
                      {tab}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Header: Titolo, Link e Menu a tendina */}
          <div className="block sm:hidden mb-12">
            <h2 className="text-[32px] leading-[40px] font-normal text-black">
              Comunicazioni in primo piano
            </h2>
            <a 
              href="#" 
              className="text-blue-600 font-semibold underline hover:text-blue-800 mt-4"
            >
              SCOPRI TUTTE LE COMUNICAZIONI &rarr;
            </a>
            <div className="mt-6">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded text-black"
              >
                {tabs.map((tab) => (
                  <option key={tab} value={tab}>
                    {tab}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comunicazioni Grid con effetto fade in */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredCommunications.length > 0 ? (
              filteredCommunications.map((comm) => (
                <div
                  key={comm.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden animate-fadeIn"
                >
                  <img
                    src={comm.image_url || '/placeholder.jpg'}
                    alt={comm.title}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-wrap space-x-2 mb-2">
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs sm:text-sm">
                        {comm.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                      <Link href={`/comunicazioni/${comm.slug}`}>
                        {comm.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      {comm.content.substring(0, 100)}...
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      COMUNICAZIONE • {new Date(comm.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-3">
                Nessuna comunicazione disponibile al momento.
              </p>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
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
};

export default InfoSection;
