import React from 'react'

const WeatherForm = (props) => {
     return (
          <form className="weather-form" onSubmit={props.onSubmit}>
               <input type="text" name="city" value={props.city} onChange={props.updateCity} className="weather-form__input" placeholder="City name" />
               <input type="text" name="countryCode" value={props.countryCode} onChange={props.updateCountryCode} className="weather-form__input" placeholder="Country code" />
               <input type="submit" value="Search" className="weather-form__submit" />
          </form>
     )
}
export default WeatherForm
