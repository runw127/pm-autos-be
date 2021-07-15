'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalePost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Car, {foreignKey: 'carId', as: 'cars'})
    }
  };
  SalePost.init({
    carId: DataTypes.INTEGER,
    merchantId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    images: DataTypes.JSON,
    videos: DataTypes.JSON,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    status: DataTypes.STRING,
    isPopular: DataTypes.BOOLEAN,
    isHighlighted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SalePost',
  });
  return SalePost;
};