const db = require('../../models');
const { ServerError } = require('../util');

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
  const item = await db.item.findOne({ where });
  if(!item) return { err: `item is not found`, status: 404 };
  return { item: item.toJSON() };
}

async function findOne({ model, options }) {
  if(options && !options.where) throw new Error('options should has where property');
  const found = await model.findOne({ where: options.where });
  if(!found) throw new ServerError(`The ${model.name} with id ${options.where.id} is not found`, 404);
  const foundObject = {};
  foundObject[model.name] = found;
  return foundObject;
}

exports.add = async ({ body, files, user, hostname }) => {
  if(!files[0]) return { err: 'Please upload item photo' , status: 400 };
  body.photo = `${process.env.SSL && process.env.NODE_ENV === 'production' ? `https://${hostname}` : `http://${hostname}:${process.env.PORT}`}/${files[0].path}`;
  body.userId = user.id;
  body.airportId = user.airportId;
  // search for every related id for the item
  try {
    await findOne({ model: db.category, options: { where: { id: body.categoryId }}});
    await findOne({ model: db.model, options: { where: { id: body.modelId }}});
    await findOne({ model: db.location, options: { where: { id: body.locationId }}});
    await findOne({ model: db.founderTitle, options: { where: { id: body.founderTitleId }}});
    await findOne({ model: db.founderDepartment, options: { where: { id: body.founderDepartmentId }}});
    await findOne({ model: db.color, options: { where: { id: body.colorId }}});
  } catch (error) {
    return { err: error.message, status: error.status };
  }

  const item = await db.item.create(body);
  return { item };
}

exports.update = async ({ body, user }) => {
  if(body && !body.id || !parseInt(body.id) || !Number(body.id)) return { err: 'Please provide me with a valid item ID', status: 400 };
  
  const found = await getOneByAny({ id: body.id });
  if(!found.item) return { err: `item with id ${body.id} is not found!`, status: 404 };
  body.userId = user.id;
  body.airportId = user.airportId;
  // search for every related id for the item
  try {
    await findOne({ model: db.category, options: { where: { id: body.categoryId }}});
    await findOne({ model: db.model, options: { where: { id: body.modelId }}});
    await findOne({ model: db.location, options: { where: { id: body.locationId }}});
    await findOne({ model: db.founderTitle, options: { where: { id: body.founderTitleId }}});
    await findOne({ model: db.founderDepartment, options: { where: { id: body.founderDepartmentId }}});
    await findOne({ model: db.color, options: { where: { id: body.colorId }}});
  } catch (error) {
    return { err: error.message, status: error.status };
  }

  await db.item.update(body, { where: { id: body.id } });
  return { message: 'Success' };
}

exports.deleteAny = async ({ body }) => {
  const found = await getOneByAny({ id: body.id });
  if(!found.item) return { err: `item with id ${body.id} is not found`, status: 404 };
  await db.item.destroy({ where: { id: body.id } });
  return { message: 'Success' };
}

exports.handOver = async ({ body, files, user, hostname }) => {
  if(body && !body.id || !parseInt(body.id) || !Number(body.id)) return { err: 'Please provide me with a valid item ID', status: 400 };
  if(!files[0]) return { err: 'Please upload item\'s handover file' , status: 400 };
  body.handOverPersonFile = `${process.env.SSL && process.env.NODE_ENV === 'production' ? `https://${hostname}` : `http://${hostname}:${process.env.PORT}`}/${files[0].path}`;
  const found = await getOneByAny({ id: body.id });
  if(!found.item) return { err: `item with id ${body.id} is not found!`, status: 404 };
  body.userId = user.id;
  body.airportId = user.airportId;

  await db.item.update(body, { where: { id: body.id } });
  return { message: 'Success' };
}

