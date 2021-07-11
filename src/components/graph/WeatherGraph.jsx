import React, { useContext, useEffect, useState } from "react";
import { WEATHER_TYPE_LABELS_REVERSE } from "../../constants";
import { WeatherContext } from "../../context";
import utils from "../../utils/utils";
import GraphContent from "./GraphContent";
import GraphFilter from "./GraphFilter";

export default function WeatherGraph() {
  const [state, dispatch] = useContext(WeatherContext);
  const [graphData, setgraphData] = useState({ labels: [], data: [] });
  const [graphLabels, setgraphLabels] = useState([]);
  const [graphFilters, setgraphFilters] = useState([]);
  const [currentFilter, setcurrentFilter] = useState("");

  useEffect(() => {
    console.log("weather data", state.weatherData);
    state.weatherData && state.weatherData.lat && getGraphFilters();
  }, [state.weatherData]);

  function getGraphFilters() {
    let weatherGraph = utils.getGraphFilters(state.weatherData);
    setgraphFilters(weatherGraph.filters);
    setcurrentFilter(weatherGraph.originalFilters[1]);
  }

  useEffect(() => {
    currentFilter &&  setgraphData({
      labels: utils.getGraphLabels(currentFilter, state.weatherData),
      data: utils.getGraphData(currentFilter, state.weatherData),
    });
  }, [currentFilter]);

  function updateFilter(filter) {
      setcurrentFilter(WEATHER_TYPE_LABELS_REVERSE[filter])
  }

  return (
    <div className="graph">
      <GraphFilter filters={graphFilters} currentFilter={currentFilter} updateFilter={updateFilter}/>
      {state.weatherData && state.weatherData.lat && graphData && graphData.data && (
        <GraphContent data={graphData} />
      )}
    </div>
  );
}
