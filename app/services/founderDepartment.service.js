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
  const founderDepartment = await db.founderDepartment.findOne({ where });
  if(!founderDepartment) return { err: `founderDepartment is not found`, status: 404 };
  return { founderDepartment: founderDepartment.toJSON() };
}

exports.getAll = async () => {
  const founderDepartmentList = await db.founderDepartment.findAll({ attributes: ['id', 'name']});
  return { founderDepartmentList };
}

exports.add = async ({ body }) => {
  const found = await getOneByAny({ name: body.name });
  if(found.founderDepartment) return { err: `founderDepartment with name ${body.name} is found please add another name`, status: 400 };
  const founderDepartment = await db.founderDepartment.create(body);
  return { founderDepartment };
}

exports.update = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.founderDepartment) return { err: `founderDepartment with name ${body.name} is not found!`, status: 404 };
  const nameFound = await getOneByAny({ name: body.name });
  if(nameFound.founderDepartment && nameFound.founderDepartment.id !== body.id) return { err: `founderDepartment with name ${body.name} is found please use another name!`, status: 400 };
  await db.founderDepartment.update(body, { where: { id: body.id } });
  return { message: 'Success' };
}

exports.deleteAny = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.founderDepartment) return { err: `founderDepartment with id ${body.id} is not found`, status: 404 };
  await db.founderDepartment.destroy({ where: { id: body.id } });
  return { message: 'Success' };
}
