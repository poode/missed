const router = require('express-promise-router')();

const { jwt } = require('../services/strategies');
const { validate } = require('../middelwares/validator');


const {
  self,
  getAirportList
} = require('../controllers/Airport');

router.get('/list', jwt(), getAirportList);

exports.airportRouter = router;
