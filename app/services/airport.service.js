const db = require('../../models');

exports.getAll = async () => {
  const airportList = await db.airport.findAll({ attributes: ['id', 'name']});
  return { airportList };
}
