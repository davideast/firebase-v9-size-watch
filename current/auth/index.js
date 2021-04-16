import firebase from 'firebase-current/app';
import 'firebase-current/auth';

const firebaseApp = firebase.initializeApp({ });
const perf = firebaseApp.auth();
