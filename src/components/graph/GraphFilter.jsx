import React from "react";
import { Input, Label } from "reactstrap";
import {
  TYPE_OF_GRAPHS,
  WEATHER_PARAMETER_MAPPING,
  WEATHER_TYPE_LABELS,
} from "../../constants";

export default function GraphFilter({
  filters,
  currentFilter,
  updateFilter,
  changeType,
  changeParams,
  currentGraph,
  graphParams,
}) {
  console.log("params", graphParams);
  return (
    <div className="graph__filter flex-lg-row flex-column">
      <div className="filters__wrapper">
        {filters.map((filter) => {
          return (
            <div
              onClick={() => updateFilter(filter)}
              className={`filters__item ${
                WEATHER_TYPE_LABELS[currentFilter] == filter ? "active" : ""
              }`}
            >
              {filter}
            </div>
          );
        })}
      </div>
      <div className="d-flex align-items-center flex-lg-row flex-column">
        <Label className="px-lg-2">Parameter:</Label>
        <Input type="select" onChange={(e) => changeParams(e.target.value)}>
          {graphParams.map((item) => {
            return (
              <option value={item}>{WEATHER_PARAMETER_MAPPING[item]}</option>
            );
          })}
        </Input>
        <Label  className="px-lg-2">Type:</Label>
        <Input type="select" onChange={(e) => changeType(e.target.value)}>
          {TYPE_OF_GRAPHS.map((item) => {
            return (
              <option selected={item.value == currentGraph} value={item.value}>
                {item.name}
              </option>
            );
          })}
        </Input>
      </div>
    </div>
  );
}
