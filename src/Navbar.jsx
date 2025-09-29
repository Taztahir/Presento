import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "service", label: "Service" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Team" },
    { id: "news", label: "Blog" },
    { id: "contact", label: "Contact" }

  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 nunito ${
        scrolled ? "bg-white backdrop-blur-md text-black shadow-lg border-gray-100" : "bg-white text-white"
      }`}
    >
      <div className="lg:max-w-6xl max-md:px-6 lg:px-6 max-lg:max-w-2xl mx-auto py-7 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="text-4xl text-black font-bold raleway-bold hover:scale-95 transition-transform  duration-300"
        >
          Presento<span className="text-[#E03A3C] roboto-serif">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`transition-colors raleway-medium px-3 py-2 rounded-md font-semibold ${
                  activeSection === item.id
                    ? "text-[#E03A3C] "
                    : " text-black hover:text-[#E03A3C] transition duration-500"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Get Started Button (desktop only) */}
        <div className="hidden lg:block hover:scale-95 transition-transform duration-300">
          <a
            href="#gallery"
            className="text-sm shadow-white bg-[#E03A3C] rounded-lg duration-300 transition text-white px-7 py-3 font-semibold"
          >
            Get Started
          </a>
        </div>
        </ul>

        

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md h-screen">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors px-3 py-2 rounded-sm font-semibold ${
                    activeSection === item.id
                      ? "text-white bg-[#1c1c1ca7]"
                      : "text-[#1F2937]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href=""
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#E03A3C] text-white px-7 py-3 font-semibold"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
