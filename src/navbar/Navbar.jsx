import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link, useNavigate } from "react-router-dom";
// use module.css?

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const navigate = useNavigate();

  const openSidenav = () => setIsSideNavOpen(true);
  const closeSidenav = () => setIsSideNavOpen(false);

  const handleLogout = () => {
    navigate("/");
    console.log("Logout button has been clicked!");
  };

  return (
    <div>
      {!isSideNavOpen && (
        <button
          className="openNavButton"
          onClick={openSidenav}
          aria-label="Open navbar"
        >
          ☰
        </button>
      )}
      {isSideNavOpen && (
        <div className={`sidenav ${isSideNavOpen ? "open" : "closed"}`}>
          <button
            className="closeNavButton"
            onClick={closeSidenav}
            aria-label="Close navigation"
          >
            X
          </button>
          <nav>
            <ul>
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
              <li>
                <Link to="/workspace">WORKSPACE</Link>
              </li>
              <li>
                <Link to="/home">HOME</Link>
              </li>
            </ul>
          </nav>
          <div>
            <img
              src="https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Profile"
            />
            <p>Logged in: Malin</p>
          </div>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
