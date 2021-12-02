import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function navbar() {
  return (
    <nav className=" navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="">
        <Link to="excersises-tracker/" className="navbar-brand ml-5 ">
          ... Exercise Tracker
        </Link>
      </div>
      <div className="navbar-collapse justify-content-end ">
        <ul className="nav navbar-nav mr-auto mr-3">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Exercises
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create Exercise Log
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
