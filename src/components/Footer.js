import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Slideshow from './Slideshow';

function Footer() {
    const [ open, setOpen ] = useState(false);
    const [ openCredit, setOpenCredit ] = useState(false);

	function slideshowToggle() {
		setOpen(wasOpened => !wasOpened)
    };
    
    function creditToggle() {
		setOpenCredit(wasOpened => !wasOpened)
	};
	
	return (
        	<footer>
                <div className="slideshow-link" onClick={slideshowToggle}>
                    <p>Slideshow</p>
                </div>
                {open && (
                    <div className="slideshow">
                        <Slideshow/>
                    </div>
                )}
                <p>
                    <i className="far fa-copyright">
                        <span className="visuallyhidden">Copyright Symbol</span>
                    </i>{' '}
                    2020 <a href="https://www.anastasiamay.com/" title="Link to Anastasia's Developer Website">Anastasia May</a> <i className="fab fa-canadian-maple-leaf" />
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