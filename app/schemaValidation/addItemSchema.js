module.exports = {
  "type": "object",
  "required": [
    "name",
    "founderName",
    "founderMobile",
    "categoryId",
    "modelId",
    "locationId",
    "founderTitleId",
    "founderDepartmentId",
    "colorId",
  ],
  "properties": {
    "name": {
      "type": "string",
      "maxLength": 255,
      "minLength": 3,
      "errorMessage": "please provide me with valid name!"
    },
    "desc": {
      "type": "string",
      "maxLength": 5000,
      "minLength": 3,
      "errorMessage": "please provide me with valid description!"
    },
    "founderName": {
      "type": "string",
      "maxLength": 255,
      "minLength": 3,
      "errorMessage": "please provide me with valid founderName!"
    },
    "founderMobile": {
      "type": "string",
      "pattern": "(^[7][1289]\\d{6}$)|(^[9][1-9]\\d{6}$)|([9][0][1-9]\\d{5}$)",
      "errorMessage": "please provide me with valid founderMobile!"
    },
    "founderNote": {
      "type": "string",
      "maxLength": 500,
      "minLength": 3,
      "errorMessage": "please provide me with valid founderNote!"
    },
    "categoryId": {
      "type": "string",
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please provide me with valid categoryId!",
    },
    "modelId": {
      "type": "string",
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please provide me with valid modelId!",
    },
    "locationId": {
      "type": "string",
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please provide me with valid locationId!",
    },
    "founderTitleId": {
      "type": "string",
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please provide me with valid founderTitleId!",
    },
    "founderDepartmentId": {
      "type": "string",
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please provide me with valid founderDepartmentId!",
    },
    "colorId": {
      "type": "string",
      "pattern": "^[1-9]\\d*$",
      "errorMessage": "please provide me with valid colorId!",
    },
  },
}
