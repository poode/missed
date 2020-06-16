require('dotenv').config();

function pad(value) {
  return value < 10 ? '0' + value : value;
}

function createOffset(date) {
  var sign = (date.getTimezoneOffset() > 0) ? "-" : "+";
  var offset = Math.abs(date.getTimezoneOffset());
  var hours = pad(Math.floor(offset / 60));
  var minutes = pad(offset % 60);
  return sign + hours + ":" + minutes;
}


const configuration = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  timezone: createOffset(new Date()),
}

module.exports = {
  development: configuration,
  test: configuration,
  production: configuration
}
