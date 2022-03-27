import React from 'react';
import { Link } from 'react-router-dom';

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
         <div className="nav-bar">
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
        </div>
    </>
  )
}