import React from "react";
import Logo from "../assets/crypto-logo.png";

const Links = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 1,
    name: "Currency Converter",
    link: "/#currency-converter",
  },
  {
    id: 1,
    name: "Shop",
    link: "/#",
  },
  {
    id: 1,
    name: "About Us",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full text-white z-50">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="logo" className="w-20" />
          </div>
          <div>
            <ul className="hidden sm:flex gap-8">
              {Links.map(({ link, name }) => (
                <li key={link}>
                  <a href={link} className="inline-block p-2">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="primary-button">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
