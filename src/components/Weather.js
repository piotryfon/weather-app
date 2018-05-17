import React from 'react';

const Weather = props => (
        <div>
            
            {props.city && props.country && <p>Location: {props.city}  {props.country}</p>}
            {props.city && props.country && <h3>Now:</h3>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.description && <p>Description: {props.description}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.pressure && <p>Pressure: {props.pressure}</p>}
            {props.wind && <p>Wind speed: {props.wind}</p>}

            {props.city && props.country && <h3>Forecast:</h3>} 
            {props.time1 && <p><b>Time:</b> {props.time1}</p>}
            {props.temperature1 && <p>Tempereture: {props.temperature1}</p>}
            {props.description1 && <p>Description: {props.description1}</p>}
            {props.pressure1 && <p>Pressure: {props.pressure1}</p>}
            {props.wind1 && <p>Wind speed: {props.wind1}</p>}

            {props.time2 && <p><b>Time:</b> {props.time2}</p>}
            {props.temperature2 && <p>Tempereture: {props.temperature2}</p>}
            {props.description2 && <p>Description: {props.description2}</p>}
            {props.pressure2 && <p>Pressure: {props.pressure2}</p>}
            {props.wind2 && <p>Wind speed: {props.wind2}</p>}
            {props.error && <p>{props.error}</p>}
                
        </div>
) ;
  
   
export default Weather;