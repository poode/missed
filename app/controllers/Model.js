const {
  getAll,
  add,
  update,
  deleteAny,
} = require('../services/model.service');
const { ServerError } = require('../../app/util');

module.exports = new class modelController {
  self = this;
 
  async getModelList(req, res, next) {
    const { modelList } = await getAll();
    res.json({ modelList });
  }

  async addModel(req, res, next) {
    const { err, status, model } = await add(req);
    if(err) return next(new ServerError(err, status));
    res.json({ model });
  }

  async updateModel(req, res, next) {
    const { err, status, message } = await update(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async deleteModel(req, res, next) {
    const { err, status, message } = await deleteAny(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

}
