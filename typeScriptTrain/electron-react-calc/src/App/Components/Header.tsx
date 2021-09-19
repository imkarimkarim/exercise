import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}>
      <h3 className="title hvr-float-shadow">Simple Calculator</h3>
      <Link to="/">Calculator</Link>
      <Link to="/help">Help</Link>
    </div>
  );
};

export default Header;
