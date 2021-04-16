import { resolve } from 'path';
import { build } from 'esbuild';
import { fileSync } from 'brotli-size';
import pretty from 'pretty-bytes';
import chalk from 'chalk';

const log = console.log;
const outdir = './public';
const entryPoints = [
  './current/index.js',
  './next/index.js',
];
const current = '/Users/deast/Documents/vnext/io/public/current/index.js';
const next = '/Users/deast/Documents/vnext/io/public/next/index.js'
const nameMap = {
  [current]: '[namespace] bundle.js',
  [next]: '[modular]   bundle.js',
}

try {
  await build({
    entryPoints,
    outdir,
    minify: true,
    bundle: true,
    target: 'chrome89',
  });
  const bundlePaths = entryPoints.map(p => resolve(outdir, p));
  const output = bundlePaths.reduce((acc, curr) => {
    const bytes = pretty(fileSync(curr));
    acc[curr] = bytes;
    return acc;
  }, {});
  log(``);
  log(``);

  log(
    chalk.yellowBright.yellowBright(
      `${nameMap[current]} (${output[current]})`
    )
  );
  log(
    chalk.greenBright(
      `${nameMap[next]} (${output[next]})`
    )
  );


  log(``);
  log(``);
  log(``);
  log(``);
  log(``);
  log(``);
  log(``);
  log(``);
  log(``);
  log(``)
  log(``);
  log(``);
  log(``);
  log(``);
  log(``);
} catch (error) {
  console.error(error);
}
