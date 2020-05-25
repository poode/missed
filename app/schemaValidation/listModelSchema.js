module.exports = {
  "type": "object",
  "required": [
    "categoryId",
  ],
  "properties": {
    "categoryId": {
      "type": "string",
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please provide me with valid name!"
    }
  }
}
