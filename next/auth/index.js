import { initializeApp } from 'firebase/app';
import { initializeAuth, indexedDBLocalPersistence, onAuthStateChanged } from 'firebase/auth';

const app = initializeApp({ });
const auth = initializeAuth(app, { persistence: indexedDBLocalPersistence });
onAuthStateChanged(auth, user => {

});
