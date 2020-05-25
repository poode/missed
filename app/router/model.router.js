const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');
const {
  addModelSchema,
  updateModelSchema,
  deleteModelSchema,
  listModelSchema,
} = require('../schemaValidation');

const {
  self,
  getModelList,
  addModel,
  updateModel,
  deleteModel,
} = require('../controllers/Model');

router.get('/list', jwt(),validate(listModelSchema) , getModelList);
router.post('/', jwt(), validate(addModelSchema), addModel);
router.put('/', jwt(), validate(updateModelSchema), updateModel);
router.delete('/', jwt(), validate(deleteModelSchema), deleteModel);

exports.modelRouter = router;
