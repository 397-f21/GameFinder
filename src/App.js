//import logo from "./logo.svg";
import "./App.css";
import {useData} from "./utilities/firebase.js";
import PlatformList from "./components/PlatformList";
import PriceList from "./components/PriceList";
import GameList from "./components/GameList";
import TagList from "./components/TagList";
import React, {useState} from "react";

const App = () => {
  const [data, loading, error] = useData("/");
  const [selected, setSelected] = useState([]);
  const [priceSelected, setPriceSelected] = useState(undefined);
  const [tagSelected, setTagSelected] = useState([]);
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <h1 className="app-title">
        {" "}
        <img
          src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Play-Games-icon.png"
          alt="Game Controller Icon"
          width="80"
          height="80"
        />
        GameFinder
      </h1>
      <div className="app-content">
        <div className="app-filters">
          <PlatformList selected={selected} setSelected={setSelected} />
          <PriceList
            priceSelected={priceSelected}
            setPriceSelected={setPriceSelected}
          />
          <TagList tagSelected={tagSelected} setTagSelected={setTagSelected} />
        </div>
        <GameList
          games={data}
          selected={selected}
          priceSelected={priceSelected}
          tagSelected={tagSelected}
        />
      </div>
    </div>
  );
};

export default App;
