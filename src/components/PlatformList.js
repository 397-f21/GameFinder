// import React, {useState} from "react";
import React from "react";
import Card from "./Card.js";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const plats = ["win", "mac", "linux"];

const PlatformList = ({selected, setSelected}) => {
  return (
    <div className="platform-flexbox">
      <h2>Platforms</h2>
      {Object.values(plats).map((value, i) => (
        <Card
          key={i}
          value={value}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default PlatformList;
