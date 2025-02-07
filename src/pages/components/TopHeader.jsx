import React, { useState } from "react";
import { motion } from "framer-motion";

const TopHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-[#1f5bbf] text-white py-4 px-5 flex justify-between items-center text-base relative z-[9999] fixed top-0 left-0 w-full shadow-md">
      <span className="font-semibold text-lg cursor-pointer hover:underline">
        Evento Digitalizzazione Capri
      </span>
      <div className="relative">
        <button
          className="font-semibold flex items-center focus:outline-none"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          ITA
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ml-1 transform transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-12 right-0 w-44 bg-white text-black shadow-xl rounded-lg overflow-visible z-[99999] border border-gray-300 p-2"
          >
            <div className="absolute -top-2 right-5 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-300"></div>
            <button className="block px-4 py-2 text-left w-full hover:bg-gray-100 hover:text-blue-900 text-gray-900 font-medium transition-colors">
              ITALIANO
            </button>
            <button className="block px-4 py-2 text-left w-full hover:bg-gray-100 hover:text-blue-900 text-gray-900 font-medium transition-colors">
              ENGLISH
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
