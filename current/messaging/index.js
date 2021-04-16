import firebase from 'firebase-current/app';
import 'firebase-current/messaging';

const firebaseApp = firebase.initializeApp({ });
const perf = firebaseApp.messaging();
