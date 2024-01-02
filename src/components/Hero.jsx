import React from "react";
import HeroImg from "../assets/web3.png";

const Hero = () => {
  return (
    <div className="bg-brandDark">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 min-h-[700px] place-content-center ">
          {/* text-content-section */}
          <div className="flex flex-col justify-center gap-4 mt-36 sm:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-semibold">
              Explore The Largest NFT Marketplace
            </h1>
            <p className="text-gray-400">
              Buy, Sell & Trade Cryptocurrency Easily and Securely.
            </p>
            <div className="space-y-2 space-x-4">
              <button className="primary-button">Connect Wallet</button>
              <button className="outline-button">Learn More</button>
            </div>
          </div>
          {/* image-section */}
          <div>
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
      {/* bg blur div */}
      <div className="h-[350px] w-[350px] absolute -left-10 -top-10 rounded-full bg-gradient-to-r from-pink-500/50 to-violet-500 blur-[80px] opacity-60"></div>
    </div>
  );
};

export default Hero;
