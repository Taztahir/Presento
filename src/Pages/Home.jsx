import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="md:h-screen bg-hero">
      <div className="md:h-screen bg-black/70 max-md:py-40 lg:pt-30">
      <div className="flex mx-auto max-w-6xl items-center pt-26">
        <div className="lg:max-w-6xl max-lg:text-center px-5 space-y-5 grid items-center">
          
          {/* Heading Motion */}
          <motion.h1
            className="text-4xl raleway-bold dm-sans md:text-[48px] font-bold text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Bettter digital <br /> experience with <br /> Presento
          </motion.h1>

          {/* Paragraph Motion */}
          <motion.p
            className="text-gray-300 nunito md:text-[24px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            We are team of talented designers making <br /> websites with Bootstrap
          </motion.p>

          {/* Button Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="md:flex max-lg:space-y-3 items-center"
          >
            <a
              href="#gallery"
              className="text-white px-7 py-2 rounded-md inline-block font-semibold bg-[#E03A3C] hover:scale-95 transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#gallery"
              className="text-[#E03A3C] md:px-7 py-2 flex max-lg:justify-center items-center rounded-md"
            ><span><ion-icon name="caret-forward-circle-outline" className="text-4xl"></ion-icon></span>
              <span className="text-lg text-white py-2 hover:text-[#E03A3C] duration-300 ">Watch Video</span>
            </a>
          </motion.div>
        </div>
      </div>
     </div> 
    </section>
  );
}
