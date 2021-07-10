import logo from "./logo.svg";
import "./App.scss";
import { useContext, useEffect, useMemo } from "react";
import { WeatherContext } from "./context";
import requestLocationAccess from "./helpers/location";
import Home from "./components/pages/Home";
import MainRouter from "./routing/MainRouter";
import Sidebar from "./components/ui/Sidebar";
import Header from "./components/ui/Header";

function App() {
  const [state, dispatch] = useContext(WeatherContext);

  useEffect(() => {
    requestLocationAccess(dispatch);
  }, []);

  console.log("state: ", state);
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainRouter />
    </div>
  );
}

export default App;
