const express = require('express')
const router = express.Router()


router.use('/representative', require('./representativeRoutes'))
router.use('/senator', require('./senatorRoutes'))


module.exports = router 