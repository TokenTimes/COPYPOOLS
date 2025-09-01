# Manual Render Setup (If Blueprint Fails)

If the `render.yaml` Blueprint continues to fail, manually create the service:

## Client Service Setup

1. **Go to Render Dashboard** → "New" → "Web Service"
2. **Connect Repository**: `https://github.com/TokenTimes/COPYPOOLS`
3. **Configure Service:**

   - **Name**: `polymarket-client`
   - **Environment**: `Node`
   - **Region**: `Oregon (US West)`
   - **Branch**: `main`
   - **Root Directory**: `web`
   - **Build Command**: `npm ci && npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: `22.16.0`

4. **Environment Variables:**

   ```
   NEXT_PUBLIC_API_BASE=https://polymarket-server.onrender.com
   NODE_ENV=production
   ```

5. **Advanced Settings:**
   - **Auto-Deploy**: `Yes`
   - **Plan**: `Free`

## Important Notes

- **DO NOT** set this as a "Static Site" - it must be a "Web Service"
- **DO NOT** specify a "Publish Directory" - leave it blank
- The `web` folder contains the Next.js app with proper `package.json`
- The `.nvmrc` file specifies Node.js 22.16.0

## Verification

After deployment, the service should:

- Build successfully with `npm run build`
- Start with `npm start`
- Serve the Next.js app on the assigned URL
- Show all recent updates (omedium font, $10 minimum investment, etc.)
