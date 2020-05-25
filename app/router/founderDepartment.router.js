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
  getFounderDepartmentList,
  addFounderDepartment,
  updateFounderDepartment,
  deleteFounderDepartment,
} = require('../controllers/FounderDepartment');

router.get('/list', jwt(), getFounderDepartmentList);
router.post('/', jwt(), validate(addSchema), addFounderDepartment);
router.put('/', jwt(), validate(updateSchema), updateFounderDepartment);
router.delete('/', jwt(), validate(deleteSchema), deleteFounderDepartment);

exports.founderDepartmentRouter = router;
