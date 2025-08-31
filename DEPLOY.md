# 🚀 Ultra-Fast Deployment Guide

## ⚡ **5-Minute Deployment**

### 1. **Push to GitHub** (30 seconds)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/polymarket-scanner.git
git push -u origin main
```

### 2. **Deploy Server to Railway** (2 minutes)

1. Go to [railway.app](https://railway.app)
2. Click "Deploy from GitHub repo"
3. Select your `polymarket-scanner` repo
4. Set environment variable: `ODDS_API_KEY=650f7c6bc815f7892bcbd9ae68943b6c`
5. Railway will auto-detect and deploy!

### 3. **Deploy Client to Vercel** (2 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project" → Import from GitHub
3. Select your repo → Set root directory to `web`
4. Add environment variable: `VITE_API_URL=https://YOUR_RAILWAY_URL.railway.app`
5. Deploy!

### 4. **Update Client Config** (30 seconds)

Update `web/src/App.jsx` line 2:

```javascript
const API_BASE =
  import.meta.env.VITE_API_URL || "https://YOUR_RAILWAY_URL.railway.app";
```

---

## 🔥 **Alternative: One-Click Deployment**

### **Render** (Server + Client in one platform)

1. Go to [render.com](https://render.com)
2. Click "New Web Service" → Connect GitHub
3. For Server: Root directory `server`, Start command `npm start`
4. For Client: Root directory `web`, Build command `npm run build`, Publish directory `dist`

### **Netlify** (Client only)

1. Go to [netlify.com](https://netlify.com)
2. Drag & drop your `web/dist` folder after running `npm run build`

---

## 🎯 **Environment Variables**

- **Server**: `ODDS_API_KEY=650f7c6bc815f7892bcbd9ae68943b6c`
- **Client**: `VITE_API_URL=https://your-server-url.com`

## 📱 **Your App Will Be Live At:**

- **Server**: `https://your-app.railway.app`
- **Client**: `https://your-app.vercel.app`

**Total Time: ~5 minutes** ⚡
