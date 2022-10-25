#!/usr/bin/env bash

yarn run gen-dts
yarn run build


# Clean up
rm -rf dist/
rm -rf dts/
rm -rf build/

# Re-create dist folder
mkdir dist/

# Generate type from typescript
yarn run gen-dts

# Run craco build
yarn run build

# Copy all bundles folders/files from build-output folder to dist folde 
cp -r dts/src/* dist/
cp build/library/lib.entrypoint.js dist/
cp build/static/css/*.css dist/lib.css
cp README.md dist/
cp package.json dist/
cp LICENSE dist/