exports.getAll = async ({ query }) => {
  const page = parseInt(query.page);
  let limit = parseInt(query.limit);
  limit = limit >= 100 ? 100 : limit;
  const itemList = await db.item.findAndCountAll({
    offset: limit * (page - 1), limit,
    order: [
      ['id', 'DESC'],
    ],
    include: [
      {
        model: db.category,
        attributes: ['name'],
      },
      {
        model: db.model,
        attributes: ['name'],
      },
      {
        model: db.location,
        attributes: ['name'],
      },
      {
        model: db.founderTitle,
        attributes: ['name'],
      },
      {
        model: db.founderDepartment,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.airport,
        attributes: ['name'],
      },
      {
        model: db.user,
        include: [{
          model: db.airport,
          attributes: ['name'],
        }],
        attributes: ['id', 'username', 'name'],
      },
    ],
    attributes: [
      'id',
      'name',
      'desc',
      'photo',
      'handOverPersonFile',
      'founderName',
      'founderMobile',
      'founderNote',
      'createdAt',
      'updatedAt',
    ]
  });
  const newRows = itemList.rows.map(album => {
    const albumRef = album.toJSON();
    delete albumRef.user.password;
    return albumRef;
  });
  itemList.rows = newRows;
  const numberOfPages = Math.ceil(itemList.count/limit);
  itemList.numberOfPages = numberOfPages;
  return { itemList };
}

exports.getAllWithAirport = async ({ query }) => {
  if(query && (!parseInt(query.airportId) || !Number(query.airportId))) {
    return { err: 'Please send me a valid airportId', status: 400 };
  }

  const page = parseInt(query.page);
  let limit = parseInt(query.limit);
  limit = limit >= 100 ? 100 : limit;
  const itemList = await db.item.findAndCountAll({
    offset: limit * (page - 1), limit,
    order: [
      ['id', 'DESC'],
    ],
    include: [
      {
        model: db.category,
        attributes: ['name'],
      },
      {
        model: db.model,
        attributes: ['name'],
      },
      {
        model: db.location,
        attributes: ['name'],
      },
      {
        model: db.founderTitle,
        attributes: ['name'],
      },
      {
        model: db.founderDepartment,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.airport,
        attributes: ['name'],
      },
      {
        model: db.user,
        include: [{
          model: db.airport,
          attributes: ['name'],
        }],
        attributes: ['id', 'username', 'name'],
      },
    ],
    attributes: [
      'id',
      'name',
      'desc',
      'photo',
      'handOverPersonFile',
      'founderName',
      'founderMobile',
      'founderNote',
      'createdAt',
      'updatedAt',
    ],
    where: {
      airportId: query.airportId
    }
  });
  const newRows = itemList.rows.map(album => {
    const albumRef = album.toJSON();
    delete albumRef.user.password;
    return albumRef;
  });
  itemList.rows = newRows;
  const numberOfPages = Math.ceil(itemList.count/limit);
  itemList.numberOfPages = numberOfPages;
  return { itemList };
}

exports.getAllWithAirportAndHandedOver = async ({ query }) => {
  if(query && (!parseInt(query.airportId) || !Number(query.airportId))) {
    return { err: 'Please send me a valid airportId', status: 400 };
  }

  const page = parseInt(query.page);
  let limit = parseInt(query.limit);
  limit = limit >= 100 ? 100 : limit;
  const itemList = await db.item.findAndCountAll({
    offset: limit * (page - 1), limit,
    order: [
      ['id', 'DESC'],
    ],
    include: [
      {
        model: db.category,
        attributes: ['name'],
      },
      {
        model: db.model,
        attributes: ['name'],
      },
      {
        model: db.location,
        attributes: ['name'],
      },
      {
        model: db.founderTitle,
        attributes: ['name'],
      },
      {
        model: db.founderDepartment,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.airport,
        attributes: ['name'],
      },
      {
        model: db.user,
        include: [{
          model: db.airport,
          attributes: ['name'],
        }],
        attributes: ['id', 'username', 'name'],
      },
    ],
    attributes: [
      'id',
      'name',
      'desc',
      'photo',
      'handOverPersonFile',
      'founderName',
      'founderMobile',
      'founderNote',
      'createdAt',
      'updatedAt',
    ],
    where: {
      airportId: query.airportId,
      handOverPersonFile: {
        [db.Sequelize.Op.not]: null,
      }
    }
  });
  const newRows = itemList.rows.map(album => {
    const albumRef = album.toJSON();
    delete albumRef.user.password;
    return albumRef;
  });
  itemList.rows = newRows;
  const numberOfPages = Math.ceil(itemList.count/limit);
  itemList.numberOfPages = numberOfPages;
  return { itemList };
}

