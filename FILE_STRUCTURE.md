# File Structure & Purpose Guide

## 📁 Root Level Files

### Configuration Files
| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `vite.config.js` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS theme customization |
| `postcss.config.js` | CSS processing configuration |
| `.env.example` | Environment variables template |
| `.gitignore` | Git ignore rules |

### Documentation
| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `DEPLOYMENT_GUIDE.md` | How to deploy the website |
| `FILE_STRUCTURE.md` | This file - guide to all files |
| `index.html` | Main HTML file (entry point) |

---

## 📂 `/public` - Static Assets

### Logo
- `logo.svg` - Company logo (used in navbar)

### Images
- `images/project-*.jpg` - Project portfolio images
- `images/logo.png` - Alternative logo format (if needed)

**Note:** All images in public folder are served as-is and not processed by build tools.

---

## 📂 `/src` - Source Code

### `App.jsx`
- Main application component
- Sets up routing for all pages
- Imports and configures all routes

### `main.jsx`
- Entry point for the application
- Mounts React to the DOM
- Imports global styles

### `index.css`
- Global CSS styles
- Tailwind CSS directives
- Custom button styles
- Hero background styles

---

## 📂 `/src/components` - Reusable Components

### `Navbar.jsx`
**Purpose:** Navigation header
- Fixed position at top
- Company logo and name
- Navigation links to all pages
- Smooth animations

### `LiveChat.jsx`
**Purpose:** Floating chat widget
- Appears in bottom-right corner
- Open/close functionality
- Placeholder chat interface

---

## 📂 `/src/pages` - Page Components

### `Home.jsx`
**Purpose:** Landing page
- Hero section with tagline
- Service previews
- Featured projects showcase
- Testimonials preview
- Call-to-action sections
- **Note:** Do not modify (as per user request)

### `About.jsx`
**Purpose:** Company information
- Company story section
- Core values display
- Why choose us section
- Team information
- Contact CTA

### `Services.jsx`
**Purpose:** Service catalog
- 11 different services displayed
- Service description cards
- Icons and emojis
- Quote request links
- **Note:** Do not modify (as per user request)

### `Projects.jsx`
**Purpose:** Project portfolio
- 12 projects with images
- Category filtering (Kitchen, Bathroom, Living Room, Office, Bedroom, Renovation)
- Project cards with hover effects
- Masonry-style grid layout
- **Recently Fixed:** Image mappings corrected

### `Testimonials.jsx`
**Purpose:** Client reviews
- Customer testimonials display
- Star ratings
- Client names and locations
- Card-based layout

### `Booking.jsx`
**Purpose:** Quote request form
- Form fields: name, email, phone, service, details
- Service selection dropdown
- Professional styling
- Success message on submit
- **Recently Updated:** Improved form aesthetics

### `Contact.jsx`
**Purpose:** Contact information & form
- Contact form (name, email, phone, message)
- Contact information cards
- Business hours
- Service areas
- FAQ section
- **Recently Updated:** Enhanced styling and decoration

---

## 🎨 Styling System

### Tailwind CSS Classes Used
```
Layout:
- container, mx-auto, px-6 (responsive container)
- grid, gap (responsive grids)
- flex, items-center, justify-between (flexbox)

Colors:
- bg-primary, bg-secondary, bg-accent (custom colors)
- text-white, text-primary, text-neutral (text colors)
- text-accent (gold accent color)

Spacing:
- py-12, py-20, p-6, p-8 (padding)
- mb-4, mb-6, mb-12 (margins)

Effects:
- rounded-lg, shadow-lg, shadow-xl
- hover:shadow-xl, transition duration-300
- opacity-90, opacity-80 (transparency)

Responsive:
- md:, lg: (media query prefixes)
- hidden, block, md:block (display)
```

### Custom CSS (index.css)
```css
.btn - Button styling (primary action)
.hero-bg - Hero section background
```

### Tailwind Colors (tailwind.config.js)
```javascript
primary: '#1a1a1a'   // Dark color (navbar, text)
secondary: '#f5f5f5' // Light color (sections)
accent: '#d4af37'    // Gold color (highlights, buttons)
```

---

## 🚀 Build & Deployment Files

### Generated After Build
- `/dist` - Optimized production-ready files
- `/dist/index.html` - Compiled HTML
- `/dist/assets/` - Compiled JS and CSS bundles
- `/node_modules` - Installed dependencies (don't include in deployment)

---

## 📝 Key Configuration Details

### `vite.config.js`
- Vite build configuration
- React plugin enabled
- Default port: 5173 (auto-increments if busy)

### `tailwind.config.js`
- Theme colors defined
- Font families (Poppins, Quicksand)
- Custom spacing and sizing
- Responsive breakpoints

### `postcss.config.js`
- Tailwind CSS processor
- Autoprefixer for browser compatibility

### `package.json`
- Dependencies (React, React Router, Framer Motion)
- Dev dependencies (Vite, Tailwind, ESLint)
- Scripts (dev, build, preview)
- Version: 0.0.0 (update as needed)

---

## 🔄 Deployment Checklist

Before deploying, ensure:

1. **All Images Present**
   - [ ] Logo at `/public/logo.svg`
   - [ ] Project images at `/public/images/`
   - [ ] No broken image links

2. **Configuration Updated**
   - [ ] `.env.local` created from `.env.example`
   - [ ] Company info in Contact/About pages
   - [ ] Email addresses updated
   - [ ] Phone numbers updated

3. **Content Verified**
   - [ ] All text proofread
   - [ ] Links working
   - [ ] Forms functional
   - [ ] No console errors

4. **Build Successful**
   - [ ] `npm run build` completes without errors
   - [ ] `dist/` folder created
   - [ ] All assets included

5. **Testing Complete**
   - [ ] Desktop responsive
   - [ ] Mobile responsive (tested on phone)
   - [ ] Tablet responsive
   - [ ] All pages accessible
   - [ ] Forms submit properly

---

## 📊 File Sizes (Approximate)

| File | Size |
|------|------|
| React + ReactDOM | ~40KB (gzipped) |
| Tailwind CSS | ~15KB (gzipped) |
| Framer Motion | ~25KB (gzipped) |
| Project images | Varies (optimize before deploy) |

---

## 🔒 Security Notes

- ✅ No sensitive data in source code
- ✅ Use `.env.local` for secrets (not included in git)
- ✅ All APIs should be on HTTPS in production
- ✅ Sanitize form submissions on backend

---

## 🎯 Customization Quick Links

| To Change | Edit File | Look For |
|-----------|-----------|----------|
| Company Name | All files | "Neighborhood Builders" |
| Logo | `Navbar.jsx` | `<img src="/logo.svg"` |
| Colors | `tailwind.config.js` | `colors: { ... }` |
| Contact Info | `Contact.jsx` | Email, phone, address |
| Services | `Services.jsx` | Services array |
| Projects | `Projects.jsx` | Projects array |
| Testimonials | `Testimonials.jsx` | Testimonials array |

---

**Ready to deploy! Use DEPLOYMENT_GUIDE.md for step-by-step instructions.**
