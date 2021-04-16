import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const app = initializeApp({ });
const mess = getMessaging(app);
getToken(mess);
