import { useState, useEffect } from "react";
import ChatComponent from "./components/ChatComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScorrableHeader from "./components/ScorrableHeader";
import TopHeader from "./components/TopHeader";

import BlogSection from "./components/Blogs";

export default function Blog() {
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
      {showScrollable && <ScorrableHeader />}
      <BlogSection />
      <Footer />
    </div>
  );
}
