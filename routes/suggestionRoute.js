const express = require("express");
const suggestionController = require("./../controllers/suggestionController");
const router = express.Router();

router.route("/").post(suggestionController.addSuggestion);
router.route("/:id").get(suggestionController.showSuggestionByCourseId);
module.exports = router;