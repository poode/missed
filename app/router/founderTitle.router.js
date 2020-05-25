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
  getFounderTitleList,
  addFounderTitle,
  updateFounderTitle,
  deleteFounderTitle,
} = require('../controllers/FounderTitle');

router.get('/list', jwt(), getFounderTitleList);
router.post('/', jwt(), validate(addSchema), addFounderTitle);
router.put('/', jwt(), validate(updateSchema), updateFounderTitle);
router.delete('/', jwt(), validate(deleteSchema), deleteFounderTitle);

exports.founderTitleRouter = router;
