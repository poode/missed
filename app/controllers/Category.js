const {
  getAll,
  add,
  update,
  deleteAny,
} = require('../services/category.service');
const { ServerError } = require('../../app/util');

module.exports = new class CategoryController {
  self = this;
 
  async getCategoryList(req, res, next) {
    const { categoryList } = await getAll();
    res.json({ categoryList });
  }

  async addCategory(req, res, next) {
    const { err, status, category } = await add(req);
    if(err) return next(new ServerError(err, status));
    res.json({ category });
  }

  async updateCategory(req, res, next) {
    const { err, status, message } = await update(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async deleteCategory(req, res, next) {
    const { err, status, message } = await deleteAny(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

}
