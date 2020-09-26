import React from "react";
import "./Header.styles.scss";

import notificationButton from "../assets/icons/notificationButton.png"

function Header({ title }) {
  return <div className="header d-flex justify-content-between align-items-center p-2">
    <div style={{ fontWeight: 800, color: "white", fontSize: "27px" }}>{title}</div>
    <img src={notificationButton} style={{ width: "48px", height: "48px" }}/>
  </div>;
}

export default Header;
