import React from 'react';
import apiConfig from './apiKeys';
import DayCard from './DayCard';

class WeekContainer extends React.Component {
    state = {
      fullData: [],
      dailyData: []
    }
  
    componentDidMount = () => {
      const weatherURL =
      `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=9b78046ef4f66b0fe3f0d57ab2c54968`
  
      fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.setState({
          fullData: data.list,
          dailyData: dailyData
        }, () => console.log(this.state))
      })
    }

    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
      }
    
  
    render() {
      return (
    <div className="weather-container">
        <div className="row row-cols-auto">
            {this.formatDayCards()}
        </div>
    </div>
      )
    }
  }
  
  export default WeekContainer;