# Zerodha Clone – Backend

Backend API for the Zerodha Clone project.

---

## Purpose

- User authentication (signup, login, logout)
- JWT-based auth with HTTP-only cookies
- Serves data for dashboard (orders, holdings, positions)

---

## Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- JWT
- bcrypt

---

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
NODE_ENV=development
MONGO_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/zerodha_clone
JWT_SECRET=your_jwt_secret
