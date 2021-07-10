import React, { useContext } from "react";
import { WeatherContext } from "../../context";

export default function Home() {
  const [state, dispatch] = useContext(WeatherContext);
  
  return (
    <div>
    </div>
  );
}
