import React from 'react';
const moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  return (
      <div className="col">
        <div className="card" style={{borderRadius: "35px", padding: "15px", border: "none", color: "#012F3C", backgroundColor: "#F7F7F3"}}>
            <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
            <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
            <i className={imgURL}></i>
            <h2>{Math.round(reading.main.temp)} °F</h2>
            <div className="card-body">
            <p className="card-text">{reading.weather[0].description}</p>
            </div>
        </div>
      </div>
  )
}

export default DayCard;