const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');
const { upload } = require('../middelwares/uploader');
const { IMAGE_FIELD, IMAGE_MAX_COUNT } = require('../../config/constant');
const {
  addItemSchema,
  deleteSchema,
  paginationSchema
} = require('../schemaValidation');

const {
  self,
  getItemList,
  addItem,
  updateItem,
  deleteItem,
  handoverItem,
  getByAirportIdItemList,
  getByAirportIdAndHandedOverItemList,
  getAllWithAirportAndCategory,
  getAllWithAirportAndCategoryAndHandedOver,
  getAllWithAirportAndModel,
  getAllWithAirportAndModelAndHandedOver
} = require('../controllers/Item');

router.get('/list', jwt(), validate(paginationSchema), getItemList);
router.get('/itemList', jwt(), validate(paginationSchema), getByAirportIdItemList);
router.get('/handover/itemList', jwt(), validate(paginationSchema), getByAirportIdAndHandedOverItemList);
router.get('/category/itemList', jwt(), validate(paginationSchema), getAllWithAirportAndCategory);
router.get('/handover/category/itemList', jwt(), validate(paginationSchema), getAllWithAirportAndCategoryAndHandedOver);
router.get('/model/itemList', jwt(), validate(paginationSchema), getAllWithAirportAndModel);
router.get('/handover/model/itemList', jwt(), validate(paginationSchema), getAllWithAirportAndModelAndHandedOver);
router.post('/', jwt(), upload.array(IMAGE_FIELD, IMAGE_MAX_COUNT), validate(addItemSchema), addItem);
router.put('/', jwt(), validate(addItemSchema), updateItem);
router.put('/handover', jwt(), upload.array(IMAGE_FIELD, IMAGE_MAX_COUNT), handoverItem);
router.delete('/', jwt(), validate(deleteSchema), deleteItem);

exports.itemRouter = router;
