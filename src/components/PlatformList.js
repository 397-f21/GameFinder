import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const plats = ["pc", "xbox", "ps"];

const PlatformSelector = ({ plat, setPlat }) => (
  <div className="btn-group">
    <select name="platforms" id="platforms" multiple>
     
    </select>
  </div>
);

const PlatformList = () => {
  const [plat, setPlat] = useState([]);
  const [selected, setSelected] = useState([]);
 

  return (
    <>
     {Object.values(plats).map((value) => (
    <Platform plat={value} selected={selected} setSelected={setSelected}/>
          ))}
      {/* <div className="plat-list">
        {plats.map((p) => (
          <li>{p}</li>
        ))}
      </div> */}
    </>
  );
};

const toggle = (x, lst) => (
  lst.includes(x) ? lst.filter(y => y !== x) : [x, ...lst]
);

const Platform = ({ plat, selected, setSelected }) => {
  const isSelected = selected.includes(plat);
  
  const style = {
    backgroundColor: isSelected
      ? "lightgreen"
      : "white"
      
  };
  return (
    <div
      className="card m-1 p-2"
      style={style}
      onClick={() => setSelected(toggle(plat, selected))}
    >
      <div className="card-body">
        <div className="card-title">
          {plat}
        </div>
      </div>
    </div>
  );
};

export default PlatformList;
