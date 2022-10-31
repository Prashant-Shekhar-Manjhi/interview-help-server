const express = require('express');
const router = express.Router();
const experienceController = require('./../controllers/experienceController');

router.route("/").post(experienceController.addExperince).get(experienceController.getExperience);

router.route("/:company").get(experienceController.getExperienceByCompany);

module.exports = router;