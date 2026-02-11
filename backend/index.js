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

const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean); 

console.log("Allowed Origins:", allowedOrigins);

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Incoming Origin:", origin);

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: false, 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);



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
