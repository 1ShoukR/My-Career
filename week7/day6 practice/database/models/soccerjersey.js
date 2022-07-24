'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SoccerJersey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SoccerJersey.init({
    team: DataTypes.STRING,
    kit: DataTypes.STRING,
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SoccerJersey',
  });
  return SoccerJersey;
};