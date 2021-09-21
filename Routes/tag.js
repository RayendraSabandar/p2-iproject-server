const TagController = require('../Controllers/tag')
const router = require('express').Router()
const { authentication } = require('../middlewares/authentication')

router.use(authentication)

router.get('/', TagController.findAll)
router.post('/add', TagController.add)

module.exports = router