const Router = require('express')
const router = new Router()
const ratingController = require('../controllers/ratingController')

router.post('/', ratingController.add)
router.get('/:id', ratingController.get)
router.get('/', ratingController.getAll)

module.exports = router
