import React from 'react';
import NavBar from './NavBar';

export default function Header({ user, setUser, onLogout }) {


  return (
    <div className="header-background">
      <h1 className="header">MissFit</h1>
      <NavBar user={user} setUser={setUser} onLogout={onLogout}/>
    </div>
  )
}