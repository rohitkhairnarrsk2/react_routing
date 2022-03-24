import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/post">Post</Link>
            </li>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
