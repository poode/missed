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
  const color = await db.color.findOne({ where });
  if(!color) return { err: `color is not found`, status: 404 };
  return { color: color.toJSON() };
}

exports.getAll = async () => {
  const colorList = await db.color.findAll({ attributes: ['id', 'name']});
  return { colorList };
}

exports.add = async ({ body }) => {
  const found = await getOneByAny({ name: body.name });
  if(found.color) return { err: `color with name ${body.name} is found please add another name`, status: 400 };
  const color = await db.color.create(body);
  return { color };
}

exports.update = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.color) return { err: `color with id ${body.id} is not found!`, status: 404 };
  const nameFound = await getOneByAny({ name: body.name });
  if(nameFound.color && nameFound.color.id !== body.id) return { err: `color with name ${body.name} is found please use another name!`, status: 400 };
  await db.color.update(body, { where: { id: body.id } });
  return { message: 'Success' };
}

exports.deleteAny = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.color) return { err: `color with id ${body.id} is not found`, status: 404 };
  await db.color.destroy({ where: { id: body.id } });
  return { message: 'Success' };
}
