const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');

const {
  addAirportSchema,
  updateAirportSchema,
  deleteAirportSchema,
} = require('../schemaValidation');

const {
  self,
  getAirportList,
  addAirport,
  updateAirport,
  deleteAirport,
} = require('../controllers/Airport');

router.get('/list', jwt(), getAirportList);
router.post('/', jwt(), validate(addAirportSchema), addAirport);
router.put('/', jwt(), validate(updateAirportSchema), updateAirport);
router.delete('/', jwt(), validate(deleteAirportSchema), deleteAirport);

exports.airportRouter = router;
