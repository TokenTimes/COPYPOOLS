#!/bin/bash

echo "🚀 Building Polymarket Scanner Client for Render..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build for production
echo "🔨 Building for production..."
npm run build

echo "✅ Build completed! Output in dist/ directory"
ls -la dist/
