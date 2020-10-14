const router = require("express").Router();
const dogRoutes = require("./dogs");
const userRoutes = require("./user");

//Dog routes
router.use("/dogs", dogRoutes);

//User routes
router.use("/user", userRoutes);

module.exports = router;