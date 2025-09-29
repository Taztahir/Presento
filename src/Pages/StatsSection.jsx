import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Smile, Notebook, Headphones, Users } from "lucide-react";

const stats = [
  { id: 1, icon: <Smile className="w-8 h-8 text-red-500" />, value: 232, label: "Happy Clients" },
  { id: 2, icon: <Notebook className="w-8 h-8 text-red-500" />, value: 521, label: "Projects" },
  { id: 3, icon: <Headphones className="w-8 h-8 text-red-500" />, value: 1463, label: "Hours Of Support" },
  { id: 4, icon: <Users className="w-8 h-8 text-red-500" />, value: 15, label: "Hard Workers" },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="w-full flex justify-center py-16 bg-gray-50">
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl w-full px-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="bg-white shadow-xl rounded-xl p-5 flex flex-col items-center justify-center relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute -top-8 bg-white shadow-lg rounded-full p-4">
              {stat.icon}
            </div>
            <h2 className="text-4xl font-bold text-gray-500 mt-6">
              {inView ? (
                <CountUp start={0} end={stat.value} duration={2.5} />
              ) : (
                0
              )}
            </h2>
            <p className="text-gray-600 roboto-serif mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
