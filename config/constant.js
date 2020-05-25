require('dotenv').config();

const serverConfig = {
  PORT: process.env.PORT || 3000,
  IMAGE_FIELD: 'photo',
  IMAGE_MAX_COUNT: process.env.IMAGE_MAX_COUNT,
  IMAGE_STORAGE: 'uploads/images/',
  IMAGE_SIZE: 3000000,
  IMAGE_ACCEPTED: /jpeg|jpg|png|gif/,
}

module.exports = serverConfig;
