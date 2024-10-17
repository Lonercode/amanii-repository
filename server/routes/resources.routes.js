const express = require('express')
const router = express.Router()
const {
    getResources,
    getAllResources,
    createResources,
} = require('../controllers/resources.controller')

router.get('/api/resources', getResources)
router.get('/api/resources/all', getAllResources)
router.post('/api/resources', createResources)

module.exports = router