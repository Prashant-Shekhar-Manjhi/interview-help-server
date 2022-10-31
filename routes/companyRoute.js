const express = require("express");
const router = express.Router();
const companyController = require("./../controllers/companyController")

router.route("/").get(companyController.getCompany).post(companyController.addCompany);

module.exports = router;