import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	const [ openCredit, setOpenCredit ] = useState(false);

	function creditToggle() {
		setOpenCredit((wasOpened) => !wasOpened);
	}

	return (
		<footer>
			<div className="slideshow-link">
				<Link to="/slideshow">
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
