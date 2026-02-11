const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

// ✅ FIXED: Hardcode your deployed URLs OR use env variables
const allowedOrigins = [
  "zerodha-clone-web-app.vercel.app",  // Frontend
  "zerodha-clone-web-app-sklx.vercel.app", // Dashboard (if separate)
  process.env.CLIENT_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean);

console.log("Allowed Origins:", allowedOrigins);

// ✅ FIXED: CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS:", origin);
        callback(new Error("CORS policy violation"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle preflight requests
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ API Routes with proper error handling
app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const order = new OrdersModel(req.body);
    await order.save();
    res.status(201).json({ message: "Order saved!!", order });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
});

app.use("/api/auth", require("./Routes/AuthRoute"));

// ✅ Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// ✅ Database connection
mongoose
  .connect(uri)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });