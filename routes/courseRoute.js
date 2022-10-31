const express = require('express');
const router = express.Router();
const courseController = require("./../controllers/courseController");

router.route("/").post(courseController.addCourse).get(courseController.getCoures);
router.route("/:id").get(courseController.getCourseById);

module.exports = router;