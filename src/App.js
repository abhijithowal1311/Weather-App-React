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
import { ACTION_TYPES } from "./context/types";
import ErrorBoundary from "./utils/ErrorBoundary";
import {getDataFromCache} from "./helpers/apphelper";

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
    getDataFromCache(dispatch)
  }, []);

  useEffect(() => {
    if (state.appLoaded) {
      requestLocationAccess(dispatch);
      addUserData(dispatch)
    }
  }, [state.appLoaded])

  useEffect(() => {
    state.locatonBlocked && weatherUtils.addDefaultWeatherInfo(dispatch)
  }, [state.locatonBlocked])

  function changeTheme(theme) {
    dispatch({
        type: ACTION_TYPES.CHANGE_APP_THEME,
        payload: theme
    })
  }


  return (
    <div className="App" style={{background: state.appTheme == "dark" ? "#060616" : "white"}}>
      <ErrorBoundary>
        <Sidebar user={state.user} changeTheme={changeTheme} theme={state.appTheme}/>
        <MainRouter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
