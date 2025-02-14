import React, { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const BlogSection = () => {
  const [category, setCategory] = useState("Tutte");
  const [order, setOrder] = useState("Meno recenti");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  const articles = [
    { id: 1, title: "Piano Triennale per l’informatica nella PA", category: "Piano Triennale", date: "23/01/2025" },
    { id: 2, title: "Le campagne malevole del 2024: online il report del CERT-AGID", category: "Sicurezza informatica", date: "21/01/2025" },
    { id: 3, title: "Guida all’intelligenza artificiale nei processi digitali", category: "Innovazione", date: "18/01/2025" },
    { id: 4, title: "Nuove linee guida europee sulla protezione dei dati", category: "Regolamenti UE", date: "15/01/2025" },
    { id: 5, title: "Digitalizzazione e Pubblica Amministrazione: nuove strategie", category: "Pubblica Amministrazione", date: "10/01/2025" },
    { id: 6, title: "La cybersecurity nell’era digitale: proteggere i dati sensibili", category: "Cybersecurity", date: "05/01/2025" }
  ];

  const filteredArticles = articles
    .filter((article) => category === "Tutte" || article.category === category)
    .filter((article) => searchTerm.trim() === "" || article.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) =>
      order === "Più recenti" ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
    );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  // Scroll in cima ad ogni cambio di filtro
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, category, order, searchTerm]);

  return (
    <section className="bg-white py-10">
      <Head>
        <title>Il Nostro Blog - Evento Digitale</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Wrapper esattamente come nel TopHeader */}
      <div className="container mx-auto px-5">
        {/* Breadcrumb */}
        <div className="text-xs mb-4 text-gray-500">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Blog</span>
        </div>

        {/* Titolo e descrizione della sezione */}
        <div className="flex flex-col md:flex-row items-start mb-8">
          <div className="w-full md:w-1/3">
            <h1 className="text-[56px] leading-[64px] font-light text-black">
              Il Nostro Blog
            </h1>
          </div>
          <div className="w-full md:w-2/3 md:pl-6">
            <p className="text-[18px] sm:text-[20px] text-gray-600 leading-relaxed">
              Scopri articoli, approfondimenti e novità relative all'evento e al mondo digitale. Rimani aggiornato e lasciati ispirare dalle nostre storie.
            </p>
          </div>
        </div>

        {/* Filtri */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <div className="flex items-center space-x-2 text-[18px]">
            <label className="text-gray-600">Categoria:</label>
            <select
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[18px]"
              value={category}
              onChange={(e) => { setCategory(e.target.value); setCurrentPage(1); }}
            >
              <option value="Tutte">Tutte</option>
              <option value="Piano Triennale">Piano Triennale</option>
              <option value="Sicurezza informatica">Sicurezza informatica</option>
              <option value="Innovazione">Innovazione</option>
              <option value="Regolamenti UE">Regolamenti UE</option>
              <option value="Pubblica Amministrazione">Pubblica Amministrazione</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>
          </div>

          <div className="flex items-center space-x-2 text-[18px]">
            <label className="text-gray-600">Ordina per data:</label>
            <select
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[18px]"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="Più recenti">Più recenti</option>
              <option value="Meno recenti">Meno recenti</option>
            </select>
          </div>

          <div className="flex items-center space-x-2 text-[18px]">
            <label className="text-gray-600">Cerca:</label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[18px]"
              placeholder="Titolo o categoria..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
          </div>
        </div>

        {/* Lista Articoli con effetto di ingresso */}
        <AnimatePresence exitBeforeEnter>
          <motion.div 
            key={currentPage + category + order + searchTerm}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            {currentArticles.map((article) => (
              <div key={article.id} className="border-t pt-6">
                <span className="inline-block bg-gray-200 text-gray-700 text-[16px] font-semibold px-2 py-1 rounded">
                  {article.category}
                </span>
                <h2 className="text-[32px] font-light text-black mt-2">{article.title}</h2>
                <p className="text-gray-500 text-[18px] mt-2">
                  NEWS • {article.date}
                </p>
                <a 
                  href="#" 
                  className="text-blue-600 font-semibold hover:underline text-[18px] mt-3 inline-block"
                >
                  VAI ALL'ARTICOLO →
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogSection;
