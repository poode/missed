const {
  getAll,
  add,
  update,
  deleteAny,
} = require('../services/founderDepartment.service');
const { ServerError } = require('../../app/util');

module.exports = new class FounderDepartmentController {
  self = this;
 
  async getFounderDepartmentList(req, res, next) {
    const { founderDepartmentList } = await getAll();
    res.json({ finderDepartmentList: founderDepartmentList });
  }

  async addFounderDepartment(req, res, next) {
    const { err, status, founderDepartment } = await add(req);
    if(err) return next(new ServerError(err, status));
    res.json({ finderDepartment: founderDepartment });
  }

  async updateFounderDepartment(req, res, next) {
    const { err, status, message } = await update(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async deleteFounderDepartment(req, res, next) {
    const { err, status, message } = await deleteAny(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

}
