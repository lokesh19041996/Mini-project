import React from "react";
import { Link } from "react-router-dom";
import './nav.css'

const Nav = () => {
  return (
    <div>
      <header className="header" role="banner">
        <h1 className="logo">
          <a href="#">
            Customer <span>Management</span>
          </a>
        </h1>
        <div className="nav-wrap">
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <li>
                <Link to="/list">
                  <a href="#">Customers</a>
                </Link>
              </li>
              <li>
                <Link to="/order">Orders</Link>
              </li>
              
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      ;
    </div>
  );
};

export default Nav;