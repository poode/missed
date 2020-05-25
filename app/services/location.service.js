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
  const location = await db.location.findOne({ where });
  if(!location) return { err: `location is not found`, status: 404 };
  return { location: location.toJSON() };
}

exports.getAll = async () => {
  const locationList = await db.location.findAll({ attributes: ['id', 'name']});
  return { locationList };
}

exports.add = async ({ body }) => {
  const found = await getOneByAny({ name: body.name });
  if(found.location) return { err: `location with name ${body.name} is found please add another name`, status: 400 };
  const location = await db.location.create(body);
  return { location };
}

exports.update = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.location) return { err: `location with id ${body.id} is not found!`, status: 404 };
  const nameFound = await getOneByAny({ name: body.name });
  if(nameFound.location && nameFound.location.id !== body.id) return { err: `location with name ${body.name} is found please use another name!`, status: 400 };
  await db.location.update(body, { where: { id: body.id } });
  return { message: 'Success' };
}

exports.deleteAny = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.location) return { err: `location with id ${body.id} is not found`, status: 404 };
  await db.location.destroy({ where: { id: body.id } });
  return { message: 'Success' };
}
