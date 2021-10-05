import logo from "./logo.svg";
import "./App.css";
import { useData } from "./utilities/firebase.js";
import PlatformList from "./components/PlatformList";
import GameList from "./components/GameList";

const App = () => {
  const [data, loading, error] = useData("/");

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;

  console.log(data, "data");

  return (
    <div className="App">
      <h1 className="app-title">GameFinder</h1>
      <div className="app-content">
        <PlatformList />
        <GameList games={data} />
      </div>
    </div>
  );
};

export default App;
