'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review.belongsTo(models.reviewer, {
        foreignKey: 'reviewerId',
        onDelete: 'CASCADE',
      });
      review.belongsTo(models.Restaurants, {
        foreignKey: 'restaurantId',
        onDelete: 'CASCADE',
      });
    }
  }
  review.init(
    {
      reviewerId: DataTypes.INTEGER,
      stars: DataTypes.INTEGER,
      title: DataTypes.STRING,
      review: DataTypes.STRING,
      restaurantId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'review',
    }
  );
  return review;
};
