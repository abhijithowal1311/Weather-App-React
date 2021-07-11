import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../../styles/sidebar.scss";
import menuIcon from "../../assets/sidebar/hamburger.svg";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Link } from "react-router-dom";
import WeatherCard from "./WeatherCard";
import weatherUtils from "../../utils/weatherUtilities";
import { WeatherContext } from "../../context";

export default function Sidebar() {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [state, dispatch] = useContext(WeatherContext);
  
  /* outside click handling for mobile */ 
  const sidebarRef = useRef(null)
  const outsideClick = useOutsideClick(sidebarRef)
  useEffect(() => {
      if (sidebarOpen && !outsideClick) {
          toggle()
      }
  }, [outsideClick])

  /* toggle function for sidebar */
  function toggle() {
    setsidebarOpen(!sidebarOpen);
  }


  const unitText = useMemo(
    () => weatherUtils.getTemperatueType(state.unitType),
    [state.unitType]
  );

  return (
    <div className="sidebar">
      <ProSidebar breakPoint="md" toggled={sidebarOpen} ref={sidebarRef}>
        <Menu iconShape="square">
          <MenuItem><Link to="/">Dashboard</Link></MenuItem>
          <MenuItem><Link to="/settings">Settings</Link></MenuItem>
        </Menu>
        { state.locationWeatherData && state.place && <WeatherCard weather={state.locationWeatherData} unitText={unitText} place={state.defaultPlace}/> }
      </ProSidebar>
      <img src={menuIcon} alt="menu" className="menu__icon" onClick={toggle} />
    </div>
  );
}
