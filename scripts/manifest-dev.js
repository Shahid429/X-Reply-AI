// Copy manifest.json for development (with dev indicators)
const fs = require('fs');
const path = require('path');

const manifestPath = path.resolve(__dirname, '..', 'manifest.json');
const distManifestPath = path.resolve(__dirname, '..', 'dist', 'manifest.json');

let manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Add development indicators
manifest.name = "X Reply AI (DEV)";
// manifest.version remains unchanged to keep it numeric for Chrome compatibility

fs.writeFileSync(distManifestPath, JSON.stringify(manifest, null, 2));
console.log('Created development manifest');