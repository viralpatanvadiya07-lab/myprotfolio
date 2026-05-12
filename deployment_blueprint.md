# Deployment Blueprint: Viral's Portfolio

This document contains the final configuration and steps to deploy your professional portfolio to **Vercel**.

## 🚀 Project Overview
- **Framework**: React (Vite)
- **Styling**: Tailwind CSS v4
- **Theme**: Emerald Green & Cyan
- **Backend**: Node.js/Express
- **Contact Service**: Formspree (viralpatanvadiya24@gmail.com)

## 📦 Vercel Configuration
To ensure a successful deployment on Vercel, use the following settings:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Vite |
| **Root Directory** | `client` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

## 🛠️ Deployment Steps

### 1. GitHub Preparation
Ensure your code is pushed to GitHub:
```powershell
git add .
git commit -m "Final professional build"
git push origin main
```

### 2. Vercel Deployment
1. Go to [vercel.com](https://vercel.com) and click **"Add New"** -> **"Project"**.
2. Import your GitHub repository.
3. **IMPORTANT**: Under "Project Settings", click "Edit" next to **Root Directory** and select the `client` folder.
4. Ensure "Framework Preset" is set to **Vite**.
5. Click **Deploy**.

## 📧 Contact Form Activation
After deployment, go to your live website and send a test message. Check your email (viralpatanvadiya24@gmail.com) for a confirmation link from **Formspree**. Click it to activate the form.

---
*Created by Antigravity AI Assistant*
