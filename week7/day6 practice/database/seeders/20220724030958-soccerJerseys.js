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
  await queryInterface.bulkInsert('SoccerJerseys', [
    {
      team: 'Manchester City',
      kit: 'home kit',
      size: 'small',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      team: 'FC Porto',
      kit: "home kit",
      size: "medium",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      team: "Aresenal FC",
      kit: "away kit",
      size: "large",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      team: "BigNoze FC",
      kit: "bigNose Kit",
      size: "xl BigNose",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SoccerJerseys', null, {});
  }
};
