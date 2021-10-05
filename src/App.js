import logo from "./logo.svg";
import "./App.css";
import { useData } from "./utilities/firebase.js";
import PlatformList from "./components/PlatformList";

const App = () => {
  const [data, loading, error] = useData("/");

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the schedule...</h1>;

  return (
  <div className="App">
    <h1 className="app-title">GameFinder</h1>
    <PlatformList/>
  </div>
  );
};

export default App;
