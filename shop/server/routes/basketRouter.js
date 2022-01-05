const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/', basketController.add)
router.get('/:userId', basketController.get)
router.delete('/:userId', basketController.deleteAll)
router.post('/:userId', basketController.deleteOne)

module.exports = router
