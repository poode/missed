'use strict';
module.exports = (sequelize, DataTypes) => {
  const airport = sequelize.define('airport', {
    name: DataTypes.STRING
  }, {});
  airport.associate = function(models) {
    // associations can be defined here
  };
  return airport;
};