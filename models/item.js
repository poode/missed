'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING(5000),
      allowNull: true,
    },
    photo: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    handOverPersonFile: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    founderName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    founderMobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    founderNote: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    modelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'models',
        key: 'id',
      },
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locations',
        key: 'id',
      },
    },
    founderTitleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'founderTitles',
        key: 'id',
      },
    },
    founderDepartmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'founderDepartments',
        key: 'id',
      },
    },
    colorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'colors',
        key: 'id',
      },
    },
    airportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'airports',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  item.associate = function(models) {
    // associations can be defined here
    item.belongsTo(models.category);
    item.belongsTo(models.model);
    item.belongsTo(models.location);
    item.belongsTo(models.founderTitle);
    item.belongsTo(models.founderDepartment);
    item.belongsTo(models.color);
    item.belongsTo(models.airport);
    item.belongsTo(models.user);
  };
  return item;
};
