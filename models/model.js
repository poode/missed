'use strict';
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('model', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
    }
  }, {});
  model.associate = function(models) {
    // associations can be defined here
  };
  return model;
};
