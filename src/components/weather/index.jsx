import React, { useState, useEffect } from 'react';
import WeatherForm from './weatherForm';
import WeatherData from './weatherData'
import './css/styles.css'

const Weather = () => {
     // Estados
     const [values, setValues] = useState({})
     const [city, setCity] = useState('')
     const [countryCode, setCountryCode] = useState('')
     const [error, setError] = useState(false)
     // Constantes
     const appid = '9aad5bca4e0504486766a9ed943a973c'
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}&units=metric`
     // Funcion que se ejecuta al cargar el componente
     useEffect(() => {
          const urlDefault = `https://api.openweathermap.org/data/2.5/weather?q=Merida,mx&appid=${appid}&units=metric`
          fetchWeather(urlDefault)
          // eslint-disable-next-line
     }, [])
     // Se consultan los datos a la API
     const fetchWeather = async (url) => {
          try {
               const data = await fetch(url)
               const weatherObject = await data.json()
               updateValues(weatherObject)
               setError(false)
          } catch (err) {
               console.log('peticion fallida')
               setError(true)
          }
     }
     // Se actualizan los valores con los de la API y se guardan como nuevo estado 
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
     // Cada cambio en el formulario, se guarda el nombre de la ciudad que ingrese el usuario
     const updateCity = (e) => {
          setCity(e.target.value)
     }
     // Cada cambio en el formulario, se guarda el nombre del codigo que ingrese el usuario
     const updateCountryCode = (e) => {
          setCountryCode(e.target.value)
     }
     // Al realizar la accion "submit" se realiza la consulta a la API
     const onSubmit = (e) => {
          e.preventDefault()
          fetchWeather(url)
     }
     return (
          <div className="weather-app">
               <WeatherForm city={city} countryCode={countryCode} updateCity={updateCity} updateCountryCode={updateCountryCode} onSubmit={onSubmit} />
               <WeatherData values={values} error={error} />
          </div>
     )
}

export default Weather;
