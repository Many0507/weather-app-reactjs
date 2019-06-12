import React, { useState } from 'react';
import WeatherForm from './weatherForm';
import WeatherData from './weatherData'
import './css/styles.css'

const Weather = () => {
     const [values, setValues] = useState({})
     const [city, setCity] = useState('')
     const [countryCode, setCountryCode] = useState('')
     const appid = '9aad5bca4e0504486766a9ed943a973c'

     const fetchWeather = async () => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}&units=metric`
          const data = await fetch(url)
          const weatherObject = await data.json()
          updateValues(weatherObject)
          console.log(values)
     }
     const updateValues = (weatherObject) => {
          setValues({
               name: weatherObject.name,
               countryCode: weatherObject.sys.country,
               description: weatherObject.weather[0].description,
               temp: weatherObject.main.temp,
               maxtemp: weatherObject.main.temp_max,
               mintemp: weatherObject.main.temp_min,
               humedity: weatherObject.main.humidity,
               wind: weatherObject.wind.speed
          })
     }
     const updateCity = (e) => {
          setCity(e.target.value)
     }
     const updateCountryCode = (e) => {
          setCountryCode(e.target.value)
     }
     const onSubmit = (e) => {
          e.preventDefault()
          fetchWeather()
     }
     return (
          <div className="weather-app">
               <WeatherData values={values} />
               <WeatherForm city={city} countryCode={countryCode} updateCity={updateCity} updateCountryCode={updateCountryCode} onSubmit={onSubmit} />
          </div>
     )
}

export default Weather;
