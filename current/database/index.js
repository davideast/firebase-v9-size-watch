import firebase from 'firebase-current/app';
import 'firebase-current/database';

const firebaseApp = firebase.initializeApp({ });
const perf = firebaseApp.database();
