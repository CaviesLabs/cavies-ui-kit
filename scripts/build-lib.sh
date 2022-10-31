#!/usr/bin/env bash

# Clean up
rm -rf dist/
rm -rf dts/
rm -rf build/

# Re-create dist folder
mkdir dist/

# Generate type from typescript
yarn run gen-dts

# Run craco build
yarn run build:craco

# Complie style
node-sass src/styles/sass/main.scss src/styles/sass/main.css 
cp src/styles/sass/main.css dist/

cp -r dts/src/* dist/

# Copy all bundles folders/files from build-output folder to dist folde 
cp build/browser/browser.js dist/

# Copy resource
cp README.md dist/
cp package.json dist/
cp LICENSE dist/
