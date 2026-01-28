#!/bin/bash
set -e

echo "Building realtime-messenger-app..."

# Build client
echo "Installing client dependencies..."
cd client
npm ci
echo "Building client..."
npm run build
cd ..

# Build backend
echo "Installing backend dependencies..."
cd backend
npm ci
echo "Building backend..."
npm run build
cd ..

echo "Build completed successfully!"
