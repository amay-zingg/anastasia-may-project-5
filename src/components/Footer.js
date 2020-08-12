import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bikeRackDrawing from '../images/KensingtonTitle.png';

function Footer() {
	const [ openInfo, setOpenInfo ] = useState(false);
	const [ openCredit, setOpenCredit ] = useState(false);

	function infoToggle() {
		setOpenInfo((wasOpened) => !wasOpened);
	}

	function creditToggle() {
		setOpenCredit((wasOpened) => !wasOpened);
	}

	return (
		<footer>
			
			<div className="info-slideshow">
				<button onClick={infoToggle} className="info-icon" title="About">
					<i class="fas fa-info-circle" />
					<span className="visuallyhidden">Information Icon</span>
				</button>
				{openInfo && (
					<div className="info-overlay" id="info-overlay">
						<div className="info">
							<button className="close-dialog" onClick={infoToggle}>
								<i class="fas fa-window-close" />
								<span className="visuallyhidden">Close Dialog</span>
							</button>
							<img src={bikeRackDrawing} alt="Kensington Bike Rack Title Image" className="title-photo" />
							<div className="intro">
								<p>
									Kensington Market is a multicultural destination in Toronto to walk around and explore. Join me on a
									street art tour!
								</p>
							</div>
							<button className="enter-site" onClick={infoToggle}>
								Enter
							</button>
						</div>
					</div> 
				)}
				<Link to="/slideshow" title="Open Slideshow">
					<p>Slideshow</p>
				</Link>
			</div>
			<p>
				<i className="far fa-copyright">
					<span className="visuallyhidden">Copyright Symbol</span>
				</i>{' '}
				2020{' '}
				<a href="https://www.anastasiamay.com/" title="Link to Anastasia's Developer Website">
					Anastasia May
				</a>{' '}
				<i className="fab fa-canadian-maple-leaf" />
				<span className="visuallyhidden">Maple Leaf Icon</span> Explore Toronto
			</p>
			<div className="credit-link" onClick={creditToggle}>
				<p>Credit</p>
			</div>
			{openCredit && (
				<div id="credit" className="credit">
					<p>
						Weather Icons Designer: <a href="https://www.iconfinder.com/andinur">Andi Nur Abdillah</a>
					</p>
				</div>
			)}
		</footer>
	);
}

export default Footer;
