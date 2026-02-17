# Zerotrade – Trading Dashboard

Authenticated trading dashboard for the Zerotrade web demo trading application.

---

## Purpose

- Display user-specific trading and portfolio data
- Provide a secure, authenticated trading interface
- Enable users to manage orders, holdings, and positions
- Manage user account and profile settings

---

## Key Features

### Dashboard Overview
- Portfolio summary and performance metrics
- Quick access to key information

### Orders
- View all buy/sell orders
- Order history and status

### Holdings
- Long-term share holdings
- Cost basis and current value
- Performance tracking

### Positions
- Open trading positions
- Entry price and current price
- Position size and P&L

### Funds
- Account balance and available funds
- Withdrawal and deposit history

### User Account
- Profile management
- Account settings
- Logout functionality

---

## Tech Stack

- **React** – UI library
- **React Router** – Client-side routing
- **Axios** – HTTP client for API requests
- **Context API** – State management

---

## Environment Variables

Create a `.env` file in the dashboard directory:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

This URL points to the backend API server.

---

## Getting Started

1. Install dependencies: `npm install`
2. Configure `.env` file with backend API URL
3. Start the development server: `npm start`
4. Dashboard will open at `http://localhost:3001`
5. Users must be logged in to access the dashboard

---

## Authentication

The dashboard uses cookie-based JWT authentication:
- Authentication is verified with the backend on page load
- Users are redirected to the login page if not authenticated
- Cookies are automatically sent with all API requests

---

## License

MIT
