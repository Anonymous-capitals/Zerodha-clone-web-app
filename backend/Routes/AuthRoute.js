const { Signup, Login, Logout } = require("../controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleWare");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.get("/verify", userVerification);

module.exports = router;
