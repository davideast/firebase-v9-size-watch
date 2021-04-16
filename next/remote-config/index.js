import { initializeApp } from 'firebase/app';
import { getRemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';

const app = initializeApp({ });
const rc = getRemoteConfig(app);
fetchAndActivate(rc);
getValue(rc, '');
