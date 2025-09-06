// firebase.js
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore'; // For Firestore (if using)
import { firebaseConfig } from './firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore(); // For Firestore