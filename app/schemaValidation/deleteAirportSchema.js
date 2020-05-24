module.exports = {
  "type": "object",
  "required": [
    "id",
  ],
  "properties": {
    "id": {
      "type": "number",
      "minimum": 1,
      "errorMessage": "please provide me with valid id!"
    }
  }
}
