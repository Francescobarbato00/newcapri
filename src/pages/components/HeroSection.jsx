import Head from 'next/head';

export default function HeroSection() {
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

        {/* Overlay blu fisso con opacità minore */}
        <div className="absolute inset-0 bg-blue-900 opacity-70 z-10"></div>

        {/* Contenuto con font Titillium Web */}
        <div
          className="relative z-20 text-white flex flex-col justify-center items-center px-4 md:px-0"
          style={{ fontFamily: "'Titillium Web', sans-serif" }}
        >
          {/* Titolo principale */}
          <h1
            className="text-3xl md:text-5xl font-light text-center mb-8 md:mb-16"
            style={{ fontWeight: 300 }}
          >
            L'Evento annuale sulla Digitalizzazione della Giustizia
          </h1>

          {/* Sottotitolo */}
          <h3
            className="text-2xl md:text-5xl font-light text-center mb-8 md:mb-16"
            style={{ fontWeight: 300 }}
          >
            Stay tuned for Capri 2025
          </h3>
        </div>
      </section>
    </>
  );
}
