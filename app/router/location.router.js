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
  getLocationList,
  addLocation,
  updateLocation,
  deleteLocation,
} = require('../controllers/Location');

router.get('/list', jwt(), getLocationList);
router.post('/', jwt(), validate(addSchema), addLocation);
router.put('/', jwt(), validate(updateSchema), updateLocation);
router.delete('/', jwt(), validate(deleteSchema), deleteLocation);

exports.locationRouter = router;
