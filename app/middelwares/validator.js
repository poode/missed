const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true, jsonPointers: true });
require('ajv-errors')(ajv /*, {singleError: true} */);

const validate = schema => {
  return (req, res, next) => {
    let requestPayload = {};
    if(req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
      requestPayload = req.body
    } 
    if(req.method === 'GET') {
      requestPayload = req.query || req.params;
    }
    const validate = ajv.compile(schema);
    const valid = validate(requestPayload);
    if (valid) {
      return next();
    }
    // string with all errors and data paths
    res.status(400).json(validate.errors.map(error => error.params));
  };
}

  module.exports.validate = validate;
