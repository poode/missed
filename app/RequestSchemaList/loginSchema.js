exports.loginSchema = {
  "type": "object",
  "required": [
    "username",
    "password",
  ],
  "properties": {
    "username": {
      "type": "string",
      "maxLength": 255,
      "minLength": 3,
      "errorMessage": "please provide me with valid username!"
    },
    "password": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "errorMessage": "please provide me with password!"
    }
  }
}
