'use strict';
const {
  Model
} = require('sequelize');
const review = require('./review');
module.exports = (sequelize, DataTypes) => {
  class reviewer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      reviewer.belongsTo(models.review, {
        foreignKey: 'review',
        onDelete: 'CASCASDE'
      })
    }
  }
  reviewer.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      karma: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 7,
      },
    },
  }, 
  {
    sequelize,
    modelName: 'reviewer',
  }
  );
  return reviewer;
};