const express = require('express')
const router = express.Router()
const {regConfirm} = require('../controllers/regController')

router.post('/register',regConfirm)

module.exports = router