const TagController = require('../Controllers/tag')
const { authentication } = require('../middlewares/authentication')
const router = require('express').Router()

router.use(authentication)

router.get('/', TagController.findAll)
router.get('/:name', TagController.findByName)
router.post('/add', TagController.add)

module.exports = router