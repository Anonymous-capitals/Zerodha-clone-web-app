const { Signup, Login, Logout } = require("../controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleWare");
const router = require("express").Router();

// Auth routes
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

// Token verification
router.get("/verify", userVerification);

module.exports = router;
