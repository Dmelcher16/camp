const router = require("express").Router();
const exercisesController = require("../../controllers/exercisesController");

//matches with "/api/exercises"
router
  .route("/")
  .get(exercisesController.findAll)
  .get(exercisesController.findByDogID)
  .post(exercisesController.create);

//matches with "/api/exercises/:id"
router
  .route("/:id")
  .get(exercisesController.findById)
  .put(exercisesController.update)
  .delete(exercisesController.remove);

module.exports = router;
