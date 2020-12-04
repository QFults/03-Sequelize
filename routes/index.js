const router = require('express').Router()

router.use('/api', require('./petRoutes.js'))
router.use('/api', require('./ownerRoutes.js'))

module.exports = router
