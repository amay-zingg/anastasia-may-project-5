import React from 'react';

const Weather = (props) => {
	return (
		<div className="weather">
			<h2 className="description">
				<img
					src={`${props.weatherIcon}`}
					alt="Weather Icons Designer: Andi Nur Abdillah (https://www.iconfinder.com/andinur)"
				/>
				<p>{props.description}</p>
			</h2>
			<h2 className="temp">
				<p>{props.temp}&deg;</p>
			</h2>
			<h2 className="location">
				<p>{props.city}</p>
			</h2>
		</div>
	);
};

export default Weather;
