import React from "react";
import Card from "./Card.js";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const prices = [[0,10],[11,20],[21,30],[31,40],[41,50],[51,60]];

const PriceList = ({selected, setSelected}) => {
  return (
    <div className="platform-flexbox">
      <h2>Price Ranges</h2>
      {Object.values(prices).map((value, i) => (
        <Card
          key={i}
          value={value[0] + '-' + value[1]}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default PriceList;
