# Globe Safe Company Website

A modern, professional website for Globe Safe Company - a leading manufacturer and supplier of safety lockers, security safes, and vaults based in Ghaziabad, India.

## 🌐 Live Demo

Visit: http://localhost:3002

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Product Catalog**: Comprehensive showcase of 9+ security products
- **Interactive**: Dynamic filtering, search, and category browsing
- **Contact Integration**: Contact forms, maps, and direct communication
- **SEO Optimized**: Meta tags and structured content

## 📂 Pages

1. **Homepage** - Hero section, features, products showcase, testimonials
2. **About Us** - Company history, mission, vision, and timeline
3. **Products** - Full catalog with filtering and search
4. **Product Details** - Individual pages for each product
5. **Contact** - Contact form, location, and business hours

## 🛠️ Technology Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
cd /Users/param/projects/globesafecompany
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
# or on a specific port
PORT=3002 npm run dev
```

4. Open http://localhost:3002 in your browser

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

The website can be deployed to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting service**

### Deploy to Vercel

```bash
npx vercel
```

## 📱 Company Information

**Globe Safe Company**
- **Established**: 2014
- **Location**: Near SBI, Shamshad Road, Bhojpuri, Pilkhuwa, Ghaziabad, UP - 245304
- **Phone**: +91-8755309808
- **Email**: firoz.saifipkw@gmail.com

## 🔧 Project Structure

```
globesafecompany/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── products/          # Products pages
│   └── contact/           # Contact page
├── components/            # React components
│   ├── layout/           # Layout components
│   └── home/             # Homepage sections
├── lib/                  # Utilities and data
│   └── data/            # Product data
├── public/              # Static assets
└── styles/              # Global styles
```

## 🎨 Color Scheme

- **Primary Blue**: #2563eb
- **Secondary Red**: #dc2626
- **Accent Gold**: #f59e0b
- **Text**: Gray scale
- **Background**: White/Light gray

## 📈 SEO Features

- Meta tags for all pages
- Structured data
- Sitemap ready
- Responsive images
- Fast loading times

## 👨‍💻 Development

To add new products, edit `/lib/data/products.ts`

To modify styles, edit `/app/globals.css` or component files

To add new pages, create new directories in `/app`

## 🚀 Deployment

### Deploying to Vercel

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Environment Variables**
   Add these in Vercel Dashboard > Settings > Environment Variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_CONTACT_EMAIL=info@globesafecompany.in
   NEXT_PUBLIC_CONTACT_PHONE=+918755309808
   ```

4. **Domain Configuration**
   - Go to Settings > Domains
   - Add your custom domain (e.g., globesafecompany.com)
   - Follow Vercel's DNS configuration instructions

### Post-Deployment

1. **Enable Analytics**
   - Go to Analytics tab in Vercel Dashboard
   - Enable Web Analytics (free tier available)

2. **Monitor Performance**
   - Check Core Web Vitals
   - Monitor error logs in Functions tab

3. **Set up Preview Deployments**
   - Each push to a branch creates a preview URL
   - Test changes before merging to main

## 📦 Production Optimizations

- **Image Optimization**: Using Next.js Image component with automatic optimization
- **Code Splitting**: Automatic code splitting for faster page loads
- **Static Generation**: Pages are pre-rendered at build time
- **Edge Caching**: Vercel automatically caches at edge locations
- **SEO Ready**: Meta tags and structured data configured

## 📄 License

© 2024 Globe Safe Company. All rights reserved.

---

**Developed with ❤️ for Globe Safe Company**
