const express = require("express");
const router = express.Router();
const companyController = require("./../controllers/companyController")

router.route("/").get(companyController.getCompanies).post(companyController.addCompany);
router.route("/id/:id").get(companyController.getCompanyById);
router.route("/name/:name").get(companyController.getCompanyByName);
module.exports = router;