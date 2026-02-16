# Deployment Guide

## Dashboard not deploying (e.g. on Vercel)

1. **Root directory**: If the repo has both `frontend` and `dashboard`, deploy the dashboard as a **separate Vercel project** and set **Root Directory** to `dashboard` (in Project Settings → General).

2. **Environment variables** (Dashboard project on Vercel):
   - `REACT_APP_API_BASE_URL` = your backend URL (e.g. `https://zerodha-clone-web-app-backend.onrender.com`)
   - `REACT_APP_URL` = your frontend URL (for logout redirect)

3. **Backend** (e.g. Render): Set `MONGO_URL` to your **MongoDB Atlas** connection string and `JWT_SECRET`. Add `DASHBOARD_URL` and `CLIENT_URL` to CORS allowed origins if needed.

4. **Build**: The dashboard uses `react-scripts build`; no custom build command needed. Run `npm run build` from the `dashboard` folder to verify locally.

## Orders & holdings per user

- Orders, holdings, and positions are stored in **MongoDB Atlas** and are **per user** (filtered by `userId` from the JWT).
- Ensure `MONGO_URL` in the backend points to your Atlas cluster so all user data is persisted there.
