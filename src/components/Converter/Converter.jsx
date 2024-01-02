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
          title={"Realtime Currency Converter"}
          subtitle={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vel odio esse facilis, aperiam ipsum aut porro. Suscipit, amet accusantium!"
          }
        />

        {/* Converter Section */}
        <CurrencyConverter />
      </div>
    </div>
  );
};

export default Converter;
