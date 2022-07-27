'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Owners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      petName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      petAge: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      PetOwner: {
        type: Sequelize.STRING,
      },
      petWeight: {
        type: Sequelize.INTEGER,
      },
      unitOfWeight: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Owners');
  }
};