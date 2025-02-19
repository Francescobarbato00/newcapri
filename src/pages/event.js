import { useState, useEffect } from "react";
import ChatComponent from "./components/ChatComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScorrableHeader from "./components/ScorrableHeader";
import ScorrableHeaderMobile from "./components/ScorrableHeaderMobile";
import TopHeader from "./components/TopHeader";
import AboutSection from "./components/AboutSection";
import Events from "./components/Events";
import Archive from "./components/Archive";
import PubblicaArticolo from "./components/PubblicaArticolo";

export default function Event() {
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
      <Header id="main-header" />
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
      <AboutSection />
      <Events />
      <Archive />
      <PubblicaArticolo />
      <Footer />
    </div>
  );
}
