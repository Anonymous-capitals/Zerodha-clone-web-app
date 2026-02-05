const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { UserSchema } = require("../schemas/UserSchema");

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("User", UserSchema);
