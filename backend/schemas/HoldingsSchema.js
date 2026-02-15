const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    name:String,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String,
});

module.exports = { HoldingSchema };