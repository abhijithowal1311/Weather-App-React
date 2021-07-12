import { Popover } from "reactstrap";
import React, { useState } from "react";
import { PopoverBody, PopoverHeader } from "reactstrap";
import SearchBar from "./SearchBar";
import userIcon from "../../assets/header/user.png";
import Toggle from "react-toggle";

export default function Header({ user, theme, changeTheme }) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  const themeChange = (e) => {
    changeTheme(theme == "light" ? "dark" : "light")
  }

  return (
    <div className="header">
      <SearchBar className="header__searchbar" />
      <div id="userPopover" className="user-option">
        <img src={userIcon} alt="" className="user__icon" />
        {user && user.name ? user.name : "user"}
      </div>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        trigger="legacy"
        target="userPopover"
        toggle={toggle}
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
