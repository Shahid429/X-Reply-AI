// Copy manifest.json for production (clean version)
const fs = require('fs');
const path = require('path');

const manifestPath = path.resolve(__dirname, '..', 'manifest.json');
const distManifestPath = path.resolve(__dirname, '..', 'dist', 'manifest.json');

let manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Ensure clean production version
manifest.name = "X Reply AI";
// Remove any dev suffixes from version
manifest.version = manifest.version.replace(/-dev$/, '');

fs.writeFileSync(distManifestPath, JSON.stringify(manifest, null, 2));
console.log('Created production manifest');