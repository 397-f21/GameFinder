//import logo from "./logo.svg";
import "./App.css";
import {useData} from "./utilities/firebase.js";
import PlatformList from "./components/PlatformList";
import GameList from "./components/GameList";
import React, {useState} from "react";

const App = () => {
  const [data, loading, error] = useData("/");
  const [selected, setSelected] = useState([]);
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      
      <h1 className="app-title"> <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Play-Games-icon.png" width="80" height="80"/>GameFinder</h1>
      <div className="app-content">
        <PlatformList selected={selected} setSelected={setSelected} />
        <GameList games={data} selected={selected} />
      </div>
    </div>
  );
};

export default App;
