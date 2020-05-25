const {
  getAll,
  add,
  update,
  deleteAny,
} = require('../services/founderTitle.service');
const { ServerError } = require('../../app/util');

module.exports = new class FounderTitleController {
  self = this;
 
  async getFounderTitleList(req, res, next) {
    const { founderTitleList } = await getAll();
    res.json({ finderTitleList: founderTitleList });
  }

  async addFounderTitle(req, res, next) {
    const { err, status, founderTitle } = await add(req);
    if(err) return next(new ServerError(err, status));
    res.json({ finderTitle: founderTitle });
  }

  async updateFounderTitle(req, res, next) {
    const { err, status, message } = await update(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async deleteFounderTitle(req, res, next) {
    const { err, status, message } = await deleteAny(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

}
