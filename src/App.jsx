import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Converter from "./components/Converter/Converter.jsx";
import CustomerSupport from "./components/CustomerSupport/CustomerSupport.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="bg-brandDark overflow-hidden text-white">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Converter />
      <CustomerSupport />
      <Footer />
    </div>
  );
};

export default App;
