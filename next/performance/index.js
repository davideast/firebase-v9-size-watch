import { initializeApp } from 'firebase/app';
import { getPerformance } from 'firebase/performance';

const app = initializeApp({ });
const perf = getPerformance(app);
