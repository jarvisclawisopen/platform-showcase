# Platform Showcase

A premium web application showcasing 72 cutting-edge platforms across AI, crypto, design, marketing, and more. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion, featuring a DNA Capital-inspired design aesthetic.

![Platform Showcase](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- **🔍 Real-time Search** - Filter platforms instantly by name, description, or tags
- **🏷️ Category Filtering** - Browse by 10+ categories (AI, Crypto, Design, Marketing, etc.)
- **🔄 Multiple Sort Options** - Sort by name (A-Z), category, or vote count
- **👍 Vote System** - Like your favorite platforms with persistent localStorage
- **❤️ Favorites** - Save and filter your favorite platforms
- **📱 Responsive Design** - Mobile-first, works beautifully on all devices
- **🎨 Premium UI** - Glass-morphism cards with 3D particle animations
- **⚡ Performance Optimized** - Lazy loading, optimized images, smooth animations
- **🌐 SEO Ready** - Proper meta tags and Open Graph support

## 🎨 Design Highlights

- **Dark navy background** (#1a1d2e) with blue-purple gradient accents
- **Large serif typography** using Playfair Display for headings
- **Glass-morphism cards** with subtle borders and backdrop blur
- **3D particle animation** background with interactive connections
- **Smooth animations** powered by Framer Motion
- **Massive vertical spacing** for a breathable, premium feel
- **Soft colored shadows** with blue/purple glow effects

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd ~/.openclaw/workspace/app-showcase-v2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Project Structure

```
app-showcase-v2/
├── app/
│   ├── components/
│   │   ├── ParticleBackground.tsx   # 3D particle animation
│   │   ├── Hero.tsx                 # Hero section with search
│   │   ├── FilterBar.tsx            # Category and sort filters
│   │   ├── AppCard.tsx              # Platform card component
│   │   ├── AppModal.tsx             # Detail modal overlay
│   │   ├── EmptyState.tsx           # Empty state UI
│   │   └── LoadingState.tsx         # Loading skeleton
│   ├── apps-data.json               # Platform data (72 entries)
│   ├── types.ts                     # TypeScript interfaces
│   ├── page.tsx                     # Main page component
│   ├── layout.tsx                   # Root layout with fonts
│   └── globals.css                  # Global styles
├── public/                          # Static assets
├── tailwind.config.ts               # Tailwind configuration
├── package.json                     # Dependencies
└── README.md                        # This file
```

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Playfair Display (serif), Inter (sans-serif)
- **Icons:** Lucide React
- **State Management:** React Hooks + localStorage

## 📊 Data Structure

Each platform includes:

```typescript
interface App {
  id: string;
  name: string;
  url: string;
  description: string;      // Short description
  detailed: string;         // Full description (800-1400 chars)
  category: string;         // AI, Crypto, Design, etc.
  pricingModel: string;     // Free, Paid, Free/Paid, Unknown
  tags: string[];           // Searchable tags
  votes: number;            // Vote count
  createdAt: string;        // ISO timestamp
}
```

## 🎯 Key Components

### ParticleBackground
3D particle animation with interactive connections, creating depth and movement.

### Hero
Large serif heading, search bar with glass effect, and animated entrance.

### FilterBar
Category dropdown, sort options, and favorites toggle with hover effects.

### AppCard
Glass-morphism card with gradient glow on hover, vote button, favorite toggle, and external link.

### AppModal
Full-screen overlay with blur backdrop, detailed info, and all card actions.

## 💾 LocalStorage Features

The app persists user data in localStorage:

- **app-votes** - User vote records
- **app-favorites** - Favorited platform IDs

Data persists across sessions and page reloads.

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Production deployment:**
   ```bash
   vercel --prod
   ```

### Other Platforms

The app is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any Node.js hosting platform

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  navy: {
    DEFAULT: '#1a1d2e',
    light: '#252941',
    dark: '#12141f',
  },
  purple: { DEFAULT: '#764ba2' },
  blue: { DEFAULT: '#667eea' },
}
```

### Typography

Fonts are defined in `app/layout.tsx`:
- Headings: Playfair Display
- Body: Inter

### Add More Platforms

Edit `app/apps-data.json` to add new platforms following the existing structure.

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - PostCSS configuration

## 🌟 Performance Optimizations

- **Server Components** - Used where possible for better performance
- **Client Components** - Only for interactive features
- **Lazy Loading** - Images and components load on demand
- **Optimized Animations** - GPU-accelerated Framer Motion
- **Memoization** - useMemo for expensive computations
- **Debounced Search** - Smooth search experience

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🤝 Contributing

Feel free to customize and extend this project:

1. Add new features
2. Improve animations
3. Enhance accessibility
4. Add more platforms
5. Optimize performance

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- **Design Inspiration:** DNA Capital (dnacapital.com)
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Playfair Display, Inter)
- **Framework:** Next.js by Vercel

## 📞 Support

For issues or questions:
1. Check the documentation
2. Review the code comments
3. Test in development mode
4. Check browser console for errors

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**

**Ready to deploy:** `vercel` or `npm run build && npm start`
