'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Comments', [{
      content: "Peter first comment",
      authorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      content: "Peter second comment",
      authorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      content: "Veronica first comment",
      authorId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Comments', null, {});
  }
};
