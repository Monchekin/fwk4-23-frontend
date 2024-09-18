import React, { useState } from "react";
import "./NavbarStyle.css";

// use module.css?

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const openSidenav = () => setIsSideNavOpen(true);
  const closeSidenav = () => setIsSideNavOpen(false);

  return (
    <div>
      {!isSideNavOpen && (
        <button className="openNavButton" onClick={openSidenav} aria-label="Open navbar">
          ☰
        </button>
      )}
      {isSideNavOpen && (
        <div className={`sidenav ${isSideNavOpen ? "open" : "closed"}`}>
          <button className="closeNavButton" onClick={closeSidenav} aria-label="Close navigation">X</button>
          <nav>
            <p onClick={() => alert('Go to Profile')}>PROFILE</p>
            <p onClick={() => alert('Go to Workspace')}>WORKSPACE</p>
            <p onClick={() => alert('Go to Home')}>HOME</p>
          </nav>
          <div>
          <img
          src="https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Profile"
        />
            <p>Logged in: Malin</p>
          </div>
          <button onClick={() => alert('Logging out')}>LOGOUT</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;