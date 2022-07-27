'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Owners.init({
    petName: DataTypes.STRING,
    petAge: DataTypes.STRING,
    PetOwner: DataTypes.STRING,
    petWeight: DataTypes.INTEGER,
    unitOfWeight: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Owners',
  });
  return Owners;
};