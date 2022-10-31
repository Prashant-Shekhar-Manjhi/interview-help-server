const express = require("express");
const router = express.Router();
const contentController = require("./../controllers/contentController")

router.route("/").post(contentController.addNewContent).get(contentController.showContents);
router.route("/:id").get(contentController.showContentById)
router.route("/subtopic/:id").patch(contentController.addSubTopics);
router.route("/pdf/:id").patch(contentController.addPdfLink);
module.exports = router;