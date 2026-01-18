# Deployment Guide - Vercel

## Quick Deploy to Vercel (Free)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

3. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your free URL: `your-portfolio.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose default settings
   - Get your deployment URL

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## After Deployment

Your portfolio will be live at:
- **Development:** `your-portfolio.vercel.app`
- **Production:** `your-portfolio.vercel.app` (or custom domain)

## Share Your Portfolio

Once deployed, you can share:
- The Vercel URL: `https://your-portfolio.vercel.app`
- Or add a custom domain (free on Vercel)

## Notes

- ✅ Free hosting forever
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deploys on git push
- ✅ No credit card required

