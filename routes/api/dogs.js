const router = require("express").Router();
const dogsController = require("../../controllers/dogsController");

//matches with "/api/dogs"
router.route("/")
.get(dogsController.findAll);

module.exports = router;