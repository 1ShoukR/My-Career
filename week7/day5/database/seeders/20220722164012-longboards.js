'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  await queryInterface.bulkInsert('Longboards', [
    {
      name: 'Dime Board',
      brand: 'Magneto',
      length: '22 in',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'wut Board',
      brand: 'wut brand',
      length: 'wut in',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Longboards", null, {})
  }
};
