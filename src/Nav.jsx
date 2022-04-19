import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./jeevitiv.jpg";
export const Nav = () => {
  const kuchbhi = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <div>
      <div className="nav">
        {/* <p className="brand">Relevel Social Connector</p> */}
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <NavLink style={kuchbhi} to="/" className="nave">
          Home
        </NavLink>
        <NavLink style={kuchbhi} to="/signup" className="nave">
          Signup
        </NavLink>
        <NavLink style={kuchbhi} to="/login" className="nave">
          LogIn
        </NavLink>
      </div>
    </div>
  );
};
