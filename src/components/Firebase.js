import firebase from 'firebase/app';
import 'firebase/database';
import { keys } from "../keys.js";

const { REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_DATABASE_URL, REACT_APP_PROJECT_ID, REACT_APP_MESSAGING_SENDER_ID } = keys;

const firebaseConfig = {
	apiKey: REACT_APP_API_KEY,
	authDomain: REACT_APP_AUTH_DOMAIN,
	databaseURL: REACT_APP_DATABASE_URL,
	projectId: REACT_APP_PROJECT_ID,
	storageBucket: '',
	messagingSenderId: REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;

