# AI Automation Portfolio

A polished portfolio website showcasing AI automation projects and workflows across different departments.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-friendly layout
- 🖼️ Image galleries for each workflow
- 📊 Organized by departments (Sales & Marketing, IT Operations, HR & Recruiting, Other)
- ⚡ Built with Next.js 14

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Adding New Workflows

To add a new workflow, edit `data/workflows.ts`:

1. Add your workflow image(s) to `public/images/[category]/[workflow-name]/`
2. Add the workflow object to the appropriate category array in `data/workflows.ts`
3. Include:
   - `id`: Unique identifier
   - `title`: Workflow name
   - `description`: Detailed description
   - `keyFeatures`: Array of key features (optional)
   - `images`: Array of image paths (relative to `/public`)

## 🚀 Quick Deploy to Vercel (FREE)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Select your repository
4. Click "Deploy" (settings auto-detected)
5. Get your free URL: `your-portfolio.vercel.app`

**That's it!** Your portfolio is live and shareable! 🎉

### Alternative: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## 📤 Share Your Portfolio

Once deployed, share your Vercel URL:
- `https://your-portfolio.vercel.app`
- Free custom domain available on Vercel

## Project Structure

```
portfolio-aryan/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── WorkflowCard.tsx
│   └── WorkflowSection.tsx
├── data/              # Workflow data
│   └── workflows.ts
├── public/            # Static assets
│   └── images/       # Workflow images
└── package.json
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

