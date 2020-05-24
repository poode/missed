const db = require('../../models');

/**
 * @param {*} object maybe object = { name: 'مطار مسقط'} or { id: 1 }
 * simply add the paramter you want to search with
 * @returns
 */
async function getOneByAny (object) {
  const where = {};
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      where[key] = object[key];
    }
  }
  const airport = await db.airport.findOne({ where });
  if(!airport) return { err: `Airport is not found`, status: 404 };
  return { airport: airport.toJSON() };
}

exports.getAll = async () => {
  const airportList = await db.airport.findAll({ attributes: ['id', 'name']});
  return { airportList };
}

exports.add = async ({ body }) => {
  const found = await getOneByAny({ name: body.name });
  if(found.airport) return { err: `Airport with name ${body.name} is found please add another name`, status: 400 };
  const airport = await db.airport.create(body);
  return { airport };
}

exports.update = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.airport) return { err: `Airport with name ${body.name} is not found!`, status: 404 };
  const nameFound = await getOneByAny({ name: body.name });
  if(nameFound.airport && nameFound.airport.id !== body.id) return { err: `Airport with name ${body.name} is found please use another name!`, status: 400 };
  await db.airport.update(body, { where: { id: body.id } });
  return { message: 'Success' };
}

exports.deleteAny = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.airport) return { err: `Airport with id ${body.id} is not found`, status: 404 };
  await db.airport.destroy({ where: { id: body.id } });
  return { message: 'Success' };
}
