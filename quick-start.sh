#!/bin/bash

# Platform Showcase - Quick Start Script
# This script helps you get the app running quickly

set -e

echo "🚀 Platform Showcase - Quick Start"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    echo "Please install Node.js 18.17 or later from https://nodejs.org/"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version is too old (found v$(node -v))"
    echo "Please upgrade to Node.js 18.17 or later"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed"
    exit 1
fi

echo "✅ npm $(npm -v) detected"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "✅ Dependencies installed"
echo ""

# Ask user what to do
echo "What would you like to do?"
echo ""
echo "1) Start development server (npm run dev)"
echo "2) Build for production (npm run build)"
echo "3) Build and start production server"
echo "4) Run type check"
echo "5) Deploy to Vercel"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Starting development server..."
        echo "The app will open at http://localhost:3000"
        echo ""
        echo "Press Ctrl+C to stop the server"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo "🏗️  Building for production..."
        npm run build
        echo ""
        echo "✅ Build complete! Run 'npm start' to start the production server"
        ;;
    3)
        echo ""
        echo "🏗️  Building for production..."
        npm run build
        echo ""
        echo "🚀 Starting production server..."
        echo "The app will open at http://localhost:3000"
        echo ""
        npm start
        ;;
    4)
        echo ""
        echo "🔍 Running TypeScript type check..."
        npm run type-check
        echo ""
        echo "✅ Type check complete!"
        ;;
    5)
        echo ""
        if ! command -v vercel &> /dev/null; then
            echo "📥 Vercel CLI not found. Installing..."
            npm install -g vercel
        fi
        echo "🚀 Deploying to Vercel..."
        echo ""
        vercel
        ;;
    *)
        echo ""
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac
