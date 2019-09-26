import React from 'react'

const WeatherForm = ({ city, countryCode, updateCity, updateCountryCode, onSubmit }) => (
     <div className="weather-form">
          <form className="form" onSubmit={onSubmit}>
               <h2 className="form__title">The weather in...</h2>
               <input type="text" className="form__input" name="city" placeholder="City" value={city} onChange={updateCity} />
               <input type="text" className="form__input" name="countryCode" placeholder="Country code" value={countryCode} onChange={updateCountryCode} />
               <button type="submit" className="form__btn">Buscar</button>
          </form>
     </div>
)

export default WeatherForm
