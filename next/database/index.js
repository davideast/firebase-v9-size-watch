import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const app = initializeApp({ });
const db = getDatabase(app);
const aRef = ref(db, '');
get(aRef);
