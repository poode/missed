const {
  getAll,
  add,
  update,
  deleteAny,
} = require('../services/color.service');
const { ServerError } = require('../../app/util');

module.exports = new class ColorController {
  self = this;
 
  async getColorList(req, res, next) {
    const { colorList } = await getAll();
    res.json({ colorList });
  }

  async addColor(req, res, next) {
    const { err, status, color } = await add(req);
    if(err) return next(new ServerError(err, status));
    res.json({ color });
  }

  async updateColor(req, res, next) {
    const { err, status, message } = await update(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async deleteColor(req, res, next) {
    const { err, status, message } = await deleteAny(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

}
