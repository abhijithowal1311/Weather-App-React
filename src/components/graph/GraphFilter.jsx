import React from "react";
import { WEATHER_TYPE_LABELS } from "../../constants";

export default function GraphFilter({ filters, currentFilter, updateFilter }) {
  return (
    <div className="graph__filter">
      <div className="filters__wrapper">
        {filters.map((filter) => {
          return (
            <div
              onClick={() => updateFilter(filter)}
              className={`filters__item ${
                WEATHER_TYPE_LABELS[currentFilter] == filter ? "active" : ""
              }`}>
              {filter}
            </div>
          );
        })}
      </div>
    </div>
  );
}
