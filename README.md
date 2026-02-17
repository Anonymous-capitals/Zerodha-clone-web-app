# Zerotrade – Web Demo Trading Application

A full-stack web application demonstrating a modern online trading platform. Zerotrade is an educational project that showcases real-time trading, portfolio management, and market insights.

This project is structured as three independent applications:
- **Frontend** – Public landing pages with information about Zerotrade
- **Dashboard** – Authenticated trading interface for users
- **Backend** – REST API and authentication server

---

## Project Structure

```
zerotrade/
├── frontend/       # Landing page & marketing site
├── dashboard/      # Authenticated trading dashboard
├── backend/        # REST API & authentication
└── README.md
```


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

## Key Features

- **User Authentication** – Secure signup/login with JWT tokens
- **Trading Dashboard** – View orders, holdings, and positions
- **Portfolio Management** – Track your investments and performance
- **Order Management** – Buy and sell orders (demo data)
- **User Profile** – Manage account settings
- **Responsive Design** – Works seamlessly on desktop and mobile

---

## Authentication Flow

1. User signs up or logs in from the **Frontend**
2. Backend authenticates credentials and sets an HTTP-only JWT cookie
3. User is redirected to the **Dashboard**
4. Dashboard verifies authentication via `/api/auth/verify` endpoint
5. Authenticated requests include the JWT cookie automatically
6. Logout clears the authentication cookie

No tokens are stored in localStorage for security.

---

## Local Development

Each component runs independently:

- **Backend API**: `http://localhost:5000`
- **Frontend**: `http://localhost:3000`
- **Dashboard**: `http://localhost:3001`

---

## Environment Variables

Each application requires its own `.env` file:

```
frontend/.env
dashboard/.env
backend/.env
```

Environment files are **not** committed to the repository.

---

## Deployment

- **Backend**: Deploy to Render or similar Node.js platform
- **Frontend & Dashboard**: Deploy to Vercel or similar React hosting

---

## License

MIT
