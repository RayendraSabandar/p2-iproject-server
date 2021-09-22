const TagController = require('../Controllers/tag')
const router = require('express').Router()

router.get('/', TagController.findAll)
router.get('/:name', TagController.findByName)
router.post('/add', TagController.add)

module.exports = router