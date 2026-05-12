# Neighborhood Builders Website - Deployment Guide

## 📋 Project Overview
A modern React-based construction company website with 7 pages, animations, and responsive design.

---

## 🚀 Quick Start (Deploy Anywhere)

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173` (or next available port)

### Step 3: Build for Production
```bash
npm run build
```
This creates an optimized `dist/` folder ready for deployment.

---

## 📦 Deployment Options

### Option 1: Netlify (Recommended - Free & Easy)
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Option 2: Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Auto-detected framework: React
4. Deploy!

### Option 3: Traditional Hosting (cPanel, etc.)
1. Run `npm run build`
2. Upload contents of `dist/` folder to your hosting
3. Point domain to the `dist` folder
4. Done!

### Option 4: Docker (Advanced)
```bash
docker build -t neighborhood-builders .
docker run -p 3000:3000 neighborhood-builders
```

---

## 📁 Project Structure
```
neighborhood-builders-website/
├── public/                    # Static assets
│   ├── logo.svg              # Company logo
│   └── images/               # Project images
│       ├── project-kitchen-1.jpg
│       ├── project-bathroom-1.jpg
│       ├── project-living-room-1.jpg
│       └── ... (more images)
├── src/                       # Source code
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation header
│   │   └── LiveChat.jsx       # Chat widget
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # Company info
│   │   ├── Services.jsx      # Services list
│   │   ├── Projects.jsx      # Project portfolio
│   │   ├── Testimonials.jsx  # Client reviews
│   │   ├── Booking.jsx       # Quote request form
│   │   └── Contact.jsx       # Contact page
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite config
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
└── README.md                 # Project info
```

---

## 🎨 Customization

### Update Company Information
Edit the following files:
- **Company Name**: Search for "Neighborhood Builders" in all files
- **Logo**: Replace `public/logo.svg`
- **Contact Info**: Update in `src/pages/Contact.jsx`
- **Services**: Edit in `src/pages/Services.jsx`
- **Projects**: Add/edit in `src/pages/Projects.jsx`

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1a1a1a',      // Dark color
  secondary: '#f5f5f5',    // Light color
  accent: '#d4af37'        // Gold color
}
```

### Add Images
1. Place images in `public/images/`
2. Reference them in components as `/images/your-image.jpg`

---

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

---

## 📱 Features Included

✅ 7 complete pages with routing
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations and transitions
✅ Professional color scheme
✅ Contact forms
✅ Project portfolio with filtering
✅ Live chat widget
✅ SEO-optimized meta tags
✅ Fast loading with Vite

---

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Vite 4** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **React Router** - Page routing
- **Vite React Plugin** - JSX support

---

## 📞 Support & Next Steps

1. **Test locally**: `npm run dev`
2. **Build production**: `npm run build`
3. **Deploy**: Choose your hosting platform above
4. **Monitor**: Check site performance

---

## ✅ Pre-Deployment Checklist

- [ ] All images optimized and in place
- [ ] Contact information updated
- [ ] Company details customized
- [ ] Links and routes working
- [ ] Forms functional
- [ ] Mobile responsive (tested)
- [ ] Build succeeds: `npm run build`
- [ ] No console errors

---

**Ready to deploy! Choose your platform and follow the instructions above.**
