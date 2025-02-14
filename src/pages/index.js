import { useState, useEffect } from "react";
import ChatComponent from "./components/ChatComponent";
import DiscussionSection from "./components/DiscussionSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import ScorrableHeader from "./components/ScorrableHeader";
import ScorrableHeaderMobile from "./components/ScorrableHeaderMobile";
import HeroSection from "./components/HeroSection";
import Istituzioni from "./components/Istituzioni";
import NewsSection from "./components/NewsSection";
import TopHeader from "./components/TopHeader";

export default function Home() {
  const [showScrollable, setShowScrollable] = useState(false);

  useEffect(() => {
    const mainHeader = document.getElementById("main-header");

    const handleScroll = () => {
      if (mainHeader) {
        // Quando il fondo del mainHeader è ≤ 0 significa che l'intero header è fuori dalla viewport
        if (mainHeader.getBoundingClientRect().bottom <= 0) {
          setShowScrollable(true);
        } else {
          setShowScrollable(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <ChatComponent />
      <TopHeader id="top-header" />
      {/* Header principale (fisso in alto) */}
      <Header id="main-header" />
      {/* Scrollable Header: mostraamo quello desktop o mobile in base alle classi */}
      {showScrollable && (
        <>
          <div className="hidden md:block">
            <ScorrableHeader />
          </div>
          <div className="block md:hidden">
            <ScorrableHeaderMobile />
          </div>
        </>
      )}
      <HeroSection />
      <NewsSection />
      <DiscussionSection />
      <Istituzioni />
      <Gallery />
      <Footer />
    </div>
  );
}
