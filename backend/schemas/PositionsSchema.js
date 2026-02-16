const { Schema } = require("mongoose");

const PositionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  ltp: Number,
  net: String,
  day: String,
  isLoss: Boolean,
}, { timestamps: true });

module.exports = { PositionSchema };