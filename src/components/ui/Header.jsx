import { Popover } from "reactstrap";
import React, { useState } from "react";
import { PopoverBody, PopoverHeader } from "reactstrap";
import SearchBar from "./SearchBar";
import userIcon from "../../assets/header/user.png"

export default function Header({user}) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div className="header">
      <SearchBar className="header__searchbar"/>  
      <div id="userPopover" className="user-option">
        <img src={userIcon} alt="" className="user__icon"/>
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
            <span>dark theme</span>
            <input type="radio" />
        </PopoverBody>
      </Popover>
    </div>
  );
}
