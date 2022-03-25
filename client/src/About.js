import React from 'react';
import WeekContainer from './WeekContainer';
import Logo from "./images/MissFit-Logo-Blue.png"



export default function About() {
  return (
    <div className="about">
        <img src={Logo} className="logo"/>
        <br/>
        <br/>
        MissFit is a personal closet management app that ensures that you're the best dressed in the room.
        <br/>
        <WeekContainer />
    </div>
  )
}
