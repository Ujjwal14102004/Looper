import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ background: "#222", padding: "1rem" }}>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          margin: 0,
          color: "white",
        }}
      >
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/dashboard" style={{ color: "white", textDecoration: "none" }}>Dashboard</Link></li>
        <li><Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
