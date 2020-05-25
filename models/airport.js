'use strict';
module.exports = (sequelize, DataTypes) => {
  const airport = sequelize.define('airport', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  }, {});
  airport.associate = function(models) {
    // associations can be defined here
    airport.hasMany(models.user);
    airport.hasMany(models.item);
  };
  return airport;
};
