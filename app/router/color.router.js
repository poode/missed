const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');
const {
  addSchema,
  updateSchema,
  deleteSchema,
} = require('../schemaValidation');

const {
  self,
  getColorList,
  addColor,
  updateColor,
  deleteColor,
} = require('../controllers/Color');

router.get('/list', jwt(), getColorList);
router.post('/', jwt(), validate(addSchema), addColor);
router.put('/', jwt(), validate(updateSchema), updateColor);
router.delete('/', jwt(), validate(deleteSchema), deleteColor);

exports.colorRouter = router;
