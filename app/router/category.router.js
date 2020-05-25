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
  getCategoryList,
  addCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/Category');

router.get('/list', jwt(), getCategoryList);
router.post('/', jwt(), validate(addSchema), addCategory);
router.put('/', jwt(), validate(updateSchema), updateCategory);
router.delete('/', jwt(), validate(deleteSchema), deleteCategory);

exports.categoryRouter = router;
