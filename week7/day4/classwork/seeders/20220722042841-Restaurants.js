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
        await queryInterface.bulkInsert('Restaurants', [
        {
          name: 'Uchi',
          address: '1234 Uchi Rd Houston, Tx',
          category: 'Asian Cuisine',
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
    await queryInterface.bulkDelete("Restaurants", null, {})
  }
};
