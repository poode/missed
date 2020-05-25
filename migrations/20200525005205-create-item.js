'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desc: {
        type: Sequelize.STRING(5000),
        allowNull: true,
      },
      photo: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      handOverPersonFile: {
        type: Sequelize.STRING(1000),
        allowNull: true,
      },
      founderName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      founderMobile: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      founderNote: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
      modelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'models',
          key: 'id',
        },
      },
      locationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locations',
          key: 'id',
        },
      },
      founderTitleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'founderTitles',
          key: 'id',
        },
      },
      founderDepartmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'founderDepartments',
          key: 'id',
        },
      },
      colorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'colors',
          key: 'id',
        },
      },
      airportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'airports',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('items');
  }
};
