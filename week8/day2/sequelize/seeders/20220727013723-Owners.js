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
  await queryInterface.bulkInsert('Owners', [
    {
      petName: 'Abel',
      petAge: '7',
      PetOwner: 'Rahmin Shoukoohi',
      petWeight: 10,
      unitOfWeight: 'lbs',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      petName: 'Holla At Ya Boy',
      petAge: '12',
      PetOwner: 'billy bob Joe',
      petWeight: 10,
      unitOfWeight: 'kg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      petName: 'Princess',
      petAge: '7',
      PetOwner: 'Sherry Phong ',
      petWeight: 30,
      unitOfWeight: 'lbs',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      petName: 'allahu',
      petAge: '231232134',
      PetOwner: 'Ali Jozani ',
      petWeight: 4,
      unitOfWeight: 'lbs',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      petName: 'Bismillah',
      petAge: '69',
      PetOwner: ' Camron Khajenoori ',
      petWeight: 20,
      unitOfWeight: 'lbs',
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
  }
};
