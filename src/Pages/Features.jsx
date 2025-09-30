import React, { useState } from "react";
import { FaBinoculars, FaSun, FaCodeBranch, FaCube } from "react-icons/fa";

const features = [
  {
    id: 0,
    title: "Modi sit est dela piedra nest",
    icon: <FaBinoculars className="text-4xl mb-2" />,
    heading: "Neque exercitationem debitis soluta quos debitis quo mollitia officia est",
    content:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    bullets: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Provident mollitia neque rerum asperiores dolores quos qui a.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 1,
    title: "Unde praesent mara setra le",
    icon: <FaCube className="text-4xl mb-2" />,
    heading: "Voluptates explicabo praesentium rem aliquid dolorum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione, fugiat minima esse veniam officia neque consequatur pariatur cum laudantium.",
    bullets: [
      "Magnam ratione fugiat minima esse.",
      "Neque consequatur pariatur cum laudantium.",
      "Nisi ut aliquip ex ea commodo consequat.",
      "Quis autem vel eum iure reprehenderit."
    ],
    image:
      "https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Pariatur explica nitro dela",
    icon: <FaSun className="text-4xl mb-2" />,
    heading: "Pariatur ex minima laborum nemo doloribus",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    bullets: [
      "Reprehenderit in voluptate velit esse.",
      "Cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident.",
      "Sunt in culpa qui officia deserunt mollit."
    ],
    image:
      "https://images.pexels.com/photos/3184469/pexels-photo-3184469.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "Nostrum qui dile node",
    icon: <FaCodeBranch className="text-4xl" />,
    heading: "Nostrum deleniti accusantium dolorem minima",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    bullets: [
      "Cupidatat non proident sunt in culpa.",
      "Occaecat cupidatat non proident.",
      "Magni dolores eos qui ratione voluptatem.",
      "Sequi nesciunt neque porro quisquam."
    ],
    image:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export default function FeatureSection() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <section className="bg-white py-12 px-4">
      {/* Top Boxes */}
      <div className="grid grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
        {features.map((feat, idx) => (
          <button
            key={feat.id}
            onClick={() => setActive(idx)}
            className={`border-1 border-gray-200 hover:border-red-300 px-5 py-4 lg:p-6 flex lg:space-x-3 items-center justify-center text-start transition-colors duration-300 ${
              active === idx
                ? "bg-red-600 text-white border-red-600"
                : "hover:bg-gray-100"
            }`}
          >
            {feat.icon}
            <h3 className="font-semibold text-lg max-md:hidden">{feat.title}</h3>
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{current.heading}</h2>
          <p className="text-gray-700 mb-4">{current.content}</p>
          <p className="italic text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="space-y-3">
            {current.bullets.map((b, i) => (
              <li key={i} className="flex items-start">
                <span className="text-red-600 mr-2">✔</span>
                <span className="text-gray-800">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Image */}
        <div>
          <img
            src={current.image}
            alt="feature"
            className="rounded-md shadow-md w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
