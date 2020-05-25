'use strict';
module.exports = (sequelize, DataTypes) => {
  const founderDepartment = sequelize.define('founderDepartment', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  founderDepartment.associate = function(models) {
    // associations can be defined here
  };
  return founderDepartment;
};
