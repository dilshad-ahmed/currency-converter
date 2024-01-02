import React from "react";
import Logo from "../../assets/crypto-logo.png";

const Links = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 1,
    name: "Services",
    link: "/#services",
  },
  {
    id: 1,
    name: "Currency Converter",
    link: "/#currency-converter",
  },
  {
    id: 1,
    name: "About Us",
    link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ",
  },
];
const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full text-white z-50">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src={Logo} alt="logo" className="w-14 sm:w-16 py-2" />
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
            <a href="/#currency-converter" className="primary-button">
              Currency Converter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
