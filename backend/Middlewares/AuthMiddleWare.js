module.exports.userVerification = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        authenticated: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token || token === "null" || token === "undefined") {
      return res.status(401).json({
        authenticated: false,
        message: "Invalid token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        authenticated: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      authenticated: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("VERIFY ERROR:", error.message);
    return res.status(401).json({
      authenticated: false,
      message: "Invalid or expired token",
    });
  }
};
