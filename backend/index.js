const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

/* =======================
   CORS CONFIG (CORRECT)
======================= */
app.use(
  cors({
     origin: true,
    // [
    //   process.env.CLIENT_URL,
    //   process.env.DASHBOARD_URL,
    // ],
    credentials: true,
  })
);

/* =======================
   MIDDLEWARE
======================= */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* =======================
   ROUTES
======================= */
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

// Auth routes
app.use("/api/auth", authRoute);

/* =======================
   DB + SERVER
======================= */
mongoose
  .connect(uri)
  .then(() => {
    console.log(" Database Connected");
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
  });
