'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const airportList = [
      {
        name: 'مطار مسقط الدولي',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'مطار صلاله',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'مطار الدقم',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'مطار صحار',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    return queryInterface.bulkInsert('airports', airportList, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('airports', null, {});
  }
};
