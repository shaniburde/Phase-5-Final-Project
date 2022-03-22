import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from './Header';
import Login from './Login';
import About from './About';
import MainContainer from './MainContainer';
import ShowClosetItem from './ShowClosetItem'


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout() {
    setUser(null);
  }

  if (!user) return <Login onLogin={setUser} />;


  return (
    <div className="App">
      <Header user={user} setUser={setUser} onLogout={handleLogout} />
      <Routes>
          <Route exact path="*" element={
            <MainContainer user={user} />}/> 
          <Route exact path="/about" element={
            <About user={user} />}/>  
          <Route exact path="/closet_items/:id" element={
            <ShowClosetItem />}/>
      </Routes>
    </div>
  );
}

export default App;
