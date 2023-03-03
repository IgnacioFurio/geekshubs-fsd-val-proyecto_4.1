'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Doctors', [
      {collegiate_member: "3847574839", contract_at: "2017-04-12", contract_until: "1111-11-11", user_id: 3, createdAt: "2017-04-12 00:00:00", updatedAt: "2023-04-12 00:00:00"},
    ], {}); 
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
