# Deployment Guide

This guide covers deploying your Platform Showcase app to various hosting platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the creators of Next.js and offers the best deployment experience.

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from project directory:**
   ```bash
   cd ~/.openclaw/workspace/app-showcase-v2
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Yes**
   - Which scope? **Select your account**
   - Link to existing project? **No**
   - Project name? **app-showcase-v2** (or your choice)
   - Directory? **./
   **
   - Override settings? **No**

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

Your app will be live at: `https://your-project-name.vercel.app`

### Method 2: Vercel Dashboard (GUI)

1. **Push to GitHub:**
   ```bash
   cd ~/.openclaw/workspace/app-showcase-v2
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/app-showcase-v2.git
   git push -u origin main
   ```

2. **Import on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Automatic deployments:**
   - Every push to `main` triggers a production deployment
   - Pull requests get preview deployments

## 🌐 Other Deployment Options

### Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Deploy:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

### Railway

1. **Install Railway CLI:**
   ```bash
   npm i -g @railway/cli
   ```

2. **Login and deploy:**
   ```bash
   railway login
   railway init
   railway up
   ```

### AWS Amplify

1. **Install Amplify CLI:**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Configure and deploy:**
   ```bash
   amplify configure
   amplify init
   amplify add hosting
   amplify publish
   ```

### Docker Deployment

1. **Create Dockerfile:**
   ```dockerfile
   FROM node:20-alpine AS base

   # Install dependencies
   FROM base AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   # Build
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   # Production
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production

   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static

   EXPOSE 3000
   ENV PORT 3000

   CMD ["node", "server.js"]
   ```

2. **Build and run:**
   ```bash
   docker build -t platform-showcase .
   docker run -p 3000:3000 platform-showcase
   ```

## ⚙️ Environment Variables

If you need environment variables:

1. **Create `.env.local`:**
   ```bash
   NEXT_PUBLIC_API_URL=your_api_url
   ```

2. **Add to Vercel:**
   ```bash
   vercel env add NEXT_PUBLIC_API_URL
   ```

   Or through dashboard: Settings → Environment Variables

## 🔧 Build Configuration

### Performance Optimization

Add to `next.config.ts`:

```typescript
const config = {
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Enable compression
  compress: true,
  
  // Optimize fonts
  optimizeFonts: true,
  
  // Generate standalone output for Docker
  output: 'standalone',
};

export default config;
```

### Custom Domain

**Vercel:**
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS with provided records

**Netlify:**
1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

## 📊 Monitoring

### Vercel Analytics

Add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

Install:
```bash
npm install @vercel/analytics
```

### Performance Monitoring

- **Vercel:** Automatic in dashboard
- **Lighthouse:** Built into Chrome DevTools
- **Web Vitals:** Monitor in browser console

## 🐛 Troubleshooting

### Build Fails

1. **Check Node version:**
   ```bash
   node -v  # Should be 18.17 or later
   ```

2. **Clear cache:**
   ```bash
   rm -rf .next node_modules package-lock.json
   npm install
   npm run build
   ```

3. **Check TypeScript errors:**
   ```bash
   npx tsc --noEmit
   ```

### Runtime Errors

1. **Check browser console** for client-side errors
2. **Check deployment logs** in hosting platform
3. **Test locally first:** `npm run build && npm start`

### Slow Performance

1. **Enable caching** in CDN settings
2. **Optimize images** with next/image
3. **Check bundle size:** `npm run build` shows bundle info
4. **Enable ISR** (Incremental Static Regeneration) if needed

## 📱 Post-Deployment Checklist

- [ ] App loads correctly
- [ ] All pages are accessible
- [ ] Search functionality works
- [ ] Filter and sort work correctly
- [ ] Vote system persists in localStorage
- [ ] Favorites system works
- [ ] Modal opens and closes
- [ ] Responsive on mobile, tablet, desktop
- [ ] All links work (external links open in new tab)
- [ ] Performance is good (Lighthouse score > 90)
- [ ] SEO meta tags are correct
- [ ] Custom domain configured (if applicable)
- [ ] Analytics working (if configured)
- [ ] SSL certificate active (HTTPS)

## 🔒 Security

- All external links use `rel="noopener noreferrer"`
- No sensitive data exposed in client code
- Environment variables properly configured
- HTTPS enforced by hosting platform
- CSP headers recommended for production

## 📈 Scaling

For high traffic:

1. **Enable caching** - Most platforms do this automatically
2. **Use CDN** - Vercel, Netlify include CDN
3. **Optimize images** - Already using next/image
4. **Consider API routes** if adding backend features
5. **Monitor performance** and set up alerts

## 💰 Cost Estimates

- **Vercel:** Free for personal projects, $20/month Pro
- **Netlify:** Free for personal, $19/month Pro
- **Railway:** $5/month minimum
- **AWS Amplify:** Pay per usage (usually < $5/month for small sites)

## 🎉 Success!

Once deployed, your Platform Showcase will be live and accessible worldwide!

**Share your deployment:** Update the README with your live URL

**Need help?** Check the main README.md or hosting platform documentation.

---

**Happy Deploying! 🚀**
