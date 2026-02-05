# Zerodha Clone

A full-stack web application inspired by the Zerodha trading platform.

This project is structured as three independent applications:
- Frontend (public landing pages)
- Dashboard (authenticated trading interface)
- Backend (API and authentication server)

---

## Project Structure

zerodha-clone/
├── frontend/ # Landing page (signup, signin, marketing)
├── dashboard/ # Authenticated trading dashboard
├── backend/ # API, authentication, database
└── README.md


---

## Tech Stack

### Frontend
- React
- React Router
- Axios

### Dashboard
- React
- React Router
- Context API
- Axios

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- JWT (cookie-based authentication)
- bcrypt

---

## Authentication Flow

1. User signs up / logs in from **Frontend**
2. Backend sets an HTTP-only JWT cookie
3. User is redirected to **Dashboard**
4. Dashboard verifies authentication via `/api/auth/verify`
5. Logout clears authentication cookie

No tokens are stored in localStorage.

---

## Local Development

### Backend

localhost:5000

### Frontend

localhost:3000

### Dashboard

localhost:3001


Each application runs independently.

---

## Environment Variables

Each app has its own `.env` file:

- `frontend/.env`
- `dashboard/.env`
- `backend/.env`

Environment files are **not committed**.

---

## Notes

- API URLs are environment-driven
- User data is isolated per account
- Designed for easy deployment on Render (backend) and Vercel (frontend/dashboard)

---

## License

MIT
