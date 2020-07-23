import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyD71erNI1tRaTKUITG8NPRtH_OHB53MAEQ',
	// REACT_APP_API_KEY
	authDomain: 'kensington-art-tour.firebaseapp.com',
	// REACT_APP_AUTH_DOMAIN
	databaseURL: 'https://kensington-art-tour.firebaseio.com',
	// REACT_APP_DATABASE_URL
	projectId: 'kensington-art-tour',
	// REACT_APP_PROJECT_ID
	storageBucket: '',
	messagingSenderId: '614348414846'
	// REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;
