import React from 'react';

const Weather = props => (
        <div>
            
            {props.city && props.country && <p>Location: {props.city}  {props.country}</p>}
            {props.city && props.country && <h3>Now:</h3>} 
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.description && <p>Description: {props.description}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.city && props.country && <h3>Forecast:</h3>} 
            {props.time1 && <p>Time: {props.time1}</p>}
            {props.temperature1 && <p>Tempereture: {props.temperature1}</p>}
            {props.error && <p>{props.error}</p>}
                
        </div>
) ;
  
   
export default Weather;