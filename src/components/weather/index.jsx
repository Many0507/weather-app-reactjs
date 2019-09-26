import React, { useState, useEffect } from 'react';
import Header from './header'
import WeatherForm from './weatherForm'
import WeatherData from './weatherData'
import './scss/styles.scss'

const Weather = () => {
     const [city, setCity] = useState('')
     const [countryCode, setCountryCode] = useState('')
     const [values, setValues] = useState({})
     const [error, setError] = useState(false)
     const appid = process.env.REACT_APP_APPID
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}&units=metric`

     // se ejecuta al cargar el componente:
     useEffect(() => {
          if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(location => {
                    const lon = location.coords.longitude;
                    const lat = location.coords.latitude;
                    const geolocationUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`
                    fetchWeather(geolocationUrl)
               }, () => fetchWeatherDefault())
          } else {
               console.log('La geolocalizacion no es soportada en este navegador')
               fetchWeatherDefault()
          }
          // eslint-disable-next-line
     }, [])

     // Se consultan los datos a la API
     const fetchWeather = async url => {
          try {
               const data = await fetch(url)
               const weatherObject = await data.json()
               updateValues(weatherObject)
               setError(false)
          } catch (error) {
               console.log('peticion fallida')
               setError(true)
          }
     }

     // Peticion GET por default
     const fetchWeatherDefault = () => {
          const urlDefault = `https://api.openweathermap.org/data/2.5/weather?q=Mexico%20City,mx&appid=${appid}&units=metric`
          fetchWeather(urlDefault)
     }

     // Se actualizan los valores con los de la API y se guardan en el estado (values)
     const updateValues = weatherObject => {
          setValues({
               name: weatherObject.name,
               countryCode: weatherObject.sys.country,
               description: weatherObject.weather[0].description,
               icon: weatherObject.weather[0].icon,
               temp: weatherObject.main.temp,
               maxtemp: weatherObject.main.temp_max,
               mintemp: weatherObject.main.temp_min,
               humedity: weatherObject.main.humidity,
               wind: weatherObject.wind.speed
          })
     }

     // Cada cambio en el formulario, se guarda el nombre de la ciudad que ingrese el usuario
     const updateCity = e => {
          setCity(e.target.value)
     }

     // Cada cambio en el formulario, se guarda el nombre del codigo que ingrese el usuario
     const updateCountryCode = e => {
          setCountryCode(e.target.value)
     }

     // Al realizar la accion "submit" se realiza la consulta a la API
     const onSubmit = (e) => {
          e.preventDefault()
          fetchWeather(url)
     }

     return (
          <>
               <Header />
               <WeatherForm city={city} countryCode={countryCode} updateCity={updateCity} updateCountryCode={updateCountryCode} onSubmit={onSubmit} />
               <WeatherData values={values} error={error} />
          </>
     )
}

export default Weather;
