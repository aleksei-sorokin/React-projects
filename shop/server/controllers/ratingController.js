const { Rating, Device } = require('../models/models');
const ApiError = require('../error/ApiError');

class RatingController {
  async add(req, res) {
    const { userId, product, rate } = req.body;
    const rating = await Rating.create({
			userId,
			deviceId: product,
			rate
    });

		const deviceRating = await Rating.findAll({
			where: {deviceId: product}
		})

		const calcRate = Math.round(deviceRating.reduce((sum, { rate }) => sum + rate, 0) / deviceRating.length)

		Device.update({ 
			rating: calcRate, 
			updatedAt: new Date() 
		}, { where: { id: product } })


    return res.json({rating, deviceRating, calcRate});
  }
  async get(req, res) {
    const { id } = req.params;
    const rating = await Rating.findOne({
			where: {id}
    });
    return res.json(rating);
  }
  async getAll(req, res) {
    const rating = await Rating.findAll();
    return res.json(rating);
  }
}

module.exports = new RatingController();
