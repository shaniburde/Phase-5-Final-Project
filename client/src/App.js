import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"; 
import Header from './Header';
import Login from './Login';
import About from './About';
import ShowClosetItem from './ShowClosetItem';
import OutfitContainer from './OutfitContainer';
import ClosetContainer from './ClosetContainer';
import ShowOutfit from './ShowOutfit'


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
          <Route exact path="/about" element={
            <About user={user} />}/> 
          <Route exact path="my_closet" element={
            <ClosetContainer user={user} />}/> 
          <Route exact path="/about" element={
            <About user={user} />}/>  
          <Route exact path="/closet_items/:id" element={
            <ShowClosetItem />}/>
          <Route exact path="/my_outfits" element={
            <OutfitContainer />}/>
          <Route exact path="/my_outfits/:id" element={
            <ShowOutfit />}/>
      </Routes>
    </div>
  );
}

export default App;
