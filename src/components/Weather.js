import React from 'react';

class Weather extends React.Component {
  
    render() {
        return(
            <div>
                <p>Location: {this.props.city}  {this.props.country}</p>
                <p>Temperature: {this.props.temperature}</p>
                <p>Description: {this.props.description}</p>
                <p>Humidity: {this.props.humidity}</p>
                
            </div>
        )
    }
}
export default Weather;