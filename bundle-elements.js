const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/my-elements/runtime.js',
    './dist/my-elements/polyfills.js',
    './dist/my-elements/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/elements.js');
})()
