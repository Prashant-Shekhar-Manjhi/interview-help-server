const express = require('express');
const router = express.Router();
const experienceController = require('./../controllers/experienceController');

router.route("/").post(experienceController.addExperince).get(experienceController.getExperience);

router.route("/:company_id").get(experienceController.getExperienceByCompanyId);

module.exports = router;