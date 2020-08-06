import React from 'react';
import '../App.scss';
import Header from './Header.js';
import MapContainer from './Map.js';
import Footer from './Footer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Slideshow from './Slideshow';
import bikeRackDrawing from '../images/KensingtonTitle.png';

function closeIntro() {
	document.getElementById('landing-overlay').style.visibility = 'hidden';
}

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<main>
						<Route path="/" component={Landing} />
						<Route path="/" exact component={MapContainer} />
						<Route path="/slideshow" component={Slideshow} />
					</main>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

const Landing = () => (
	<div className="landing-overlay" id="landing-overlay">
		<div className="landing">
			<img src={bikeRackDrawing} alt="Kensington Bike Rack Title Image" className="title-photo" />
			<div className="intro">
				<p>
					Kensington Market is a multicultural destination in Toronto to walk around and explore. Join me on a
					street art tour!
				</p>
			</div>
			<button className="enter-site" onClick={closeIntro}>
				Enter
			</button>
		</div>
	</div>
);

export default App;
