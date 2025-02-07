import { useState, useEffect } from 'react';
import Header from "./components/Header";
import ScorrableHeader from "./components/ScorrableHeader";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import ContactForm from './components/ContactForm';

export default function Contact() {
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
    <div>
      <TopHeader id="top-header" />
      <Header id="main-header" />
      {showScrollable && <ScorrableHeader />}
      <ContactForm />
      <Footer />
    </div>
  );
}
