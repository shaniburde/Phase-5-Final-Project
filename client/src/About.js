import React from 'react';
import WeekContainer from './WeekContainer';


export default function About() {
  return (
    <div className="about">
        <h2 className="app-description">MissFit is a closet management app that dares you to be different.</h2>
        <br/>
        <br/>
        <br/>
        <h5 className="weather-title">Here's this week's weather forecast, choose an outfit accordingly!</h5>
        <br/>
        <WeekContainer />
    </div>
  )
}
