module.exports = {
  "type": "object",
  "required": [
    "name",
    "categoryId",
  ],
  "properties": {
    "name": {
      "type": "string",
      "maxLength": 255,
      "minLength": 3,
      "errorMessage": "please provide me with valid name!"
    },
    "categoryId": {
      "type": "number",
      "minimum": 1,
      "errorMessage": "please provide me with valid id!"
    }
  }
}
