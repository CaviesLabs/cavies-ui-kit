#!/usr/bin/env bash

# Clean up
rm -rf dist/
rm -rf dts/
rm -rf build/
rm -rf esm/
rm -rf cjs/

# Re-create dist folder
# mkdir dist/

# Generate type from typescript
# yarn run gen-dts

# Run craco build
# yarn run build:craco
yarn run build:rollup

# Complie style
node-sass src/styles/sass/main.scss src/styles/sass/main.css 

cp src/styles/sass/main.css dist/esm
cp src/styles/sass/main.css dist/cjs

mkdir dist/esm/assets/
mkdir dist/cjs/assets/

# Copy assets to lib
cp -r src/assets/* dist/esm/assets
cp -r src/assets/* dist/cjs/assets
