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
  getAirportList,
  addAirport,
  updateAirport,
  deleteAirport,
} = require('../controllers/Airport');

router.get('/list', getAirportList);
router.post('/', jwt(), validate(addSchema), addAirport);
router.put('/', jwt(), validate(updateSchema), updateAirport);
router.delete('/', jwt(), validate(deleteSchema), deleteAirport);

exports.airportRouter = router;
