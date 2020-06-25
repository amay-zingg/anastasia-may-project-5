import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import firebase from '../Firebase/index';

export class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
      markers: [], 
      selectedMarker: null,
      isOpen: false,
    };
	}

	componentDidMount() {
		const dbRef = firebase.database().ref('markers');
		dbRef.on('value', (snapshot) => {
			const markersList = [];
			const data = snapshot.val();

			for (let key in data) {
				markersList.push({
          id: key,
					artPiece: data[key]
        });
      }

			this.setState({
        markers: markersList
      });

      console.log(this.state.markers,`this.state.markers`);
    });
    
  }; // * * * * END OF COMPONENT DID MOUNT

  // handleClick = (marker, event) => {
  //     // console.log(marker, `I was clicked`);
  //     this.setState({ selectedMarker: marker})
  //   }

  handleToggleOpen = () => {
      this.setState({
          isOpen: true
      });
      console.log("click town");
  }

  handleToggleClose = () => {
      this.setState({
          isOpen: false
      });
  }

	render() {
    const style = {
      position: 'relative',
      width: '100%',
      height: '100%'
    };
    
		return (
      <Map  google={this.props.google} 
            zoom={16.5} 
            style={style} 
            initialCenter={{ lat: 43.6545, lng: -79.4015 }}>
				
       {this.state.markers.map((marker) => {
          return (
          <Marker
              key={marker.artPiece.id}
              icon={{
                    url: './icons/spraypaint.png'
                  }}
              position={{ 
                lat: marker.artPiece.lat, 
                lng: marker.artPiece.lng 
              }}
              onClick={() => this.handleToggleOpen()} 
          >
            { this.state.isOpen &&
              <InfoWindow>
                <div>
                  <p>Hello</p>
                </div>
              </InfoWindow>}
        
          </Marker> 
           ) 
          {/* // END OF MARKER RETURN */}
        })} 
        {/* // END OF RETURN FOR MAP() */}
    </Map> 
    ); // END OF ENTIRE RETURN
  }; // END OF ENTIRE RENDER
  }; // END OF CLASS COMPONENT

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAP312VeMpu7VGjijjL1XopDWWIL46vl7I'
})(MapContainer);

          /* {selectedMarker && (
              <InfoWindow 
              position = {{
                lat: selectedMarker.artPiece.lat, 
                lng: selectedMarker.artPiece.lng 
              }}
              onCloseClick ={() => {
                setSelectedMarker(null);
              }}
              > */
            //     {/* I WANT THIS WINDOW TO OPEN IF THE SELECTED MARKER IS CLICKED */}
            //     {/* I WANT THIS TO BE CLOSED IF ANOTHER MARKER IS SELECTED */}
            //     {/* IF ARTISTSOCIAL = "N/A" THEN DONT SHOW P.ARTISTSOCIAL */}
            //     {/* IF ITEM TITLE = "KENSINGTON BIKE RACK" SHOW BIKE ICON NOT SPRAY PAINT CAN */}
            //     {/* <InfoWindow>
            //           <div className="infoWindow">
            //           <div className="locationImage">
            //             <img src="./images/KensingtonCarAndWallArt.jpg" alt="Placeholder"/>
            //             <p className="lastUpdate">Image Last Updated</p>
            //           </div>
            //           <div className="locationInfo">
            //             <h3>Image Title</h3>
            //             <p>Location Here</p>
            //             <p>Artist Name Here</p>
            //             <p className="artistSocial">
            //                         <a href="#socialLinkHere">
            //                         <i className="fab fa-instagram"></i>
            //                               <span class="visuallyhidden">Instagram (opens a new window)</span>
            //               <span class="handle">INSTAGRAM ACCOUNT</span>
            //               </a>
            //             </p>
            //           </div>
            //         </div>
            //     </InfoWindow> */}
            //   {/* </InfoWindow>
            //   )}; */}
            // {/* </Marker> */}
         


 