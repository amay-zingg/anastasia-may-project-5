import React from 'react';
import bikeRackDrawing from '../images/KensingtonTitle.png';

function closeIntro() {
    document.getElementById('landing-overlay').style.visibility="hidden";
}


function Landing() {
	return (
        <div className="landing-overlay" id="landing-overlay">
            <div className="landing">
                <img src={bikeRackDrawing} alt="Kensington Bike Rack Title Image" className="title-photo"/>
                <div className="intro">
                    <p>Kensington Market is a multicultural destination in Toronto to walk around and explore. Join me on a street art tour!</p>
                </div>
                <button className="enter-site" onClick={closeIntro}>Enter</button>
                    
            </div>
        </div>
	);
};

export default Landing;