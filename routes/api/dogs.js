const router = require("express").Router();
const dogsController = require("../../controllers/dogsController");

//matches with "/api/dogs"
router.route("/").get(dogsController.findAll).post(dogsController.create);

//matches with "/api/dogs/:id"
router
  .route("/:id")
  .get(dogsController.findById)
  .post(dogsController.create)
  .put(dogsController.update)
  .delete(dogsController.remove);

//matches with "/api/dogs/:id/exercises"
router.route("/:id/exercises").get(dogsController.findById);

module.exports = router;
