'use strict';
module.exports = (sequelize, DataTypes) => {
  const color = sequelize.define('color', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  color.associate = function(models) {
    // associations can be defined here
  };
  return color;
};