exports.getAllWithAirportAndCategory = async ({ query }) => {
  if(query && (!parseInt(query.airportId) || !Number(query.airportId))) {
    return { err: 'Please send me a valid airportId', status: 400 };
  }

  if(query && (!parseInt(query.categoryId) || !Number(query.categoryId))) {
    return { err: 'Please send me a valid categoryId', status: 400 };
  }

  const page = parseInt(query.page);
  let limit = parseInt(query.limit);
  limit = limit >= 100 ? 100 : limit;
  const itemList = await db.item.findAndCountAll({
    offset: limit * (page - 1), limit,
    order: [
      ['id', 'DESC'],
    ],
    include: [
      {
        model: db.category,
        attributes: ['name'],
      },
      {
        model: db.model,
        attributes: ['name'],
      },
      {
        model: db.location,
        attributes: ['name'],
      },
      {
        model: db.founderTitle,
        attributes: ['name'],
      },
      {
        model: db.founderDepartment,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.airport,
        attributes: ['name'],
      },
      {
        model: db.user,
        include: [{
          model: db.airport,
          attributes: ['name'],
        }],
        attributes: ['id', 'username', 'name'],
      },
    ],
    attributes: [
      'id',
      'name',
      'desc',
      'photo',
      'handOverPersonFile',
      'founderName',
      'founderMobile',
      'founderNote',
      'createdAt',
      'updatedAt',
    ],
    where: {
      airportId: query.airportId,
      categoryId: query.categoryId,
    }
  });
  const newRows = itemList.rows.map(album => {
    const albumRef = album.toJSON();
    delete albumRef.user.password;
    return albumRef;
  });
  itemList.rows = newRows;
  const numberOfPages = Math.ceil(itemList.count/limit);
  itemList.numberOfPages = numberOfPages;
  return { itemList };
}

exports.getAllWithAirportAndCategoryAndHandedOver = async ({ query }) => {
  if(query && (!parseInt(query.airportId) || !Number(query.airportId))) {
    return { err: 'Please send me a valid airportId', status: 400 };
  }

  if(query && (!parseInt(query.categoryId) || !Number(query.categoryId))) {
    return { err: 'Please send me a valid categoryId', status: 400 };
  }

  const page = parseInt(query.page);
  let limit = parseInt(query.limit);
  limit = limit >= 100 ? 100 : limit;
  const itemList = await db.item.findAndCountAll({
    offset: limit * (page - 1), limit,
    order: [
      ['id', 'DESC'],
    ],
    include: [
      {
        model: db.category,
        attributes: ['name'],
      },
      {
        model: db.model,
        attributes: ['name'],
      },
      {
        model: db.location,
        attributes: ['name'],
      },
      {
        model: db.founderTitle,
        attributes: ['name'],
      },
      {
        model: db.founderDepartment,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.airport,
        attributes: ['name'],
      },
      {
        model: db.user,
        include: [{
          model: db.airport,
          attributes: ['name'],
        }],
        attributes: ['id', 'username', 'name'],
      },
    ],
    attributes: [
      'id',
      'name',
      'desc',
      'photo',
      'handOverPersonFile',
      'founderName',
      'founderMobile',
      'founderNote',
      'createdAt',
      'updatedAt',
    ],
    where: {
      airportId: query.airportId,
      categoryId: query.categoryId,
      handOverPersonFile: {
        [db.Sequelize.Op.not]: null,
      }
    }
  });
  const newRows = itemList.rows.map(album => {
    const albumRef = album.toJSON();
    delete albumRef.user.password;
    return albumRef;
  });
  itemList.rows = newRows;
  const numberOfPages = Math.ceil(itemList.count/limit);
  itemList.numberOfPages = numberOfPages;
  return { itemList };
}

