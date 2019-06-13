import React from 'react'

const WeatherData = (props) => {
     return (
          <div className="weather-data">
               <p className="weather-error">{props.error ? 'Ha ocurrido un error, por favor verifique sus datos e intentelo de nuevo' : ''}</p>
               <header className="weather-header">
                    <h2 className="weather-header__title">{props.values.name} / {props.values.countryCode}</h2>
                    <p className="weather-header__description">{props.values.description}</p>
                    <p className="weather-header__temp">{props.values.temp} °C</p>
               </header>
               <section className="weather-body">
                    <p className="weather-body__maxtemp">maximum temperature: <span>{props.values.maxtemp} °C</span> </p>
                    <p className="weather-body__mintemp">Minimum temperature: <span>{props.values.mintemp} °C</span> </p>
                    <p className="weather-body__humedity">Humedity: <span>{props.values.humedity} %</span></p>
                    <p className="weather-body__wind">wind: <span>{props.values.wind} m/s</span></p>
               </section>
          </div>
     )
}
export default WeatherData
