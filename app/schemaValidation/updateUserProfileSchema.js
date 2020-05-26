module.exports = {
  "type": "object",
  "required": [
    "username",
    "name",
    "airportId"
  ],
  "properties": {
    "username": {
      "type": "string",
      "maxLength": 255,
      "minLength": 3,
      "errorMessage": "please provide me with valid username!"
    },
    "name": {
      "type": "string",
      "minLength": 2,
      "maxLength": 255,
      "errorMessage": "please provide me with name!"
    },
    "airportId": {
      "type": "number",
      "minimum": 1,
      "errorMessage": "please provide me with a valid airportId!"
    }
  }
}
