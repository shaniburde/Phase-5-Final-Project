import React from 'react';
import WeekContainer from './WeekContainer';


export default function About() {
  return (
    <div className="about">
        <br/>
        <br/>
        MissFit is a personal closet management app that ensures that you're the best dressed in the room.
        <br/>
        <br/>
        <h5>Here's this week's weather forecast, choose an outfit accordingly!</h5>
        <WeekContainer />
    </div>
  )
}
