# Zerotrade – Frontend Landing Page

Public-facing frontend for the Zerotrade web demo trading application. This site showcases Zerotrade's features, attracts users, and provides authentication pages.

---

## Purpose

- Provide landing page and marketing information
- Handle user signup and login
- Redirect authenticated users to the trading dashboard
- Educate visitors about Zerotrade's features

---

## Key Pages

### Marketing Pages
- **Home** – Overview of Zerotrade
- **About** – Company story and mission
- **Products** – Feature showcase
- **Pricing** – Fee structure
- **Support** – Help and customer support

### Authentication Pages
- **Sign Up** – Create a new account
- **Sign In** – Login to existing account
- **Open Account** – Account creation flow

---

## Tech Stack

- **React** – UI library
- **React Router v6** – Client-side routing
- **Axios** – HTTP client for API communication
- **Bootstrap** – Responsive UI framework
- **CSS** – Custom styling

---

## Key Features

- Responsive design for desktop and mobile
- User-friendly signup and login forms
- Secure authentication with backend API
- Cookie-based session management
- Analytics and feature showcase
- Educational content about trading

---

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Frontend will open at `http://localhost:3000`
4. Unauthenticated users see the landing page
5. Authenticated users are redirected to the dashboard

---

## Authentication Flow

1. New users click "Sign Up"
2. Users fill in registration details
3. Backend creates account and sets JWT cookie
4. Users are automatically redirected to the dashboard
5. Returning users can "Sign In" with credentials

---

## Environment Variables

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

Points to the backend API server.

---

## License

MIT

