import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "7aca2942856bab3c48dcd8e20dcf3d4a";
const adress = "http://api.openweathermap.org/data/2.5/weather?id=756135&appid=7aca2942856bab3c48dcd8e20dcf3d4a&units=metric";
class App extends React.Component {
    
    getWeather = async (e) => {
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=756135&appid=${API_KEY}&units=metric`);
    
        const data = await api_call.json();

        console.log(data);
    }
    render() {
        return(
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather />
            </div>
        )
    }
}
export default App;