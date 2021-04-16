import firebase from 'firebase-current/app';
import 'firebase-current/performance';

const firebaseApp = firebase.initializeApp({ });
const perf = firebaseApp.performance();
