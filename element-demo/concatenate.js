const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/element-demo/runtime.js',
'./dist/element-demo/polyfills.js',
'./dist/element-demo/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/element-demo.js');
await fs.copyFile('./dist/element-demo/styles.css', 'elements/styles.css')
})()