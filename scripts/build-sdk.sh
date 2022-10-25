#!/usr/bin/env bash

yarn run gen-dts
yarn run build


# clean up
rm -rf dist/
rm -rf dts/
rm -rf build/

# re-create dist
mkdir dist/

# build
yarn run gen-dts
yarn run build

# copy bundles
cp -r dts/src/* dist/
cp build/library/lib.entrypoint.js dist/
cp build/static/css/*.css dist/lib.css

# copy resource
cp README.md dist/
cp package.json dist/
cp LICENSE dist/