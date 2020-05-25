'use strict';
module.exports = (sequelize, DataTypes) => {
  const founderTitle = sequelize.define('founderTitle', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  founderTitle.associate = function(models) {
    // associations can be defined here
    founderTitle.hasMany(models.item);

  };
  return founderTitle;
};
