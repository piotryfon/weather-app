import React from 'react';

const Form = props => (

    <form onSubmit={props.getWeather}>
        <input className="input" type="text" name="city" placeholder="City..."/>
        <input  className="input"type="text" name="country" placeholder="Country..."/>
        <button className="input btn">Get Weather</button>
    </form>
);
export default Form;