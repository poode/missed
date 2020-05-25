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
  const model = await db.model.findOne({ where });
  if(!model) return { err: `model is not found`, status: 404 };
  return { model: model.toJSON() };
}

exports.getAll = async () => {
  const modelList = await db.model.findAll({ attributes: ['id', 'name']});
  return { modelList };
}

exports.add = async ({ body }) => {
  const found = await getOneByAny({ name: body.name });
  if(found.model) return { err: `model with name ${body.name} is found please add another name`, status: 400 };

  const category = await db.category.findOne({ where: { id: body.categoryId }});
  if(!category) return { err: `category with id ${body.categoryId} is not found`, status: 404 };
  
  const model = await db.model.create(body);
  return { model };
}

exports.update = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.model) return { err: `model with id ${body.id} is not found!`, status: 404 };

  const nameFound = await getOneByAny({ name: body.name });
  if(nameFound.model && nameFound.model.id !== body.id) return { err: `model with name ${body.name} is found please use another name!`, status: 400 };

  const category = await db.category.findOne({ where: { id: body.categoryId }});
  if(!category) return { err: `category with id ${body.categoryId} is not found`, status: 404 };

  const t = await db.sequelize.transaction();
  try {
    await db.model.update(body, { where: { id: body.id, categoryId: found.model.categoryId }, transaction: t });
    if(found.model.categoryId !== body.categoryId) {
      await db.item.update({ categoryId: body.categoryId }, { where: { modelId: body.id, categoryId: found.model.categoryId }, transaction: t })
    }
    await t.commit();

    return { message: 'Success' };
  } catch (error) {
    console.log(error)
    await t.rollback();

    return { err: 'Failed', status: 400 };
  }
}

exports.deleteAny = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.model) return { err: `model with id ${body.id} is not found`, status: 404 };
  await db.model.destroy({ where: { id: body.id } });
  return { message: 'Success' };
}
