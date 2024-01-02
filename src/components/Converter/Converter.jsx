import React from "react";
import HeaderTitle from "../Shared/HeaderTitle";
import CurrencyConverter from "./CurrencyConverter";

const Converter = () => {
  return (
    <div>
      <span id="currency-converter"></span>
      <div className="container">
        {/* Header Title */}
        <HeaderTitle
          title={"Real-Time Currency Converter"}
          subtitle={
            "Real-Time Currency Converter for Instant Global Exchange Rates"
          }
        />

        {/* Converter Section */}
        <CurrencyConverter />
      </div>
    </div>
  );
};

export default Converter;
