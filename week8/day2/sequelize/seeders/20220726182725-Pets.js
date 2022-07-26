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
    'Pets',
    [
      {
        name: 'Garfield',
        species: 'some type of cat idk',
        age: 234234324,
        weight: 'over weight.',
        health: 'not. healthy.',
        unitOfWeight: 'lbs',
        owner: 'Idk his name',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Abel',
        species: 'British Black Lab',
        age: 7,
        weight: '90',
        health: 'healthy.',
        unitOfWeight: 'lbs',
        owner: 'Rahmin Shoukoohi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bella',
        species: 'Australian Labradoodle',
        age: 4,
        weight: '55',
        health: 'healthy.',
        unitOfWeight: 'lbs',
        owner: 'Rahmin Shoukoohi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Rex',
        species: 'German Shepherd',
        age: 2,
        weight: '95',
        health: 'healthy.',
        unitOfWeight: 'lbs',
        owner: 'Rahmin Shoukoohi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dun Dun Dun',
        species: 'non existent',
        age: 0,
        weight: '90',
        health: 'healthy.',
        unitOfWeight: 'lbs',
        owner: 'Sherry Phong',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
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
