import { useState, useEffect } from 'react';
import ChatComponent from "./components/ChatComponent";
import DiscussionSection from "./components/DiscussionSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ScorrableHeader from "./components/ScorrableHeader";
import HeroSection from "./components/HeroSection";
import Istituzioni from "./components/Istituzioni";
import NewsSection from "./components/NewsSection";
import TopHeader from "./components/TopHeader";

export default function Home() {
  const [showScrollable, setShowScrollable] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const topHeader = document.getElementById("top-header");
    const mainHeader = document.getElementById("main-header");
    
    if (topHeader && mainHeader) {
      setHeaderHeight(topHeader.offsetHeight + mainHeader.offsetHeight + 50); // Ritarda l'attivazione
    }

    const handleScroll = () => {
      setShowScrollable(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight]);

  return (
    <div>
      <ChatComponent />
      <TopHeader id="top-header" />
      <Header id="main-header" />
      {showScrollable && <ScorrableHeader />}
      <HeroSection />
      <NewsSection />
      <DiscussionSection />
      <Istituzioni />
      <Gallery />
      <Footer />
    </div>
  );
}
