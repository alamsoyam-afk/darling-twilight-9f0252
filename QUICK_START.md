# 🚀 QUICK START - Deploy in 5 Minutes

## Step 1: Prepare Your Machine
```bash
# Ensure you have Node.js installed
node --version  # Should show v16 or higher
```

## Step 2: Install Dependencies (2 minutes)
```bash
cd neighborhood-builders-website
npm install
```

## Step 3: Test Locally (Run Dev Server)
```bash
npm run dev
```
✅ Open browser → `http://localhost:5173`
✅ Test all pages and features
✅ Check mobile responsiveness

## Step 4: Build for Production (1 minute)
```bash
npm run build
```
✅ Creates optimized `dist/` folder

## Step 5: Deploy! (Choose One)

### 🌐 EASIEST: Vercel (Free, 2 minutes)
1. Push code to GitHub
2. Go to vercel.com → Import project
3. Click Deploy
4. ✅ Done! Get free domain

### 🌐 EASY: Netlify (Free, 2 minutes)
1. Push code to GitHub
2. Go to netlify.com → New site from Git
3. Connect GitHub
4. Build command: `npm run build`
5. Publish directory: `dist`
6. ✅ Done! Get free domain

### 🌐 TRADITIONAL: Upload to Hosting
1. FTP/SFTP into your hosting
2. Upload contents of `dist/` folder
3. Point domain to that folder
4. ✅ Done!

### 🌐 DOCKER: Run Anywhere
```bash
docker build -t neighborhood-builders .
docker run -p 3000:3000 neighborhood-builders
```

---

## ✏️ Before Deploying - Update These:

### Contact Information
Edit `src/pages/Contact.jsx` line ~85:
```javascript
{ icon: "📧", title: "Email", content: "YOUR_EMAIL@example.com" }
```

### Company Details
Edit `src/pages/About.jsx` - Update:
- Company description
- Phone number
- Address
- Team info

### Images
1. Replace logo: `public/logo.svg`
2. Add project images to: `public/images/`
3. Update image references in `src/pages/Projects.jsx`

---

## 🧪 Final Checks

Before going live:
- [ ] `npm run build` succeeds
- [ ] No errors in terminal
- [ ] `dist/` folder created
- [ ] All images present
- [ ] Contact info updated
- [ ] Test on mobile device
- [ ] All links working

---

## 📊 Estimated File Sizes

- **Website (gzipped):** ~100KB
- **Images:** Depends on your optimization
- **Total with images:** ~2-5MB (depending on image count/size)

---

## 💡 Pro Tips

✅ Optimize images before uploading (use https://tinypng.com)
✅ Use CDN for images if you have many
✅ Enable caching in your hosting
✅ Set up SSL/HTTPS (most hosts do this automatically)
✅ Monitor performance with Google PageSpeed Insights

---

## ❓ Troubleshooting

**Issue:** Port already in use
**Solution:** Vite automatically tries next port (5174, 5175, etc.)

**Issue:** Build fails
**Solution:** Run `npm install` again, then `npm run build`

**Issue:** Images not showing after deploy
**Solution:** Check image paths start with `/` and files are in `public/images/`

**Issue:** Styles not loading
**Solution:** Ensure `npm run build` completed successfully with `dist/` folder

---

## 🎉 You're All Set!

Your website is now ready to deploy. Choose your hosting platform above and you'll be live in minutes!

**Questions?** Refer to `DEPLOYMENT_GUIDE.md` for detailed information.

---

**Current Status:** ✅ Website is complete and ready for deployment
**Next Step:** Run `npm run build` then deploy the `dist/` folder
