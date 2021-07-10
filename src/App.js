import "./App.scss";
import { useContext, useEffect } from "react";
import { WeatherContext } from "./context";
import requestLocationAccess from "./helpers/location";
import MainRouter from "./routing/MainRouter";
import Sidebar from "./components/ui/Sidebar";
import Header from "./components/ui/Header";
import useLocationName from "./hooks/useLocationName";
import useWeatherData from "./hooks/useWeatherData";
import weatherUtils from "./utils/weatherUtilities";
import locationUtils from "./utils/locationUtils";
import addUserData from "./helpers/user";

function App() {
  const [state, dispatch] = useContext(WeatherContext);

  const weatherInfo = useWeatherData(
    state.currentLocation,
    state.unitType,
    dispatch
  );

  const locationDetails = useLocationName(state.currentLocation)

  useEffect(() => {
    weatherInfo && weatherUtils.addWeatherInfoToStore(weatherInfo, dispatch);
  }, [weatherInfo]);

  useEffect(() => {
    locationDetails && locationUtils.fetchAndAddPlaceName(locationDetails, dispatch)
  }, [locationDetails])

  useEffect(() => {
    requestLocationAccess(dispatch);
    addUserData(dispatch)
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <MainRouter />
    </div>
  );
}

export default App;
