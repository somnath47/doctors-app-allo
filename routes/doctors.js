var express = require('express');
var router = express.Router();

const DoctorController = require('../services/doctor/controllers/DoctorController')

/* GET users listing. */
router.get('/', DoctorController.fetchDoctors);

router.post('/', DoctorController.addDoctor);

module.exports = router;
