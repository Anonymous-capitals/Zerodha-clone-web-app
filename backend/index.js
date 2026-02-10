const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const FRONTEND_URL = process.env.CLIENT_URL;
const DASHBOARD_URL = process.env.DASHBOARD_URL;

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

const allowedOrigins = [
  FRONTEND_URL,
  DASHBOARD_URL,
];

// ✅ CORRECT CORS (single source of truth)
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ❌ REMOVE app.options("*", cors());
app.options("*", (req, res) => {
  res.sendStatus(200);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // ✅ REQUIRED

// ================= ROUTES =================

app.get("/allHoldings", async (req, res) => {
  res.json(await HoldingsModel.find({}));
});

app.get("/allPositions", async (req, res) => {
  res.json(await PositionsModel.find({}));
});

app.get("/allOrders", async (req, res) => {
  res.json(await OrdersModel.find({}));
});

app.post("/newOrder", async (req, res) => {
  const order = new OrdersModel(req.body);
  await order.save();
  res.send("Order saved!!");
});

app.use("/api/auth", require("./Routes/AuthRoute"));

// ================= DB =================

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
  });
