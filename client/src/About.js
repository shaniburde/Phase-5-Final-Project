import React from 'react';
import WeekContainer from './WeekContainer';


export default function About() {
  return (
    <div className="about">
        <h2 className="app-description">MissFit is a personal closet management app that ensures that you're the best dressed in the room.</h2>
        <br/>
        <br/>
        <h5 className="weather-title">Here's this week's weather forecast, choose an outfit accordingly!</h5>
        <WeekContainer />
    </div>
  )
}
