import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const app = initializeApp({ });
const firestore = getFirestore(app);
const aRef = doc(firestore, '');
getDoc(aRef);
