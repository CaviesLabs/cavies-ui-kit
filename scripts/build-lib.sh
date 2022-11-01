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
node-sass src/styles/css/main.scss src/styles/css/main.css 

# Create directory contains styles in module
mkdir dist/cjs/styles/css/
mkdir dist/esm/styles/css/

# Copy style into module
cp src/styles/css/main.css dist/esm/styles/css/
cp src/styles/css/main.css dist/cjs/styles/css/

mkdir dist/esm/assets/
mkdir dist/cjs/assets/

# Copy assets to lib
cp -r src/assets/* dist/esm/assets
cp -r src/assets/* dist/cjs/assets
