const {Basket} = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    async create(req, res) {
				const {basket} = req.body;
        const info = await Basket.create({basket})
        return res.json(info)
    }
    async get(req, res) {
				const {id} = req.params
				console.log('id', id)
        const basket = await Basket.findOne(
            {
                where: {id},
            },
        )
        return res.json(basket)
    }

}

module.exports = new BasketController()
