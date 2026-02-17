# Zerotrade – Backend API

REST API server for the Zerotrade web demo trading application.

---

## Purpose

- User authentication (signup, login, logout)
- JWT-based authentication with HTTP-only cookies
- Serves trading data for the dashboard (orders, holdings, positions)
- Manages user accounts and portfolio data

---

## Key Dependencies

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database via Mongoose ODM
- **JWT** – Token-based authentication
- **bcrypt** – Password hashing and verification

---

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
NODE_ENV=development
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/zerotrade
JWT_SECRET=your_secure_jwt_secret_key
```

Replace placeholders with your actual MongoDB credentials and a secure secret.

---

## API Endpoints

### Authentication
- `POST /api/auth/signup` – Register a new user
- `POST /api/auth/login` – Authenticate user and set cookie
- `GET /api/auth/verify` – Check authentication status
- `GET /api/auth/logout` – Clear authentication cookie

### User Data
- `GET /api/user/profile` – Get user profile
- `GET /api/orders` – Get user's orders
- `GET /api/holdings` – Get user's holdings
- `GET /api/positions` – Get user's open positions

---

## Database Models

- **User** – User account and authentication info
- **Orders** – Trading orders (buy/sell)
- **Holdings** – Long-term stock holdings
- **Positions** – Open trading positions

---

## Getting Started

1. Install dependencies: `npm install`
2. Configure `.env` file with MongoDB credentials
3. Start the server: `npm start`
4. API will be available at `http://localhost:5000`

---

## License

MIT
