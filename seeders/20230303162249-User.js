'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Users', [
      {user_name: "Eddieden", email: "eddieden@gmail.com", password: "$10$u.0KW8du6QKFcQheu7acGOFpHq60BasJEnP20LDtCFqL7nU5ggewC", role_id: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Corina", email: "corina@gmail.com", password: "$10$u.0KW8du6QKFcQheu7acGOFpHq60BasJEnP20LDtCFqL7nU5ggewC", role_id: 2, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "FreyrII", email: "freyrii@gmail.com", password: "$10$5pCp/HEqmMf2jKEm2LDeee78sEvVGBnW4IHYBvsmFUo3FkNjweeCa", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Valsev", email: "valsev@gmail.com", password: "$10$5pCp/HEqmMf2jKEm2LDeee78sEvVGBnW4IHYBvsmFUo3FkNjweeCa", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Tango06", email: "tango06@gmail.com", password: "$10$5pCp/HEqmMf2jKEm2LDeee78sEvVGBnW4IHYBvsmFUo3FkNjweeCa", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
