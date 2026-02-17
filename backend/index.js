const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { requireAuth } = require("./Middlewares/AuthMiddleWare");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

const allowedOrigins = [
  // Development
  "http://localhost:3000",
  "http://localhost:3001",
  "https://zerotrade-web-app-v7rb-akfs82ub1-ranit-gopes-projects.vercel.app",
  "https://zerotrade-web-b6oe2ljg5-ranit-gopes-projects.vercel.app",
  // Actual deployed frontend and dashboard from environment variables
  process.env.CLIENT_URL,
  process.env.DASHBOARD_URL,
  // Add dynamic URLs from env to ensure deployed URLs are always included
  process.env.REACT_APP_FRONTEND_URL,
].filter(url => url && url.trim() !== "");

console.log("Allowed Origins:", allowedOrigins);

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.warn("CORS blocked origin:", origin);
    callback(new Error("CORS: Origin not allowed"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  maxAge: 3600,
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

/* ========== User-scoped data (require auth; stored per user in MongoDB Atlas) ========== */

app.get("/userHoldings", requireAuth, async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({ userId: req.userId });
    res.status(200).json(holdings || []);
  } catch (error) {
    console.error("Error fetching user holdings:", error);
    res.status(500).json({ error: "Failed to fetch user holdings" });
  }
});

app.get("/userPositions", requireAuth, async (req, res) => {
  try {
    const positions = await PositionsModel.find({ userId: req.userId });
    res.status(200).json(positions || []);
  } catch (error) {
    console.error("Error fetching user positions:", error);
    res.status(500).json({ error: "Failed to fetch user positions" });
  }
});

app.get("/userOrders", requireAuth, async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.status(200).json(orders || []);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ error: "Failed to fetch user orders" });
  }
});

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || qty == null || price == null || !mode) {
      return res.status(400).json({ error: "Missing required fields: name, qty, price, mode" });
    }

    const order = new OrdersModel({
      userId: req.userId,
      name,
      qty: Number(qty),
      price: Number(price),
      mode: String(mode),
    });
    await order.save();
    res.status(201).json({ message: "Order saved successfully!", order });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
});

app.use("/api/auth", require("./Routes/AuthRoute"));

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });