import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyD71erNI1tRaTKUITG8NPRtH_OHB53MAEQ',
	authDomain: 'kensington-art-tour.firebaseapp.com',
	databaseURL: 'https://kensington-art-tour.firebaseio.com',
	projectId: 'kensington-art-tour',
	storageBucket: '',
	messagingSenderId: '614348414846'
};

firebase.initializeApp(firebaseConfig);

	
export default firebase;
