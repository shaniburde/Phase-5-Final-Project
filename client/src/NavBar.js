import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./images/MissFit-header.jpeg";

export default function NavBar({ user, setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#F7F7F3"}}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src={Logo} className="header-logo"/>
        <p className="welcome">Welcome, {user.username}!</p>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
      style={{border: "none"}}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#"><Link  exact to="/" onClick={handleLogoutClick} className="nav-button">Logout</Link></a>
          </li>
          <br/>
          <li class="nav-item">
          <a class="nav-link" href="#"><Link exact to="/about" className="nav-button">About</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Link exact to="/my_closet" className="nav-button">My Closet</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Link exact to="/my_outfits" className="nav-button">My Outfits</Link></a>
          </li>
        </ul>
    </div>
  </div>
</nav>
    
    
         {/* <div className="nav-bar">
            <div>
            <p className="welcome">Welcome, {user.username}!</p>
            <Link  exact to="/" onClick={handleLogoutClick} className="logout-button">Logout</Link>
            </div>
            <Link exact to="/about" className="nav-button">About</Link>
            <br/>
            <Link exact to="/my_closet" className="nav-button">My Closet</Link>
            <br/>
            <Link exact to="/my_outfits" className="nav-button">My Outfits</Link>
            <br/>
        </div> */}
    </>
  )
}