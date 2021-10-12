import React from "react";
import PriceCard from "./PriceCard.js";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const prices = [10, 20, 30, 40, 50, 60];

const PriceList = ({ priceSelected, setPriceSelected }) => {
  return (
    <div className="platform-flexbox">
      <h2>Prices</h2>
      {Object.values(prices).map((value, i) => (
        <PriceCard
          key={i}
          value={value}
          selected={priceSelected}
          setSelected={setPriceSelected}
        />
      ))}
    </div>
  );
};

export default PriceList;
