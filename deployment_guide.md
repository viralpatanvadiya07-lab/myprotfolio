# Deployment Guide for Your Portfolio

Since your project has a **Client** (Frontend) and a **Server** (Backend), we will deploy them separately for the best performance and stability.

## 1. Deploying the Frontend (Client)
We will use **Vercel** for the frontend because it's fast and easy for React/Vite projects.

### Steps:
1. Open your terminal and go to the `client` directory:
   ```powershell
   cd client
   ```
2. Run the deployment command:
   ```powershell
   npx vercel
   ```
3. Follow the prompts:
   - "Set up and deploy?" -> **Y**
   - "Which scope?" -> **Select your account**
   - "Link to existing project?" -> **N**
   - "What's your project's name?" -> **my-portfolio**
   - "In which directory is your code located?" -> **./**
   - "Want to modify settings?" -> **N** (Vercel will auto-detect Vite)

---

## 2. Deploying the Backend (Server)
We will use **Render** for the backend because it provides free hosting for Express/Node.js apps.

### Steps:
1. Create a free account on [Render.com](https://render.com/).
2. Click **New** -> **Web Service**.
3. Connect your GitHub repository (you'll need to push your code to GitHub first).
4. Set the following settings:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Add your **Environment Variables** (from your `.env` file) in the "Environment" tab on Render.

---

## 3. Connecting Frontend to Backend
Once both are deployed:
1. Get your **Backend URL** from Render (e.g., `https://your-api.onrender.com`).
2. Update your frontend code (wherever you call the API) to use this URL.
3. Redeploy the client with `npx vercel --prod`.

---

> [!TIP]
> Since you are using **Formspree** for the contact form, you don't even need to wait for the backend deployment to have a working website! The frontend is already 100% functional.
