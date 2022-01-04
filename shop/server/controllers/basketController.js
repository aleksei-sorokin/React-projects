const { Basket, BasketDevice } = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController {
  async add(req, res) {
    const { userId, product } = req.body;
    const basket = await Basket.findOne({
      where: { userId },
      include: [{model: BasketDevice, as: 'basket_devices'}]
    });
    
    const device = await BasketDevice.create({
        basketId: basket.id,
        deviceId: product
    })

    const info = await basket.update({ basket_devices: device, updatedAt: new Date() }, { where: { userId: 2 } });
    return res.json(info);
  }
  async get(req, res) {
    const { userId } = req.params;
    const basket = await Basket.findOne({
      where: { userId },
      include: [{ model: BasketDevice, as: 'basket_devices' }],
    });
    return res.json(basket);
  }
}

module.exports = new BasketController();
