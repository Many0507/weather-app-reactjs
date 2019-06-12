import React, { Fragment } from 'react'

const WeatherForm = (props) => {
     return (
          <Fragment>
               <form onSubmit={props.onSubmit}>
                    <input type="text" name="city" value={props.city} onChange={props.updateCity} />
                    <input type="text" name="countryCode" value={props.countryCode} onChange={props.updateCountryCode} />
                    <input type="submit" value="submit" />
               </form>
          </Fragment>
     )
}
export default WeatherForm
