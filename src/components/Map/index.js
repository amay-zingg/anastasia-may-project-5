import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import firebase from '../Firebase/index';

export class MapContainer extends Component {
	constructor() {
		super();
		this.state = {
			markers: []
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

      console.log(markersList);
      
			this.setState({
				markers: markersList
			});
		});
	}

	// this.setState({
	//   id: markersList,
	//   artist: markersList[markers].artist,
	//   artistSocial: markersList[markers].artistSocial,
	//   image: markersList[markers].image,
	//   imageAlt: markersList[markers].imageAlt,
	//   imageDate: markersList[markers].imageDate,
	//   lat: markersList[markers].lat,
	//   lng: markersList[markers].lng,
	//   location: markersList[markers].location,
	//   title: markersList[markers].title
	// });
	//     console.log(markersList);

	// * * * * INFO WINDOW

	render() {
		return (
      <Map google={this.props.google} 
      zoom={16.5} style={style} 
      initialCenter={{ lat: 43.6545, lng: -79.4015 }}>
				
        {/* {this.state.markers.map((title, id) => {
          })};  */}
          <Marker
					onClick={this.onMarkerClick}
					icon={{
						url: './icons/spraypaint.png'
					}}
          name={'Current location'}
          // title={markers.title}
          // id={markers.id}
				/>
        
        {/* END OF MARKERS */}

			</Map>
		);
	}
}

const style = {
	position: 'relative',
	width: '100%',
	height: '100%'
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAP312VeMpu7VGjijjL1XopDWWIL46vl7I'
})(MapContainer);

// * * * * CODE FROM OTHER PROJECT

// // LOOP THROUGH MARKERS
// for(var i = 0;i < markers.length;i++){
// addMarker(markers[i]);

// };

// // ADD MARKER FUNCTION
// function addMarker(props){
// var marker = new google.maps.Marker({
//     position:props.coords,
//     map: map
// });

// // CHECK FOR CUSTOM ICON
// if(props.iconImage){
//     // SET ICON IMAGE
//     marker.setIcon(props.iconImage);
// }

// // CHECK FOR CUSTOM CONTENT
// if(props.content){
//     var infoWindow = new google.maps.InfoWindow({
//     content: props.content
//     });

//     marker.addListener('click', function(){
//     infoWindow.open(map, marker);
//     });

// * * * * ATTEMPTS TO MAKE ARRAY

// 		for (let i = 0; i < keys.length; i++ ) {
// 			let k = keys[i];
// 			let lng = markers[k].lng;
// 			let lat = markers[k].lat;
// 			let markerData = markers[k].markerData;

// 			console.log(lng, lat);

//     };

// dbRef.on('value', (snapshot) => {
//   var finished = []
//   snapshot.forEach((data) => {
//     const markers = data.val();
//     markers['key'] = data.key;
//     finished.push(markers);
//   })
//     this.setState({
//       markersList: finished
//     })

//   // console.log(markersList);

// markerList.on('value', gotData, errData);

// 	function gotData(data) {
// 		let markers = data.val();
// 		let keys = Object.keys(markers);

// 		console.log(keys);
// 		for (let i = 0; i < keys.length; i++ ) {
// 			let k = keys[i];
// 			let lng = markers[k].lng;
// 			let lat = markers[k].lat;
// 			let markerData = markers[k].markerData;

// 			console.log(lng, lat);
// 		}
// 	}

// 	function errData(err) {
// 		console.log('Error!');
// 		console.log(err);
// 	}
// }

// let markersList = [];
// for (let marker in markers) {
//   markersList.push({
//     id: marker,
//     artist: markers[marker].artist,
//     artistSocial: markers[marker].artistSocial,
//     image: markers[marker].image,
//     imageAlt: markers[marker].imageAlt,
//     imageDate: markers[marker].imageDate,
//     lat: markers[marker].lat,
//     lng: markers[marker].lng,
//     location: markers[marker].location,
//     title: markers[marker].title
//   });
//   console.log(markersList);
// }
// this.setState({
//   markers: markersList
// });

// componentDidMount() {
// 	const database = firebase.database();
// 	const markerList = database.ref('markers');
// 	markerList.on('value', gotData, errData);

// 	function gotData(data) {
// 		let markers = data.val();
// 		let keys = Object.keys(markers);

// 		console.log(keys);
// 		for (let i = 0; i < keys.length; i++ ) {
// 			let k = keys[i];
// 			let lng = markers[k].lng;
// 			let lat = markers[k].lat;
// 			let markerData = markers[k].markerData;

// 			console.log(lng, lat);
// 		}
// 	}

// 	function errData(err) {
// 		console.log('Error!');
// 		console.log(err);
// 	}
// }

// locations = async () => {
//   const callFirebase = await fetch(
//     firebase.database().ref('markers')
//   );

//   const markersList = await fetch(callFirebase.on('value', (snapshot) => {
//     const markers = snapshot.val();

//     console.log(markers);

//     this.setState({
//       id: markersList,
//       artist: markersList[markers].artist,
//       artistSocial: markersList[markers].artistSocial,
//       image: markersList[markers].image,
//       imageAlt: markersList[markers].imageAlt,
//       imageDate: markersList[markers].imageDate,
//       lat: markersList[markers].lat,
//       lng: markersList[markers].lng,
//       location: markersList[markers].location,
//       title: markersList[markers].title
//     });
//         console.log(markersList);
//     })
//   );
// }
