import React, { Component, Fragment } from 'react';
import '../App.scss';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import Weather from './Weather/index';
import MapContainer from './Map/index';
// import firebase from './Firebase/index';
// import Axios from 'axios';
// % PUBLIC_URL %

ReactDOM.render(
	<div>
		<Favicon url="favicon.ico" />
	</div>,
	document.getElementById('root')
);

// * * * * The api call for the weather
const API_key_weather = '1ab6b9b8515ef10ef6711d52af44a94b';

class App extends Component {
	constructor() {
		super();
		this.state = {
			// artData: []
		};
		this.getWeather();
		this.weatherIcon = {
			Thunderstorm: './icons/thunderstorm.png',
			Rain: './icons/rainy.png',
			Snow: './icons/snow.png',
			Clouds: './icons/partlyCloudy.png',
			Clouds2: './icons/cloudy.png',
			Clear: './icons/sunny.png'
			// night: '/assets/icons/moon.png'
			//didnt add drizzle or atmosphere https://openweathermap.org/weather-conditions
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
			`https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=${API_key_weather}`
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
			<Fragment>
				<header className="appHeader">
					<h1>Kensington Art Tour</h1>
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

				{/* <div className="infoWindow">
						<div className="locationImage">
							<img src="./images/KensingtonCarAndWallArt.jpg" alt="Placeholder"/>
							<p className="lastUpdate">Image Last Updated</p>
						</div>
						<div className="locationInfo">
							<h3>Image Title</h3>
							<p>Location Here</p>
							<p>Artist Name Here</p>
							<p className="artistSocial">
                    			<a href="#socialLinkHere">
                    			<i className="fab fa-instagram"></i>
                              	<span class="visuallyhidden">Instagram (opens a new window)</span>
								<span class="handle">INSTAGRAM ACCOUNT</span>
								</a>
							</p>
						</div>
					</div> */}

				<footer className="appFooter">
					<p>
						<i className="far fa-copyright">
							<span className="visuallyhidden">Copyright Symbol</span>
						</i>{' '}
						2020 Anastasia May <i className="fab fa-canadian-maple-leaf" />
						<span className="visuallyhidden">Maple Leaf Icon</span> Explore Toronto
					</p>
				</footer>
			</Fragment>
		);
	}
}

export default App;
