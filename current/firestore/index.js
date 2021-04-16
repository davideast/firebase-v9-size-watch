import firebase from 'firebase-current/app';
import 'firebase-current/firestore';

const firebaseApp = firebase.initializeApp({ });
const perf = firebaseApp.firestore();
