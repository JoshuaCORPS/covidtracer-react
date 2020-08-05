import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/covid-tracer.png";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light nav-col fixed-top border">
    <div className="container">
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="logo" width="39px" />
        <span className="brand"> COVID TRACER</span>
      </Link>
    </div>
  </nav>
);

export default Navigation;
