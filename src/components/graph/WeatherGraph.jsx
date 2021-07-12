import React, { useContext, useEffect, useState } from "react";
import Loader from "react-loaders";
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
  const [currentGraph, setcurrentGraph] = useState("line");
  const [graphParams, setgraphParams] = useState([]);
  const [currentParam, setcurrentParam] = useState("temp");

  useEffect(() => {
    state.weatherData && state.weatherData.lat && getGraphFilters();
  }, [state.weatherData]);

  function getGraphFilters() {
    let weatherGraph = utils.getGraphFilters(state.weatherData);
    setgraphFilters(weatherGraph.filters);
    setcurrentFilter(weatherGraph.originalFilters[1]);
  }

  useEffect(() => {
    currentFilter &&
      setgraphParams(utils.getGraphParams(state.weatherData[currentFilter]));
    currentFilter &&
      setgraphData({
        labels: utils.getGraphLabels(currentFilter, state.weatherData),
        data: utils.getGraphData(
          currentFilter,
          state.weatherData,
          currentParam
        ),
      });
  }, [currentFilter, currentParam]);

  function updateFilter(filter) {
    setcurrentFilter(WEATHER_TYPE_LABELS_REVERSE[filter]);
  }

  return (
    <div className="graph">
      <GraphFilter
        graphParams={graphParams}
        changeParams={setcurrentParam}
        filters={graphFilters}
        currentGraph={currentGraph}
        changeType={setcurrentGraph}
        currentFilter={currentFilter}
        updateFilter={updateFilter}
      />
      {state.weatherData &&
      state.weatherData.lat &&
      graphData &&
      graphData.data ? (
        <GraphContent
          data={graphData}
          type={currentGraph}
          param={currentParam}
        />
      ) : (
        <div className="w-100 m-auto d-flex justify-content-center">
          <Loader type="ball-beat" active color="#6579f7" />
        </div>
      )}
    </div>
  );
}
