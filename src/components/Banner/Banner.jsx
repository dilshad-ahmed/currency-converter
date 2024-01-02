import React from "react";
import BannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-brandDark relative">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 min-h-[600px] place-content-center ">
          {/* image-section */}
          <div>
            <img src={BannerImg} alt="" />
          </div>

          {/* text-content-section */}
          <div className="flex flex-col justify-center gap-4 sm:pl-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-semibold">
              Explore The Largest NFT Marketplace
            </h1>
            <p className="text-gray-400">
              Buy, Sell & Trade Cryptocurrency Easily and Securely Buy, Sell &
              Trade Cryptocurrency Easily and Securely
            </p>
            <div className="space-y-2 space-x-4">
              <button className="primary-button">Connect Wallet</button>
              <button className="outline-button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      {/* bg blur div */}
      <div className="h-[250px] w-[250px] absolute -right-5 -bottom-10 rounded-full bg-secondary/80 blur-3xl"></div>
    </div>
  );
};

export default Banner;
