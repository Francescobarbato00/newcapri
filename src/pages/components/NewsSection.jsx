import Link from 'next/link';

export default function NewsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-5">
        {/* Header della sezione */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-normal text-[56px] leading-[64px] text-black">
            Le notizie in primo piano
          </h2>
          <a 
            href="#"
            className="text-blue-600 font-semibold underline hover:text-blue-800"
          >
            SCOPRI TUTTE LE NOTIZIE &rarr;
          </a>
        </div>

        {/* Griglia delle notizie */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/news-image.jpg"
              alt="Capri 2024 - REPORT DEL CONVEGNO"
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap space-x-2 mb-2">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs sm:text-sm">
                  Notizia
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                <Link href="/articles/capri-2024-report-del-convegno">
                  Capri 2024 - REPORT DEL CONVEGNO
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Gentilissimi iscritti e interessati al convegno, a nome di tutti i promotori e 
                sostenitori di questa...
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                NEWS • 14/10/2024
              </p>
            </div>
          </div>
          {/* Aggiungi altri blocchi di notizie se necessario */}
        </div>
      </div>
    </section>
  );
}
