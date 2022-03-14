import React from "react";
import { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import number from 'easy-number-formatter';


function getCountry(capital) {
    return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {

    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=09fb0009d4aedde7898299c162f2f85c`);
}

class CountrySingle extends Component {

    state = {
        country: {} ,
        weather: {},
        isLoading: true
    };

    componentDidMount() {
        Promise.all([getCountry(this.props.params.name), getWeather(this.props.params.name)])
        .then((result) => {
            this.setState({country: result[0].data, weather: result[1].data, isLoading: false});
            console.log(this.state.country[0]);
        });
    }
    render() {
        if (this.state.isLoading) {
            return ( <Loader /> )
        } else {
            return (
                
                <main>
                    <div className="singleCountryContainer">
                    <h2>Current weather in {this.state.country[0].capital}</h2>
                    <h2>{Math.round(this.state.weather.main.temp - 273.15)} °C </h2>
                    <h2>It is {this.state.weather.weather[0].description}!</h2>
                    <img src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`} alt='current weather'/>
                    <h2>Wind speed is {this.state.weather.wind.speed}</h2>
                    

                    <div className='weatherCard'>
                        <div className='single_head'>
                            <h1>{this.state.country[0].name}</h1>
                            <img src={this.state.country[0].flags.png} alt={this.state.country[0].name}/>
                        </div>
                        <div className='single_body'>
                            <p>The local name of the country is<span> {this.state.country[0].nativeName} </span>.</p>
                            <p><span> {this.state.country[0].capital}</span> is the capital of this country.</p>
                            <p>Located in region: {this.state.country[0].subregion} </p>
                            <p>Population of {this.state.country[0].name}<span> {number.formatNumber(this.state.country[0].population)}</span> </p>
                            <p>Currency(ies): {this.state.country[0].currencies.map((mon, i) => (<span key={i}>{mon.name} - {mon.symbol}</span>))}</p>
                            <p>Language(s): {this.state.country[0].languages.map((lang, i) => (<span key={i}>{lang.name} </span>))}</p>
                            <div className='weatherPicture'>
                            </div>
                            </div>





                        </div>
                    </div>
                </main>
            );
        }
    };
};

export default CountrySingle;
