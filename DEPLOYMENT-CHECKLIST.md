# Vercel Deployment Checklist

## Pre-Deployment Steps ✅

### 1. Code Preparation (Completed ✓)
- [x] All components built and tested
- [x] Responsive design implemented
- [x] Performance optimizations applied
- [x] Environment variables configured (.env.example)
- [x] Git repository initialized
- [x] .gitignore file configured
- [x] vercel.json configuration added
- [x] package.json updated with production scripts

### 2. Local Testing (To Do)
- [ ] Run production build locally:
  ```bash
  npm run build
  npm start
  ```
- [ ] Test all pages and functionality
- [ ] Check for console errors
- [ ] Verify responsive design on mobile

## GitHub Setup (Required)

### 3. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `globesafecompany`
3. Make it public or private (your choice)
4. DON'T initialize with README (you already have one)
5. Click "Create repository"

### 4. Push Code to GitHub
```bash
# If not already done
git add .
git commit -m "Ready for Vercel deployment"

# Add GitHub remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/globesafecompany.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Vercel Deployment

### 5. Deploy to Vercel
1. Go to https://vercel.com/dashboard
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure deployment:
   - Framework: Next.js (auto-detected)
   - Root Directory: ./
   - Node.js Version: 18.x or 20.x
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 6. Environment Variables
Add these in Vercel Dashboard > Settings > Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
NEXT_PUBLIC_CONTACT_EMAIL=firoz.saifipkw@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+918755309808
NEXT_PUBLIC_WHATSAPP_NUMBER=918755309808
```

### 7. Region Selection
- Already configured for Mumbai (bom1) in vercel.json
- This ensures fastest loading for Indian users

## Post-Deployment

### 8. Domain Setup (Optional)
If you have a custom domain (e.g., globesafecompany.com):
1. Go to Vercel Dashboard > Settings > Domains
2. Add your domain
3. Update DNS records as instructed by Vercel

### 9. Analytics Setup
1. Go to Analytics tab in Vercel Dashboard
2. Enable Web Analytics (free tier available)
3. Monitor visitor traffic and engagement

### 10. Performance Monitoring
1. Check Vercel Speed Insights
2. Monitor Core Web Vitals scores
3. Review function logs for any errors

## Verification Checklist

After deployment, verify:
- [ ] Site loads at Vercel URL
- [ ] All pages navigate correctly
- [ ] Images load properly
- [ ] Contact form works (if backend configured)
- [ ] Mobile responsive design works
- [ ] SEO meta tags are present
- [ ] Site performs well (check with Lighthouse)

## Common Issues & Solutions

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify TypeScript has no errors: `npm run type-check`

### Images Not Loading
- Ensure images are in /public directory
- Use relative paths starting with /
- Check file names are case-sensitive

### Slow Performance
- Enable image optimization in next.config.js
- Review bundle size with `npm run analyze`
- Use dynamic imports for large components

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub Issues: Create issues for tracking bugs/features

## Quick Commands

```bash
# Local development
npm run dev

# Production build test
npm run build && npm start

# Type checking
npm run type-check

# Clean project
npm run clean

# Fresh install
npm run clean && npm install
```

---

Your project is ready for deployment! Follow the steps above to deploy to Vercel.