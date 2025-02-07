import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from "./components/Header";
import ScorrableHeader from "./components/ScorrableHeader";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import Blogs from './components/Blogs';

export default function Blog() {
  const [showScrollable, setShowScrollable] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const topHeader = document.getElementById("top-header");
    const mainHeader = document.getElementById("main-header");

    if (topHeader && mainHeader) {
      setHeaderHeight(topHeader.offsetHeight + mainHeader.offsetHeight + 50);
    }

    const handleScroll = () => {
      setShowScrollable(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight]);

  return (
    <>
      <Head>
        <title>Blog - Evento Digitale</title>
        <link 
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700&display=swap" 
          rel="stylesheet"
        />
      </Head>

      <div className="font-sans bg-white text-gray-900">
        {/* Assegna gli id per il calcolo dell'altezza */}
        <TopHeader id="top-header" />
        <Header id="main-header" />
        {showScrollable && <ScorrableHeader />}

        <main className="max-w-7xl mx-auto py-10 px-5 bg-white fade-in">
          <Blogs />
        </main>

        <Footer />
      </div>
    </>
  );
}
