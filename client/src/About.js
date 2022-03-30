import React, { useState } from 'react';
import WeekContainer from './WeekContainer';


export default function About() {
  const [show, setShow] = useState(false)
 
  return (
    <div className="about">
       <br/>
       <br/>
        <h2 className="app-description">MissFit is a closet management app that dares you to be different.</h2>
        <h5 className="app-description">Keep track of everything you have in your closet in this one simple app.</h5>
        <h6 className="app-description">Create and manage outfits so that you never have trouble finding something to wear, no matter the occasion.</h6>
        <h6 className="app-description">Wear your personal style with confidence and don't be afraid to be a misfit.</h6>
        <br/>
        <br/>
        <button onClick={() => setShow((show) => !show)} className="weather-button">{show ? "Hide Weather" : "Check Weather"}</button>
        <br/>
        <br/>
        {show ? (
        <> 
        <br/>
        <h5 className="weather-title">Here's this week's weather forecast, choose an outfit accordingly!</h5>
        <br/>
        <WeekContainer />
        </>) : (null)}
    </div>
  )
}
