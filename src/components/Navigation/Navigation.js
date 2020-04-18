import React from "react";
import "./Navigation.css"
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li>
          <Link to="/" className="link" >Home</Link>
        </li>
        <li>
          <Link to="/create" className="link">Create Post</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