exports.getAllWithAirportAndModel = async ({ query }) => {
  if(query && (!parseInt(query.airportId) || !Number(query.airportId))) {
    return { err: 'Please send me a valid airportId', status: 400 };
  }

  if(query && (!parseInt(query.modelId) || !Number(query.modelId))) {
    return { err: 'Please send me a valid modelId', status: 400 };
  }

  const page = parseInt(query.page);
  let limit = parseInt(query.limit);
  limit = limit >= 100 ? 100 : limit;
  const itemList = await db.item.findAndCountAll({
    offset: limit * (page - 1), limit,
    order: [
      ['id', 'DESC'],
    ],
    include: [
      {
        model: db.category,
        attributes: ['name'],
      },
      {
        model: db.model,
        attributes: ['name'],
      },
      {
        model: db.location,
        attributes: ['name'],
      },
      {
        model: db.founderTitle,
        attributes: ['name'],
      },
      {
        model: db.founderDepartment,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.airport,
        attributes: ['name'],
      },
      {
        model: db.user,
        include: [{
          model: db.airport,
          attributes: ['name'],
        }],
        attributes: ['id', 'username', 'name'],
      },
    ],
    attributes: [
      'id',
      'name',
      'desc',
      'photo',
      'handOverPersonFile',
      'founderName',
      'founderMobile',
      'founderNote',
      'createdAt',
      'updatedAt',
    ],
    where: {
      airportId: query.airportId,
      modelId: query.modelId,
    }
  });
  const newRows = itemList.rows.map(album => {
    const albumRef = album.toJSON();
    delete albumRef.user.password;
    return albumRef;
  });
  itemList.rows = newRows;
  const numberOfPages = Math.ceil(itemList.count/limit);
  itemList.numberOfPages = numberOfPages;
  return { itemList };
}

exports.getAllWithAirportAndModelAndHandedOver = async ({ query }) => {
  if(query && (!parseInt(query.airportId) || !Number(query.airportId))) {
    return { err: 'Please send me a valid airportId', status: 400 };
  }

  if(query && (!parseInt(query.modelId) || !Number(query.modelId))) {
    return { err: 'Please send me a valid modelId', status: 400 };
  }

  const page = parseInt(query.page);
  let limit = parseInt(query.limit);
  limit = limit >= 100 ? 100 : limit;
  const itemList = await db.item.findAndCountAll({
    offset: limit * (page - 1), limit,
    order: [
      ['id', 'DESC'],
    ],
    include: [
      {
        model: db.category,
        attributes: ['name'],
      },
      {
        model: db.model,
        attributes: ['name'],
      },
      {
        model: db.location,
        attributes: ['name'],
      },
      {
        model: db.founderTitle,
        attributes: ['name'],
      },
      {
        model: db.founderDepartment,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.color,
        attributes: ['name'],
      },
      {
        model: db.airport,
        attributes: ['name'],
      },
      {
        model: db.user,
        include: [{
          model: db.airport,
          attributes: ['name'],
        }],
        attributes: ['id', 'username', 'name'],
      },
    ],
    attributes: [
      'id',
      'name',
      'desc',
      'photo',
      'handOverPersonFile',
      'founderName',
      'founderMobile',
      'founderNote',
      'createdAt',
      'updatedAt',
    ],
    where: {
      airportId: query.airportId,
      modelId: query.modelId,
      handOverPersonFile: {
        [db.Sequelize.Op.not]: null,
      }
    }
  });
  const newRows = itemList.rows.map(album => {
    const albumRef = album.toJSON();
    delete albumRef.user.password;
    return albumRef;
  });
  itemList.rows = newRows;
  const numberOfPages = Math.ceil(itemList.count/limit);
  itemList.numberOfPages = numberOfPages;
  return { itemList };
}
