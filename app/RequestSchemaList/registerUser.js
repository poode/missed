exports.registerUserSchema = {
    "type": "object",
    "required": [
      "password",
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
        "maxLength": 255,
        "minLength": 3,
        "errorMessage": "please provide me with valid name!"
      },
      "airportId": {
        "type": "number",
        "min": 1,
        "errorMessage": "please provide me with valid airportId!"
      },
      "password": {
        "type": "string",
        "minLength": 1,
        "maxLength": 255,
        "errorMessage": "please provide me with password!"
      }
    }
  }
