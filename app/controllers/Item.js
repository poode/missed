const {
  getAll,
  add,
  update,
  deleteAny,
  handOver,
  getAllWithAirport,
  getAllWithAirportAndHandedOver,
  getAllWithAirportAndCategory,
  getAllWithAirportAndCategoryAndHandedOver,
  getAllWithAirportAndModel,
  getAllWithAirportAndModelAndHandedOver,
  handOverMultiItem,
} = require('../services/item.service');
const { ServerError } = require('../../app/util');

module.exports = new class ItemController {
  self = this;
 
  async getItemList(req, res, next) {
    const { itemList } = await getAll(req);
    res.json({ itemList });
  }

  async getByAirportIdItemList(req, res, next) {
    const { itemList, err, status } = await getAllWithAirport(req);
    if(err) return next(new ServerError(err, status));
    res.json({ itemList });
  }

  async getByAirportIdAndHandedOverItemList(req, res, next) {
    const { itemList, err, status } = await getAllWithAirportAndHandedOver(req);
    if(err) return next(new ServerError(err, status));
    res.json({ itemList });
  }

  async getAllWithAirportAndCategory(req, res, next) {
    const { itemList, err, status } = await getAllWithAirportAndCategory(req);
    if(err) return next(new ServerError(err, status));
    res.json({ itemList });
  }

  async getAllWithAirportAndCategoryAndHandedOver(req, res, next) {
    const { itemList, err, status } = await getAllWithAirportAndCategoryAndHandedOver(req);
    if(err) return next(new ServerError(err, status));
    res.json({ itemList });
  }

  async getAllWithAirportAndModel(req, res, next) {
    const { itemList, err, status } = await getAllWithAirportAndModel(req);
    if(err) return next(new ServerError(err, status));
    res.json({ itemList });
  }

  async getAllWithAirportAndModelAndHandedOver(req, res, next) {
    const { itemList, err, status } = await getAllWithAirportAndModelAndHandedOver(req);
    if(err) return next(new ServerError(err, status));
    res.json({ itemList });
  }

  async addItem(req, res, next) {
    const { err, status, item } = await add(req);
    if(err) return next(new ServerError(err, status));
    res.json({ item });
  }

  async updateItem(req, res, next) {
    const { err, status, message } = await update(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async deleteItem(req, res, next) {
    const { err, status, message } = await deleteAny(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async handoverItem (req, res, next) {
    const { err, status, message } = await handOver(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }

  async handoverMultiItems (req, res, next) {
    const { err, status, message } = await handOverMultiItem(req);
    if(err) return next(new ServerError(err, status));
    res.json({ message });
  }
}
