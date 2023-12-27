import React,{useContext} from 'react'
import "../navbar/NavBar.css"
import { NavLink } from "react-router-dom";
import { loginContext } from "../../contexts/loginContext";
function NavBar() {
  const activeLink = {
    color: "#ffaa00",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };
  const inactiveLink = {
    color: "#EEF0F2",
    fontSize: "1.2rem",
  };
  
  return (
    <>
      <div className='container'>     
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => {
                return isActive ? activeLink : inactiveLink;
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/Signup"
              style={({ isActive }) => {
                return isActive ? activeLink : inactiveLink;
              }}
            >
              Signup
            </NavLink>
          </li>

         
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Signin"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Login
              </NavLink>
            </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/Aboutus"
              style={({ isActive }) => {
                return isActive ? activeLink : inactiveLink;
              }}
            >
              Aboutus
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  </>
  )
}

export default NavBar;