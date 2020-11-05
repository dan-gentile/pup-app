import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      Pupster
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={
                location.pathname === "/discover"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={
                location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
