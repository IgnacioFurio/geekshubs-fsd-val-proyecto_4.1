'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Users', [
      {user_name: "Eddieden", email: "eddieden@gmail.com", password: "$2b$10$tPljLIR3CPUCQBdIqOt0Du4RaJig1nH9v5q0Nu/LXOeD006DOjmlS", role_id: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Corina", email: "corina@gmail.com", password: "$2b$10$ETOiGo9k18Y4218xiBVbee2mENNnKZmWo8RpH/AkRH2PZh1TO0vYW", role_id: 2, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "FreyrII", email: "freyrii@gmail.com", password: "$2b$10$mJmVsmLyY9qC62b6nHg1Tu3WJCSnd0wN3TaATlRt.Tr4WZyP4OUeq", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Valsev", email: "valsev@gmail.com", password: "$2b$10$zrZXa.wxy5jWc0XWF.UvHuOcimPR9Wz01HmdXIT0a/deQBjLzWdY.", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Tango06", email: "tango06@gmail.com", password: "$2b$10$.DWSMcZ1huHP8vxGs1MK3eWj7IDUcTBoB6QR5kyCNNQXGMqJHuZz6", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
