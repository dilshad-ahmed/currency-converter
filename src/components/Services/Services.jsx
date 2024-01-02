import React from "react";
import Coin1 from "../../assets/coins/coin1.png";
import Coin2 from "../../assets/coins/coin2.png";
import Coin3 from "../../assets/coins/coin3.png";

const ServicesData = [
  {
    icon: Coin1,
    title: "Buy Crypto",
    description:
      "Buy crypto with our easy to use platform lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
  },
  {
    icon: Coin2,
    title: "Fast Transaction",
    description:
      "Buy crypto with our easy to use platform lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
  {
    icon: Coin3,
    title: "Secure",
    description:
      "Buy crypto with our easy to use platform lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  },
];

const Services = () => {
  return (
    <div className="bg-brandDark text-white">
      <span id="services"></span>
      <div className="container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ServicesData.map(({ icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col justify-center items-center gap-3 bg-secondary/20 p-8 rounded-md hover:shadow-secondary hover:shadow-[0_0_15px_] hover:scale-105 transition-all duration-300"
            >
              <img
                src={icon}
                alt={title}
                className="w-20 h-20 object-contain"
              />
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-gray-400 text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
