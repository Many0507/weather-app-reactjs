import React from 'react'

const WeatherData = ({ values, error }) => (
     <div className="container">
          <main className="weather-app">
               <div className="weather-app__resume">
                    <p className="weather-error">{error ? 'Ha ocurrido un error, por favor verifique sus datos e intentelo de nuevo' : ''}</p>
                    <h3 className="weather-name">{values.name} / <span className="weather-code">{values.countryCode}</span></h3>
                    {values.icon
                         ?
                         <img src={`http://openweathermap.org/img/w/${values.icon}.png`} className="weather-icon" alt="weather-icon" />
                         :
                         <img src={`http://openweathermap.org/img/w/01d.png`} className="weather-icon" alt="weather-icon" />}
                    <p className="weather-temp">{values.temp} <span className="weather-temp__metric">°C</span></p>
                    <p className="weather-description">{values.description}</p>
               </div>
               <div className="weather-app__data">
                    <p className="weather-maxmintemp">max temp: <span className="weather-maxtemp">{values.maxtemp} °C</span> / min temp: <span className="weather-mintemp">{values.mintemp} °C</span></p>
                    <p className="weather-humedity">humedity: <span className="weather-humedity__value">{values.humedity} %</span></p>
                    <p className="weather-wind">wind: <span className="weather-wind__value">{values.wind} m/s</span></p>
               </div>
          </main>
     </div>
)

export default WeatherData
