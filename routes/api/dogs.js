const router = require("express").Router();
const dogsController = require("../../controllers/dogsController");

//matches with "/api/dogs"
router.route("/")
.get(dogsController.findAll).post(dogsController.create);

module.exports = router;