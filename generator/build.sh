#!/bin/bash

# Build the binary
go build

# build the typescript page renderer
cd ts
npm install
tsc

cd ..

# yay everything is k
echo "Build complete"
