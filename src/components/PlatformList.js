import React, { useState } from "react";
import Card from './Card.js';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const plats = ["pc", "xbox", "ps"];

const PlatformList = () => {
  const [plat, setPlat] = useState([]);
  const [selected, setSelected] = useState([]);
 

  return (
    <div className='platform-flexbox'>
      <h2>Platforms</h2>
      {Object.values(plats).map((value) => (
        <Card value={value} selected={selected} setSelected={setSelected}/>
      ))}
    </div>
  );
};

export default PlatformList;
