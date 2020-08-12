import React, { Component } from 'react';
import '../App.scss';
import Header from './Header.js';
import MapContainer from './Map.js';
import Slideshow from './Slideshow';
import Footer from './Footer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<main>
						<Switch>
							<Route path="/" exact component={MapContainer} />
							<Route path="/slideshow" component={Slideshow} />
						</Switch>
					</main>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
