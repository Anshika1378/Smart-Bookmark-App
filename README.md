# Smart Bookmark App

Author: **Anshika Agarwal**

## 📖 Overview
Smart Bookmark App is a Next.js + Supabase project that allows users to save, list, and manage bookmarks with authentication powered by Google OAuth.  
The app is deployed on **Vercel** and uses **Supabase** as the backend service.

---

## 🚀 Tech Stack
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (Auth + Database)
- **Deployment**: Vercel
- **Authentication**: Google OAuth (via Supabase)

---

## ⚙️ Setup Process

### 1. Supabase Setup
- Create a new project in [Supabase](https://supabase.com).
- Copy **Project URL** and **Anon Key**.
- Configure **Authentication → URL Configuration**:
  - **Site URL**:  
    ```
    https://smart-bookmark-app-psi-gold.vercel.app
    ```
  - **Redirect URLs**:  
    ```
    http://localhost:3000/auth/callback
    https://smart-bookmark-app-psi-gold.vercel.app/bookmarks
    ```

---

### 2. Google Console Setup
- Go to [Google Cloud Console](https://console.cloud.google.com).
- Create a new **OAuth Client ID**.
- Add **Authorized redirect URIs**:
