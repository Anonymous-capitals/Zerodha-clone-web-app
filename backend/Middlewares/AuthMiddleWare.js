const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.json({ success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decoded.id).select(
      "username email createdAt"
    );

    if (!user) {
      return res.json({ success: false });
    }

    return res.json({
      authenticated: true,
      user,
    });
  } catch (error) {
    return res.json({ success: false });
  }
};
