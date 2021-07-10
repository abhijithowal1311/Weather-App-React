import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../../styles/sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ProSidebar className="pro-sidebar">
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Component 1</MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
}
