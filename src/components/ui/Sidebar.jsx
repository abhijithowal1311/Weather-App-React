import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../../styles/sidebar.scss";
import menuIcon from "../../assets/sidebar/hamburger.svg";
import menuIconDark from "../../assets/sidebar/menu.png";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Link } from "react-router-dom";
import WeatherCard from "./WeatherCard";
import weatherUtils from "../../utils/weatherUtilities";
import { WeatherContext } from "../../context";
import { Popover } from "reactstrap";
import { PopoverBody } from "reactstrap";
import userIcon from "../../assets/header/user.png"
import Toggle from "react-toggle";


export default function Sidebar({user, theme, changeTheme}) {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [state, dispatch] = useContext(WeatherContext);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle2 = () => setPopoverOpen(!popoverOpen);

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

  const themeChange = (e) => {
    changeTheme(theme == "light" ? "dark" : "light")
  }


  const unitText = useMemo(
    () => weatherUtils.getTemperatueType(state.unitType),
    [state.unitType]
  );

  return (
    <div className={`${state.appTheme == "dark" ? "sidebar-dark" : "sidebar"}`}>
      <ProSidebar breakPoint="md" toggled={sidebarOpen} ref={sidebarRef}>
        <Menu iconShape="square">
          <MenuItem><Link to="/">Dashboard</Link></MenuItem>
          <MenuItem><Link to="/settings">Settings</Link></MenuItem>
        </Menu>
        { state.locationWeatherData && state.place && <WeatherCard weather={state.locationWeatherData} unitText={unitText} place={state.defaultPlace}/> }
      </ProSidebar>
      <img src={state.appTheme=="dark" ? menuIconDark :menuIcon} alt="menu" className="menu__icon" onClick={toggle} />
      <div id="userPopover" className="user-option">
        <img src={userIcon} alt="" className="user__icon"/>
        {user && user.name ? user.name : "user"}
      </div>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        trigger="legacy"
        target="userPopover"
        toggle={toggle2}
      >
          <PopoverBody className="user_info__options">
          {/* <span>dark theme</span>
            <input type="radio" /> */}
          <label className="dark_theme__option">
            <span>Dark theme</span>
            <Toggle
              // defaultChecked={this.state.tofuIsReady}
              icons={false}
              onChange={themeChange}
              checked={theme == "dark"}
            />
          </label>
        </PopoverBody>
      </Popover>
    </div>
  );
}
