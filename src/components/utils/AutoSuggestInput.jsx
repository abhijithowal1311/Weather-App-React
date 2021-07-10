import React, { useContext, useEffect, useState, useCallback } from "react";
import Autosuggest from "react-autosuggest";
import "../../styles/theme.css";
import searchIcon from "../../assets/header/search.png";
import locationAPI from "../../service/locationAPI";
import useWeatherData from "../../hooks/useWeatherData";
import { WeatherContext } from "../../context";
import weatherUtils from "../../utils/weatherUtilities";
import useLocationName from "../../hooks/useLocationName";
import locationUtils from "../../utils/locationUtils";
import { debounce } from "lodash";

export default function AutoSuggestTest() {
  const [value, setValue] = useState("");
  const [state, dispatch] = useContext(WeatherContext);
  const [suggestions, setSuggestions] = useState([]);
  const [location, setlocation] = useState({});
  const [searchEnable, setSearchEnable] = useState(false);
  const weatherInfo = useWeatherData(location, state.unitType, dispatch);
  const locationDetails = useLocationName(location);
  const handler = useCallback(debounce(getSuggestions, 500), []);

  async function getSuggestions(value) {
    let response = [];
    if (value != "") {
      response = await locationAPI.getLatLong(value);
    }
    response && response.addresses.length > 0
      ? setSuggestions(response.addresses.map((location) => location))
      : setSuggestions([]);
  }

  useEffect(() => {
    if (weatherInfo && searchEnable) {
      weatherUtils.addWeatherInfoToStore(weatherInfo, dispatch);
      setSearchEnable(false);
    }

    if (locationDetails && searchEnable) {
      locationUtils.fetchAndAddPlaceName(locationDetails, dispatch);
    }
  }, [weatherInfo, searchEnable, locationDetails]);

  function searchWeather() {
    setSearchEnable(true);
  }
  return (
    <div className="d-flex">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          console.log(value);
          setValue(value);
          handler(value);
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={(suggestion) => {
          setlocation(suggestion);
          return suggestion.formattedAddress;
        }}
        renderSuggestion={(suggestion) => {
          return (
            <span>
              {suggestion.formattedAddress +
                ", " +
                (suggestion.state ? suggestion.state : suggestion.country)}{" "}
            </span>
          );
        }}
        inputProps={{
          placeholder: "Search...",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
      <span className="auto_suggest_btn_container" onClick={searchWeather}>
        <img src={searchIcon} className="auto_suggest_search_btn" />
      </span>
    </div>
  );
}
