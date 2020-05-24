const {
  getAll
} = require('../services/airport.service');
const { ServerError } = require('../../app/util');

module.exports = new class UserController {
  self = this;
 
  async getAirportList(req, res, next) {
    const { airportList } = await getAll();
    res.json({ airportList });
  }

}
