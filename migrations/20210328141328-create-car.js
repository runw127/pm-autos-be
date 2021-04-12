'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      make: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      fuelType: {
        type: Sequelize.STRING
      },
      engineSize: {
        type: Sequelize.FLOAT
      },
      color: {
        type: Sequelize.STRING
      },
      transmission: {
        type: Sequelize.STRING
      },
      bodyType: {
        type: Sequelize.STRING
      },
      mileage: {
        type: Sequelize.INTEGER
      },
      doors: {
        type: Sequelize.INTEGER
      },
      seats: {
        type: Sequelize.INTEGER
      },
      registrationCountry: {
        type: Sequelize.STRING
      },
      emission: {
        type: Sequelize.FLOAT
      },
      enginePower: {
        type: Sequelize.INTEGER
      },
      roadTax: {
        type: Sequelize.INTEGER
      },
      previousOwner: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Cars');
  }
};