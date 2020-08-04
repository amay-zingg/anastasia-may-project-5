import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.scss';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Weather from './Weather/index';
import MapContainer from './Map/index';
import thunderstorm from '../icons/thunderstorm.png';
import rainy from '../icons/rainy.png';
import snow from '../icons/snow.png';
import pcloudy from '../icons/partlyCloudy.png';
import cloudy from '../icons/cloudy.png';
import clear from '../icons/sunny.png';

class App extends Component {
	constructor() {
		super();
		this.state = {};
		this.getWeather();
		this.weatherIcon = {
			Thunderstorm: thunderstorm,
			Rain: rainy,
			Snow: snow,
			Clouds: pcloudy,
			Clouds2: cloudy,
			Clear: clear
		};
	}

	get_WeatherIcon(icons, rangeId) {
		switch (true) {
			case rangeId >= 200 && rangeId <= 232:
				this.setState({ icon: this.weatherIcon.Thunderstorm });
				break;
			case rangeId >= 500 && rangeId <= 531:
				this.setState({ icon: this.weatherIcon.Rain });
				break;
			case rangeId >= 600 && rangeId <= 622:
				this.setState({ icon: this.weatherIcon.Snow });
				break;
			case rangeId === 800:
				this.setState({ icon: this.weatherIcon.Clear });
				break;
			case rangeId >= 801 && rangeId <= 802:
				this.setState({ icon: this.weatherIcon.Clouds });
				break;
			case rangeId >= 803 && rangeId <= 804:
				this.setState({ icon: this.weatherIcon.Clouds2 });
				break;
			default:
				this.setState({ icon: this.weatherIcon.Clouds });
		}
	}

	getWeather = async () => {
		const callWeather = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
		);

		const response = await callWeather.json();

		this.setState({
			description: response.weather[0].description,
			temp: Math.round(parseFloat(response.main.feels_like)),
			city: response.name
		});

		this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
	};

	render() {
		return (
			<Router>
			<Fragment>

				<Landing/>

				<header className="Header">
					<Link to="/" className="pageTitle" title="Go back to main map">
						<h1>Kensington Art Tour</h1>
					</Link>
					<Weather
						weatherIcon={this.state.icon}
						description={this.state.description}
						temp={this.state.temp}
						city={this.state.city}
					/>
				</header>

				<main className="mainContent">
					<div className="map">
						<MapContainer />
					</div>
				</main>

				<Footer />
			</Fragment>
			</Router>
		);
	}
}

export default App;
