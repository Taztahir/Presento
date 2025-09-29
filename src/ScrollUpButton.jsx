import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // npm install lucide-react

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 animate-bounce right-3 lg:right-6 p-3 rounded-md bg-[#E03A3C] text-white shadow-lg hover:bg-[#E8505B] duration-300 hover:text-white transition"
      >
        <ArrowUp size={18} />
      </button>
    )
  );
};

export default ScrollUpButton;
