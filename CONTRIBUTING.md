# Contributing Guide

Thank you for your interest in contributing to Platform Showcase! This guide will help you get started.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9.0.0 or later
- Git
- Code editor (VS Code recommended)

### Setup

1. **Clone the repository:**
   ```bash
   cd ~/.openclaw/workspace/app-showcase-v2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app-showcase-v2/
├── app/
│   ├── components/          # React components
│   │   ├── AppCard.tsx      # Platform card
│   │   ├── AppModal.tsx     # Detail modal
│   │   ├── FilterBar.tsx    # Filters and sorting
│   │   ├── Hero.tsx         # Hero section
│   │   ├── ParticleBackground.tsx  # Animated background
│   │   ├── EmptyState.tsx   # Empty states
│   │   └── LoadingState.tsx # Loading skeleton
│   ├── apps-data.json       # Platform data
│   ├── types.ts             # TypeScript types
│   ├── page.tsx             # Main page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind config
├── next.config.ts           # Next.js config
└── package.json             # Dependencies
```

## 🎨 Design System

### Colors

```css
--navy: #1a1d2e;        /* Background */
--navy-light: #252941;  /* Cards */
--purple: #764ba2;      /* Accent */
--blue: #667eea;        /* Accent */
```

### Typography

- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Spacing

- Massive vertical spacing: minimum 8rem between sections
- Card padding: 2rem (8 on Tailwind scale)
- Grid gap: 2rem

### Effects

- Glass-morphism: `backdrop-blur-xl` + `bg-navy-light/30`
- Glow: Gradient shadow with purple/blue
- Animations: Framer Motion with 0.3-0.8s duration

## 🛠️ Development Workflow

### Making Changes

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

3. **Test locally:**
   ```bash
   npm run dev
   npm run build
   npm run lint
   npm run type-check
   ```

4. **Commit changes:**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   ```

5. **Push and create PR:**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Convention

Use descriptive commit messages:

- `Add: new feature`
- `Fix: bug description`
- `Update: component or file`
- `Refactor: code improvement`
- `Style: visual changes`
- `Docs: documentation update`

## 📝 Adding New Platforms

To add a new platform to the showcase:

1. **Edit `app/apps-data.json`:**
   ```json
   {
     "id": "unique-id",
     "name": "Platform Name",
     "url": "https://example.com",
     "description": "Short description (80-150 chars)",
     "detailed": "Full description (800-1400 chars)",
     "category": "AI|Crypto|Design|Marketing|Development|Security|Finance|Other",
     "pricingModel": "Free|Paid|Free/Paid|Unknown",
     "tags": ["tag1", "tag2", "tag3"],
     "votes": 0,
     "createdAt": "2026-02-10T00:00:00.000Z"
   }
   ```

2. **Verify the data:**
   - All required fields present
   - URL is valid and accessible
   - Description is clear and concise
   - Detailed text provides real value
   - Category matches existing categories
   - Tags are relevant and lowercase

3. **Test:**
   ```bash
   npm run dev
   ```
   - Search for the new platform
   - Filter by its category
   - Open detail modal
   - Verify all links work

## 🧩 Adding New Features

### Example: Add Rating System

1. **Update types:**
   ```typescript
   // app/types.ts
   export interface App {
     // ... existing fields
     rating?: number;
   }
   ```

2. **Update UI:**
   ```typescript
   // app/components/AppCard.tsx
   {app.rating && (
     <div className="flex items-center">
       <Star className="text-yellow-400" />
       <span>{app.rating}</span>
     </div>
   )}
   ```

3. **Update data:**
   ```json
   // app/apps-data.json
   {
     "id": "...",
     "rating": 4.5
   }
   ```

4. **Test thoroughly**

## 🎯 Component Guidelines

### Component Structure

```typescript
'use client'; // If using hooks/interactions

import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

interface ComponentProps {
  prop1: string;
  prop2: number;
  onAction: () => void;
}

export default function Component({ prop1, prop2, onAction }: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="..."
    >
      {/* Component content */}
    </motion.div>
  );
}
```

### Best Practices

- Use TypeScript for type safety
- Use Tailwind classes (avoid inline styles)
- Use Framer Motion for animations
- Use lucide-react for icons
- Keep components focused and reusable
- Add proper TypeScript types
- Use semantic HTML
- Ensure accessibility (aria labels, keyboard navigation)

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Search filters platforms
- [ ] Category filter works
- [ ] Sort options work
- [ ] Vote system persists
- [ ] Favorites system works
- [ ] Modal opens/closes
- [ ] External links work
- [ ] Responsive on all devices
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Performance is good

### Browser Testing

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers

## 🎨 Style Guidelines

### Tailwind Usage

**Good:**
```tsx
<div className="bg-navy-light/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
```

**Avoid:**
```tsx
<div style={{ background: 'rgba(37, 41, 65, 0.3)' }}>
```

### Animation Guidelines

- Use Framer Motion for complex animations
- Use CSS transitions for simple hover effects
- Keep durations between 0.2s - 0.8s
- Use easing: `ease-out` or `cubic-bezier(0.4, 0, 0.2, 1)`

### Responsive Design

- Mobile-first approach
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`
- Test all breakpoints
- Ensure touch targets are 44x44px minimum

## 📚 Resources

### Documentation

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev/)

### Tools

- [VS Code](https://code.visualstudio.com/)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🐛 Bug Reports

When reporting bugs, include:

1. **Description:** Clear description of the issue
2. **Steps to reproduce:** Numbered list of steps
3. **Expected behavior:** What should happen
4. **Actual behavior:** What actually happens
5. **Environment:**
   - OS and version
   - Browser and version
   - Node.js version
6. **Screenshots:** If applicable
7. **Console errors:** Copy/paste any errors

## 💡 Feature Requests

When requesting features:

1. **Use case:** Why is this needed?
2. **Description:** What should it do?
3. **Examples:** How would it work?
4. **Mockups:** Visual examples (if applicable)

## 🤝 Code Review

Pull requests should:

- Have a clear description
- Reference related issues
- Include tests (when applicable)
- Follow the style guide
- Be focused (one feature per PR)
- Include screenshots for UI changes

## 📋 Code Style

### TypeScript

```typescript
// Use interfaces for objects
interface AppProps {
  app: App;
  onClick: () => void;
}

// Use type for unions
type SortOption = 'name' | 'category' | 'votes';

// Use const for immutable values
const ITEMS_PER_PAGE = 12;
```

### Naming Conventions

- **Components:** PascalCase (`AppCard.tsx`)
- **Files:** kebab-case for non-components (`apps-data.json`)
- **Variables:** camelCase (`selectedApp`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **Types/Interfaces:** PascalCase (`App`, `FilterState`)

## 🏆 Recognition

Contributors will be:
- Listed in the project README
- Credited in release notes
- Appreciated in the community

## 📞 Questions?

- Check the [README.md](./README.md)
- Review existing code
- Ask in discussions/issues

Thank you for contributing! 🎉
