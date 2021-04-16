import resolveModule from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

function makeBuild(version, pkg) {
  return {
    input: `${version}/${pkg}/index.js`,
    output: {
      file: `public/${version}/${pkg}/bundle.js`,
      format: 'es'
    },
    plugins: [
      resolveModule({
        mainFields: ['module', 'main']
      }),
      commonjs(),
      terser({
        format: {
          comments: false
        },
        mangle: { toplevel: true },
        compress: false
      })
    ]
  };
}

export default [
  makeBuild('next', 'remote-config'),
  makeBuild('current', 'remote-config'),
  makeBuild('next', 'messaging'),
  makeBuild('current', 'messaging'),
  makeBuild('next', 'auth'),
  makeBuild('current', 'auth'),
  makeBuild('next', 'firestore'),
  makeBuild('current', 'firestore'),
  makeBuild('next', 'storage'),
  makeBuild('current', 'storage'),
  makeBuild('next', 'database'),
  makeBuild('current', 'database'),
  makeBuild('next', 'app'),
  makeBuild('current', 'app'),
  makeBuild('next', 'performance'),
  makeBuild('current', 'performance'),
];
