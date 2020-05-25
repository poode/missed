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
  const founderTitle = await db.founderTitle.findOne({ where });
  if(!founderTitle) return { err: `founderTitle is not found`, status: 404 };
  return { founderTitle: founderTitle.toJSON() };
}

exports.getAll = async () => {
  const founderTitleList = await db.founderTitle.findAll({ attributes: ['id', 'name']});
  return { founderTitleList };
}

exports.add = async ({ body }) => {
  const found = await getOneByAny({ name: body.name });
  if(found.founderTitle) return { err: `founderTitle with name ${body.name} is found please add another name`, status: 400 };
  const founderTitle = await db.founderTitle.create(body);
  return { founderTitle };
}

exports.update = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.founderTitle) return { err: `founderTitle with id ${body.id} is not found!`, status: 404 };
  const nameFound = await getOneByAny({ name: body.name });
  if(nameFound.founderTitle && nameFound.founderTitle.id !== body.id) return { err: `founderTitle with name ${body.name} is found please use another name!`, status: 400 };
  await db.founderTitle.update(body, { where: { id: body.id } });
  return { message: 'Success' };
}

exports.deleteAny = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.founderTitle) return { err: `founderTitle with id ${body.id} is not found`, status: 404 };
  await db.founderTitle.destroy({ where: { id: body.id } });
  return { message: 'Success' };
}
