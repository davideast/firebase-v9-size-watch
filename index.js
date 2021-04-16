import * as gzipSize from 'gzip-size';
import pretty from 'pretty-bytes';
import { printTable } from'console-table-printer';


const files = [
  'public/current/app/bundle.js',
  'public/next/app/bundle.js',

  'public/current/auth/bundle.js',
  'public/next/auth/bundle.js',

  'public/current/database/bundle.js',
  'public/next/database/bundle.js',

  'public/current/firestore/bundle.js',
  'public/next/firestore/bundle.js',

  'public/current/messaging/bundle.js',
  'public/next/messaging/bundle.js',

  'public/current/performance/bundle.js',
  'public/next/performance/bundle.js',

  'public/current/remote-config/bundle.js',
  'public/next/remote-config/bundle.js',

  'public/current/storage/bundle.js',
  'public/next/storage/bundle.js',
];


const results = files.map(file => {
  const pieces = file.split('/');
  const name = `${pieces[1]}/${pieces[2]}`;
  return {
    name,
    size: pretty(gzipSize.fileSync(file))
  };
});

printTable(results);
