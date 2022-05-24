const router = require('express').Router()
const parkServices = require('../services/parkServices')

router.post('/get_all_parks', parkServices.getAllParks)

router.post('/get_park', parkServices.getPark)

module.exports = router