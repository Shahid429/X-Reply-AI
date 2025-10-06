// Minify all JS files under dist using terser
const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

async function minifyFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const res = await minify(code, { module: true, toplevel: true });
  fs.writeFileSync(filePath, res.code, 'utf8');
  console.log('Minified', path.basename(filePath));
}

async function run() {
  const dir = path.resolve(__dirname, '..', 'dist');
  const list = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  for (const f of list) {
    await minifyFile(path.join(dir, f));
  }
}

run().catch(e => { console.error(e); process.exit(1); });
