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


app.use(
  cors({
     origin:[
      process.env.CLIENT_URL,
      process.env.DASHBOARD_URL,
    ], 
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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


app.use("/api/auth", authRoute);


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
