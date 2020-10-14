const router = require("express").Router();
const dogRoutes = require("./dogs");
const exercisesRoutes = require("./exercises");

//Dog routes
router.use("/dogs", dogRoutes);
//Exercises routes
router.use("/exercises", exercisesRoutes);

module.exports = router;
