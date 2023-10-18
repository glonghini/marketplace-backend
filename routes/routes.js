const express = require('express')
const { usersGet } = require('../controllers/UsersController')
const { index, store } = require('../controllers/CatalogContoller')
const router = express.Router()

// Catalog
router.get('/catalog', index)
router.post('/catalog', store)
// Users
router.get('/users', usersGet)


module.exports = router