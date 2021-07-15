'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalePosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        refereneces: {model: 'cars', key: 'id'},
        onDelete: 'CASCADE'
      },
      merchantId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        refereneces: {model: 'merchant', key: 'id'},
        onDelete: 'CASCADE'
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      images: {
        type: Sequelize.JSON
      },
      videos: {
        type: Sequelize.JSON
      },
      startTime: {
        type: Sequelize.DATE
      },
      endTime: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      isPopular: {
        type: Sequelize.BOOLEAN
      },
      isHighlighted: {
        type: Sequelize.BOOLEAN
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SalePosts');
  }
};