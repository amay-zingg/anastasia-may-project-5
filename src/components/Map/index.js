import React, { Component } from 'react';
import { compose } from 'recompose';
import { withScriptjs, GoogleMap, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import firebase from '../Firebase/index';
import sprayicon from '../../icons/spraypaint.png';
// * * * * MADE WITH FUNCTIONALITY HELP FROM THIS INCREDIBLE PERSON https://twitter.com/danditomaso * * * * //

const MapWithAMarker = compose(withScriptjs, withGoogleMap)((props) => {
	return (
		<GoogleMap zoom={16.5} defaultCenter={{ lat: 43.6545, lng: -79.4015 }}>
			{props.markers.map((marker) => {
				return (
					<Marker
						key={marker.id}
						data-id={marker.id}
						onClick={() => props.onClick(marker)}
						position={{ lat: marker.artPiece.lat, lng: marker.artPiece.lng }}
						icon={{
							url: sprayicon
						}}
					>
						{props.selectedMarker.id === marker.id && (
							<InfoWindow marker={marker} onClose={props.onInfoWindowClose} visible={true}>
								<div className="infoWindow">
									<div className="locationImage">
										<img src={marker.artPiece.image} alt={marker.artPiece.imageAlt} />
										<p className="lastUpdate">Photo Taken: {marker.artPiece.imageDate}</p>
									</div>
									<div className="locationInfo">
										<h3>{marker.artPiece.title}</h3>
										<p>{marker.artPiece.location}</p>
										<p className="artist">{marker.artPiece.artist}</p>
										<p className="artistSocial">
											<a href={marker.artPiece.artistSocial}>
												<i className="fab fa-instagram" />
												<span class="visuallyhidden">Instagram (opens a new window)</span>
											</a>
										</p>
									</div>
								</div>
							</InfoWindow>
						)}
					</Marker>
				);
			})}
		</GoogleMap>
	);
});

class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: [],
			activeMarker: {},
			selectedMarker: {},
			showingInfoWindow: false
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
		});
	}

	handleClick = (marker) => {
		this.setState({
			activeMarker: marker,
			selectedMarker: marker,
			showingInfoWindow: true
		});
	};

	onInfoWindowClose = () =>
		this.setState({
			activeMarker: null,
			showingInfoWindow: false
		});

	onMapClicked = () => {
		if (this.state.showingInfoWindow)
			this.setState({
				activeMarker: null,
				showingInfoWindow: false
			});
	};

	render() {
		return (
			<MapWithAMarker
				selectedMarker={this.state.selectedMarker}
				markers={this.state.markers}
				onClick={this.handleClick}
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAP312VeMpu7VGjijjL1XopDWWIL46vl7I&v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `80vh` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}

export default MapContainer;
