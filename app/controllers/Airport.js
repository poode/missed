const {
  getAll,
  add,
  update,
  deleteAny,
} = require('../services/airport.service');
const { ServerError } = require('../../app/util');

module.exports = new class UserController {
  self = this;
 
  async getAirportList(req, res, next) {
    const { airportList } = await getAll();
    res.json({ airportList });
  }

  async addAirport(req, res, next) {
    const { err, status, airport } = await add(req);
    if(err) return next(new ServerError(err, status));
    res.json({ airport });
  }

  async updateAirport(req, res, next) {
    const { err, status, message } = await update(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async deleteAirport(req, res, next) {
    const { err, status, message } = await deleteAny(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

}
