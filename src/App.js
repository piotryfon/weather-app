import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './index.css';
const API_KEY = "7aca2942856bab3c48dcd8e20dcf3d4a";

class App extends React.Component {
    
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        
    }
    
    getWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const api_call_1 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
        const data = await api_call.json();
        const data1 = await api_call_1.json();
        if(city && country) {
        console.log(data);
        console.log(data1);
        this.setState({
            city: data.name,
            country: data.sys.country,

            temperature: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            pressure: data.main.pressure,
            wind: data.wind.speed,

            time1: data1.list[1].dt_txt,
            temperature1: data1.list[1].main.temp, 
            description1: data1.list[1].weather[0].description,
            pressure1: data1.list[1].main.pressure,
            wind1: data1.list[1].wind.speed,

            time2: data1.list[3].dt_txt,
            temperature2: data1.list[3].main.temp, 
            description2: data1.list[3].weather[0].description,
            pressure2: data1.list[3].main.pressure,
            wind2: data1.list[3].wind.speed,
            
            error: "",
        });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                pressure: undefined,
                wind: undefined,

                time1: undefined,
                temperature1: undefined,
                description1: undefined,
                pressure1: undefined,
                wind1: undefined,
                time2: undefined,

                temperature2: undefined,
                description2: undefined,
                pressure2: undefined,
                wind2: undefined,

                error: "Please enter the value.",
                
            });
            
        }
    }
    
    render() {
        return(
            <div id="mainDiv">
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                pressure={this.state.pressure}
                wind={this.state.wind}
                time1={this.state.time1}
                temperature1={this.state.temperature1}
                description1={this.state.description1}
                pressure1={this.state.pressure1}
                wind1={this.state.wind1}
                time2={this.state.time2}
                temperature2={this.state.temperature2}
                description2={this.state.description2}
                pressure2={this.state.pressure2}
                wind2={this.state.wind2}
                error={this.state.error}
                />
            </div>
        )
    }
}
export default App;