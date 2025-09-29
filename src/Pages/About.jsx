import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Diamond, Radio, Presentation } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Briefcase className="w-10 h-10 text-[#E03A3C] mb-4" />,
      title: "Corporis voluptates sit",
      text: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    },
    {
      icon: <Diamond className="w-10 h-10 text-[#E03A3C] mb-4" />,
      title: "Ullamco laboris nisi",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      icon: <Radio className="w-10 h-10 text-[#E03A3C] mb-4" />,
      title: "Labore consequatur",
      text: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
    },
    {
      icon: <Presentation className="w-10 h-10 text-[#E03A3C] mb-4" />,
      title: "Beatae veritatis",
      text: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white">
      {/* Slanted background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="slanted-bg absolute inset-0" />
      </div>

      {/* Content wrapper */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-center text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-[34px] raleway-bold font-bold mb-6 leading-tight">
            Voluptatem dignissimos <br /> provident quasi
          </h2>
          <p className="text-gray-300 text-[16px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Duis
            aute irure dolor in reprehenderit
          </p>

          <button className="inline-flex items-center w-40 justify-center border border-[#E03A3C] text-white font-semibold px-3 py-3 rounded-full hover:bg-[#E03A3C] transition duration-300">
            ABOUT US
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Right Features with staggered motion */}
        <motion.div
          className="grid sm:grid-cols-2 gap-10 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hover:text-[#E03A3C] duration-300 transition"
            >
              {f.icon}
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Slanted background styles */}
      <style>{`
        .slanted-bg {
          background: #111111;
          clip-path: polygon(0 6%, 100% 0, 100% 94%, 0 100%);
          -webkit-clip-path: polygon(0 6%, 100% 0, 100% 94%, 0 100%);
        }
        @media (min-width: 1024px) {
          .slanted-bg {
            clip-path: polygon(0 4%, 100% 0, 100% 96%, 0 100%);
            -webkit-clip-path: polygon(0 4%, 100% 0, 100% 96%, 0 100%);
          }
        }
      `}</style>
    </section>
  );
}
