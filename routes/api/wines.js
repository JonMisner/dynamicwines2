const router = require("express").Router();
const winesController = require("../../controllers/winesController");

// Matches with "/api/books"
router.route("/")
  .get(winesController.findAll)
  .post(winesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(winesController.findById)
  .put(winesController.update)
  .delete(winesController.remove);

module.exports = router;
