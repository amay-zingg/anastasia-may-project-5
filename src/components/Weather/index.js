import React from 'react';

const Weather = (props) => {
	return (
		<div className="weather-bar">
			<p className="weather description">
				<img src={`${props.weatherIcon}`} alt="Weather Icon" />
				{props.description}
			</p>
			<p className="weather temp">{props.temp}&deg;</p>
			<p className="weather location">{props.city}</p>
		</div>
	);
};

export default Weather;
