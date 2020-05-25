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
  const category = await db.category.findOne({ where });
  if(!category) return { err: `category is not found`, status: 404 };
  return { category: category.toJSON() };
}

exports.getAll = async () => {
  const categoryList = await db.category.findAll({ attributes: ['id', 'name']});
  return { categoryList };
}

exports.add = async ({ body }) => {
  const found = await getOneByAny({ name: body.name });
  if(found.category) return { err: `category with name ${body.name} is found please add another name`, status: 400 };
  const category = await db.category.create(body);
  return { category };
}

exports.update = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.category) return { err: `category with name ${body.name} is not found!`, status: 404 };
  const nameFound = await getOneByAny({ name: body.name });
  if(nameFound.category && nameFound.category.id !== body.id) return { err: `category with name ${body.name} is found please use another name!`, status: 400 };
  await db.category.update(body, { where: { id: body.id } });
  return { message: 'Success' };
}

exports.deleteAny = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.category) return { err: `category with id ${body.id} is not found`, status: 404 };
  await db.category.destroy({ where: { id: body.id } });
  return { message: 'Success' };
}
