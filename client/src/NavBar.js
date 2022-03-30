import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "./images/MissFit-header.jpeg";

export default function NavBar({ user, setUser }) {

  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((s) => !s);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const linkStyle = {
    margin: ".5rem",
    textDecoration: "none",
    border: "none",
    color: '#242717',
    backgroundColor: "#B9C3AC",
    padding: "10px",
    borderRadius: "15px",
  };
  

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#F7F7F3"}}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src={Logo} className="header-logo"/>
        <p className="welcome">Welcome, {user.username}!</p>
      </a>
      {show ? (null) : (
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item" className="menu-toggler"> 
          <a class="nav-link">
              <span class="navbar-toggler-icon" onClick={toggleShow} ></span>
          </a>
          </li>
        </ul>
      )}
      {show ? (
        <>
        <div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#"><NavLink style={linkStyle} exact to="/" onClick={handleLogoutClick} className="nav-button">Logout</NavLink></a>
          </li>
          <br/>
          <li class="nav-item">
          <a class="nav-link" href="#"><NavLink style={linkStyle} to="/about" className="nav-button">About</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><NavLink style={linkStyle}  to="/my_closet" className="nav-button">My Closet</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><NavLink style={linkStyle} to="/my_outfits" className="nav-button">My Outfits</NavLink></a>
          </li>
          <li class="nav-item" className="menu-toggler"> 
          <a class="nav-link">
              <span class="navbar-toggler-icon" onClick={toggleShow} ></span>
          </a>
          </li>
        </ul>
    </div>
    </>) : (null)}
  </div>
</nav>
</>
  )
}
