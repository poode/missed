module.exports = {
  "type": "object",
  "required": [
    "name",
    "categoryId",
    "id"
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
      "errorMessage": "please provide me with valid categoryId!"
    },
    "id": {
      "type": "number",
      "minimum": 1,
      "errorMessage": "please provide me with valid id!"
    }
  }
}
