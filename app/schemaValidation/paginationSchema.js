module.exports = {
  "type": "object",
  "required": [
    "page",
    "limit",
    "from",
    "to"
  ],
  "properties": {
    "page": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please send me page number!"
    },
    "limit": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255,
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please send me limit of items to be sent!"
    },
    "from": {
      "type": "string",
      "pattern": "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$",
      "errorMessage": "please send me a valid from date!"
    },
    "to": {
      "type": "string",
      "pattern": "^([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))$",
      "errorMessage": "please send me a valid to date!"
    }
  }
}
