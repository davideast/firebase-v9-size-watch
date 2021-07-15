import * as gzipSize from 'gzip-size';
import pretty from 'pretty-bytes';
import {markdownTable} from 'markdown-table'
import {readFileSync} from 'fs';

const files = [
  'public/current/app/bundle.js',
  'public/next/app/bundle.js',

  'public/current/auth/bundle.js',
  'public/next/auth/bundle.js',

  'public/current/database/bundle.js',
  'public/next/database/bundle.js',

  'public/current/firestore/bundle.js',
  'public/next/firestore/bundle.js',

  'public/next/firestorelite/bundle.js',
  'public/current/firestorelite/bundle.js',

  'public/current/messaging/bundle.js',
  'public/next/messaging/bundle.js',

  'public/current/performance/bundle.js',
  'public/next/performance/bundle.js',

  'public/current/remote-config/bundle.js',
  'public/next/remote-config/bundle.js',

  'public/current/storage/bundle.js',
  'public/next/storage/bundle.js',
];

const hash = {};
for(let file of files) {
  const pieces = file.split('/');
  const version = pieces[1];
  const service = pieces[2];
  const gzipped = gzipSize.fileSync(file);
  if(hash[service] == undefined) {
    hash[service] = {};
  }
  hash[service][version] = gzipped;
}

let results = [];
for(let service of Object.keys(hash)) {
  console.log(service);
  let { current, next } = hash[service];
  console.log(hash[service]);
  const diff = Math.round(100 - (next / current) * 100);
  const currentSize = pretty(current);
  const nextSize = pretty(next);
  const packageName = `firebase/${service}`;
  results = [
    ...results,
    [packageName, currentSize, nextSize, `${diff}% smaller`]
  ];
}
console.log(results)
const packagejs = JSON.parse(readFileSync('./package.json', 'utf8'));
const table = markdownTable([
  ['package', `${packagejs.dependencies['firebase-current']}`, packagejs.dependencies.firebase, 'Size difference'],
  ...results
]);

console.log(table);
