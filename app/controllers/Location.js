const {
  getAll,
  add,
  update,
  deleteAny,
} = require('../services/location.service');
const { ServerError } = require('../../app/util');

module.exports = new class locationController {
  self = this;
 
  async getLocationList(req, res, next) {
    const { locationList } = await getAll();
    res.json({ locationList });
  }

  async addLocation(req, res, next) {
    const { err, status, location } = await add(req);
    if(err) return next(new ServerError(err, status));
    res.json({ location });
  }

  async updateLocation(req, res, next) {
    const { err, status, message } = await update(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async deleteLocation(req, res, next) {
    const { err, status, message } = await deleteAny(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

}
