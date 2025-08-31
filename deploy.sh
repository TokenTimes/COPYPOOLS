#!/bin/bash

echo "🚀 Quick Deploy Script"
echo "====================="

# Build the client
echo "📦 Building client..."
cd web
npm run build
cd ..

echo "✅ Client built successfully!"
echo ""
echo "🔥 Next Steps:"
echo "1. Push to GitHub: git add . && git commit -m 'Deploy' && git push"
echo "2. Deploy server to Railway: https://railway.app"
echo "3. Deploy client to Vercel: https://vercel.com"
echo ""
echo "📱 Your app will be live in ~5 minutes!"
