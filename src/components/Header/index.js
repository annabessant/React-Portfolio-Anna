import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div>

    <div className="header text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
    </div>
  );
}

export default Header;
