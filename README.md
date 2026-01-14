# XLONG WORLD Website

A modern, professional consulting website built with React, Vite, and Tailwind CSS.

## 🚀 Deployment to Cloudflare Pages

This project is optimized for [Cloudflare Pages](https://pages.cloudflare.com/), a JAMstack platform for frontend developers.

### Steps to Deploy:

1.  **Push to Git:** Push this code to a GitHub or GitLab repository.
2.  **Create Project:** Go to Cloudflare Dashboard > Pages > Create a project > Connect to Git.
3.  **Select Repository:** Choose your `xlong-world-website` repo.
4.  **Configure Build:**
    *   **Framework Preset:** `Vite`
    *   **Build Command:** `npm run build` (or `pnpm run build` if using pnpm)
    *   **Build Output Directory:** `dist`
5.  **Deploy:** Click "Save and Deploy".

Cloudflare will automatically build and deploy your site. Any subsequent pushes to the repository will trigger a new deployment.

## 🛠 Project Structure

*   `src/pages`: Individual route components (Home, About, etc.)
*   `src/components`: Reusable UI components (Navbar, Footer, Shadcn UI)
*   `src/lib/data.ts`: Content data for Capabilities and Industries
*   `src/index.css`: Global styles and Theme configuration (Tailwind v4)

## 🎨 Customization

*   **Colors/Theme:** Edit `src/index.css`. The project uses a **Clean Professional Theme** (White/Black/Ochre) inspired by top consulting firms.
*   **Content:** Edit `src/lib/data.ts` to update lists of services and industries.
