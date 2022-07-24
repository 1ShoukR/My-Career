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
  await queryInterface.bulkInsert("Users", [
    {
      firstName: "Rahmin",
      lastName: "Shoukoohi",
      email: "rahminshoukoohi@gmail.com",
      password: "hahalolxdyouwish",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Camron",
      lastName: "Khajenoori",
      email: "camK@dfasegfa.com",
      password: "idkmane",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Azad",
      lastName: "Kazemi",
      email: "azadK@sdfgsr.com",
      password: "whatverMane1231242112",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Saman",
      lastName: "BigNose",
      email:"IHaveBiGNose@BigNoSE.com",
      password: "MassiveBigNose",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {})
  }
};
