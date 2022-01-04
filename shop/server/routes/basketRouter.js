const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/', basketController.add)
router.get('/:userId', basketController.get)

module.exports = router
