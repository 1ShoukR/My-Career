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
  await queryInterface.bulkInsert(
    'review',
    [
      {
        stars: 4,
        title: "Very yummy",
        review: "this place was really good! Thank you Joe for paying the tab!",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("review", null, {})
  }
};
