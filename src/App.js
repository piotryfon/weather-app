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
    
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const api_call_1 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
        const data = await api_call.json();
        const data1 = await api_call_1.json();
        if(city && country) {
        console.log(data);
        console.log(data1);
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            time1: data1.list[1].dt_txt,
            temperature1: data1.list[1].main.temp, 
            error: "",
        });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                time1: undefined,
                temperature1: undefined,
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
                time1={this.state.time1}
                temperature1={this.state.temperature1}
                error={this.state.error}
                />
            </div>
        )
    }
}
export default App;