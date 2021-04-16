import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const app = initializeApp({ });
const storage = getStorage(app);
const aRef = ref(storage, '');
getDownloadURL(aRef);
