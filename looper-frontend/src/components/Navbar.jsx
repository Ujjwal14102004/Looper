import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css"; // make sure global.css exists

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo">Looper</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
