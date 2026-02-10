# Quick Reference Guide

Your go-to guide for common tasks and commands.

## 🚀 Quick Start

```bash
# First time setup
cd ~/.openclaw/workspace/app-showcase-v2
npm install
npm run dev

# Open browser
# http://localhost:3000
```

## 📦 NPM Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript check
```

## 🔧 Common Tasks

### Add a New Platform

1. Open `app/apps-data.json`
2. Add new entry:
```json
{
  "id": "unique-id-here",
  "name": "Platform Name",
  "url": "https://example.com",
  "description": "Short description",
  "detailed": "Full detailed description (800-1400 chars)",
  "category": "AI|Crypto|Design|Marketing|Development|Security|Finance|Other",
  "pricingModel": "Free|Paid|Free/Paid|Unknown",
  "tags": ["tag1", "tag2"],
  "votes": 0,
  "createdAt": "2026-02-10T00:00:00.000Z"
}
```
3. Save and test

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  navy: {
    DEFAULT: '#1a1d2e',  // Change here
    light: '#252941',
    dark: '#12141f',
  },
}
```

### Change Fonts

Edit `app/layout.tsx`:
```typescript
import { Your_Font } from "next/font/google";

const yourFont = Your_Font({
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

Then update `tailwind.config.ts`:
```typescript
fontFamily: {
  serif: ['var(--font-your-font)', ...],
}
```

### Modify Spacing

Edit `tailwind.config.ts` extend section:
```typescript
spacing: {
  '128': '32rem',  // Add custom spacing
}
```

## 🎨 Component Locations

```
app/components/
├── ParticleBackground.tsx   # 3D particles
├── Hero.tsx                 # Hero + search
├── FilterBar.tsx            # Filters
├── AppCard.tsx              # Platform cards
├── AppModal.tsx             # Detail modal
├── EmptyState.tsx           # No results
└── LoadingState.tsx         # Loading UI
```

## 🗂️ File Locations

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main page logic |
| `app/layout.tsx` | Root layout + fonts |
| `app/globals.css` | Global styles |
| `app/types.ts` | TypeScript types |
| `app/apps-data.json` | Platform data |
| `tailwind.config.ts` | Tailwind config |
| `next.config.ts` | Next.js config |

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production
vercel --prod
```

### Other Platforms
```bash
# Build first
npm run build

# Then deploy build output
# .next/ directory
```

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
npm run type-check
```

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### localStorage Not Working
- Check browser privacy settings
- Ensure not in incognito mode
- Check browser console for errors

## 🎯 Key Features

| Feature | How to Use |
|---------|------------|
| **Search** | Type in hero search bar |
| **Filter by Category** | Use category dropdown |
| **Sort** | Use sort dropdown |
| **Vote** | Click thumbs up on card |
| **Favorite** | Click heart icon |
| **View Details** | Click "Learn More" button |
| **Visit Platform** | Click external link icon |

## 📊 Data Structure

```typescript
interface App {
  id: string;              // Unique identifier
  name: string;            // Platform name
  url: string;             // Website URL
  description: string;     // Short (80-150 chars)
  detailed: string;        // Long (800-1400 chars)
  category: string;        // AI, Crypto, etc.
  pricingModel: string;    // Free, Paid, etc.
  tags: string[];          // Searchable tags
  votes: number;           // Vote count
  createdAt: string;       // ISO timestamp
}
```

## 🎨 Design Tokens

### Colors
```css
--navy:       #1a1d2e  /* Background */
--navy-light: #252941  /* Cards */
--purple:     #764ba2  /* Accent 1 */
--blue:       #667eea  /* Accent 2 */
```

### Spacing
```css
8rem  /* Section spacing */
4rem  /* Component spacing */
2rem  /* Element spacing */
1rem  /* Tight spacing */
```

### Typography
```css
96px  /* H1 (hero) */
48px  /* H2 */
32px  /* H3 */
16px  /* Body */
14px  /* Small */
```

## 🔍 Debugging

### Check Build
```bash
npm run build
# Look for errors in output
```

### Check Types
```bash
npm run type-check
# Look for TypeScript errors
```

### Check Browser Console
1. Open DevTools (F12)
2. Go to Console tab
3. Look for errors (red text)

### Check Network
1. Open DevTools (F12)
2. Go to Network tab
3. Look for failed requests

## 📱 Responsive Breakpoints

```css
< 768px   → Mobile   (1 column)
768-1024px → Tablet   (2 columns)
> 1024px  → Desktop  (3 columns)
```

## 🎭 Animation Timings

```css
0.2s  • Fast (hovers)
0.3s  • Standard (buttons)
0.5s  • Medium (cards)
0.8s  • Slow (page loads)
```

## 🔗 Important Links

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **TypeScript:** https://www.typescriptlang.org/docs/
- **Vercel Docs:** https://vercel.com/docs

## 💡 Pro Tips

1. **Use Turbopack** - Already enabled in dev mode for faster builds
2. **Memoize Expensive Ops** - Use `useMemo` for filtering/sorting
3. **Lazy Load** - Components load on demand automatically
4. **Type Everything** - TypeScript prevents runtime errors
5. **Test Responsive** - Use browser DevTools device mode
6. **Check Performance** - Use Lighthouse in Chrome DevTools
7. **Keep Data Clean** - Validate JSON before adding platforms
8. **Document Changes** - Update CHANGELOG.md for new features

## 🎯 Performance Checklist

- [ ] Images optimized (use next/image)
- [ ] Code split properly (automatic in Next.js)
- [ ] Lazy load off-screen content
- [ ] Minimize bundle size
- [ ] Use production build for deployment
- [ ] Enable compression (already configured)
- [ ] Test on 3G network

## 🔐 Security Checklist

- [ ] External links use `rel="noopener noreferrer"`
- [ ] No secrets in client code
- [ ] localStorage data sanitized
- [ ] HTTPS enabled (Vercel does this)
- [ ] Dependencies up to date

## 📈 Optimization Checklist

- [ ] Remove unused code
- [ ] Optimize images
- [ ] Minimize dependencies
- [ ] Use React DevTools Profiler
- [ ] Check bundle analyzer
- [ ] Test Lighthouse score
- [ ] Monitor Core Web Vitals

## 🎓 Learning Path

1. **Understand the structure** - Read PROJECT_SUMMARY.md
2. **Explore components** - Check each component file
3. **Modify styling** - Try changing colors/fonts
4. **Add a platform** - Practice with apps-data.json
5. **Build a feature** - Try adding platform ratings
6. **Deploy it** - Get it live on Vercel

## 🆘 Getting Help

1. Check this quick reference
2. Read full documentation (README.md)
3. Check browser console for errors
4. Review TypeScript errors
5. Search Next.js/Tailwind docs
6. Check GitHub issues for similar problems

## ⚡ Speed Hacks

```bash
# Quick rebuild
npm run build && npm start

# Quick deploy
vercel --prod

# Quick test
npm run dev

# Quick check
npm run type-check && npm run lint

# Quick clean
rm -rf .next node_modules && npm install
```

## 📝 Quick Edits

### Change Hero Title
Edit `app/components/Hero.tsx` line 18

### Change Colors
Edit `tailwind.config.ts` colors section

### Add Category
Add to `app/apps-data.json` and it appears automatically

### Change Spacing
Edit `globals.css` or use Tailwind classes

### Modify Animation
Edit Framer Motion props in components

## 🎬 That's All!

Keep this page bookmarked for quick reference.

**Happy Building! 🚀**

---

For full docs, see: [README.md](./README.md)
