import firebase from 'firebase-current/app';
import 'firebase-current/storage';

const firebaseApp = firebase.initializeApp({ });
const perf = firebaseApp.storage();
