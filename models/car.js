'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.SalePost, {foreignKey: "carId", as: 'salePosts'})
    }
    static getId(where) {
      return this.findOne({
        where,
        attributes: ["id"],
        order: [["createdAt", "DESC"]]
      });
    }
  };
  Car.init({
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    fuelType: DataTypes.STRING,
    engineSize: DataTypes.FLOAT,
    color: DataTypes.STRING,
    transmission: DataTypes.STRING,
    bodyType: DataTypes.STRING,
    mileage: DataTypes.INTEGER,
    doors: DataTypes.INTEGER,
    seats: DataTypes.INTEGER,
    registrationCountry: DataTypes.STRING,
    emission: DataTypes.FLOAT,
    enginePower: DataTypes.INTEGER,
    roadTax: DataTypes.INTEGER,
    previousOwner: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};