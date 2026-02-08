// const { Signup, Login, Logout } = require("../controllers/AuthController");
// const { userVerification } = require("../Middlewares/AuthMiddleWare");
// const router = require("express").Router();

// // Auth routes
// router.post("/signup", Signup);
// router.post("/login", Login);
// router.post("/logout", Logout);

// // Token verification
// router.get("/verify", userVerification);

// module.exports = router;

const { Signup, Login, Logout } = require("../controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleWare");
const router = require("express").Router();

// Auth routes
router.post("/signup", (req, res, next) => {
  console.log(" SIGNUP ROUTE HIT");
  console.log("BODY:", req.body);
  next();
}, Signup);

router.post("/login", (req, res, next) => {
  console.log(" LOGIN ROUTE HIT");
  console.log("BODY:", req.body);
  next();
}, Login);

router.post("/logout", Logout);

// Token verification
router.get("/verify", userVerification);

module.exports = router;
