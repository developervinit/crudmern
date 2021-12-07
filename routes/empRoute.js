const express = require("express");
const empController = require("../controllers/empController.js")



const router = express.Router();

router.route("/newemp").post(empController.addEmp);

//route = http://localhost:3002/emp/newEmp

module.exports = router;