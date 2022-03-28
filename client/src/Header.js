import React from 'react';
import NavBar from './NavBar';
import Logo from "./images/MissFit-header.jpeg";

export default function Header({ user, setUser, onLogout }) {


  return (
    <div>
      <div className="header-logo">
        <img src={Logo} className="logo"/>
      </div>
      <NavBar user={user} setUser={setUser} onLogout={onLogout}/>
    </div>
  )
}