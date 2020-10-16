const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api")

//api routes
router.use("/api", apiRoutes);

//If no existing api route is hit send React app
// router.use(function(req,res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// })

module.exports = router;