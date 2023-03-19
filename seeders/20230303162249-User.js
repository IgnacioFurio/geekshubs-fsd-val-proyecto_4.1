'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Users', [
      {user_name: "Eddieden", email: "eddieden@email.com", password: "$2b$10$koTtFqLEqz66NTZI1S8X3OV5mHDyRnHUiSK06Y/DJgfuu7d7MDSD6", role_id: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Corina", email: "corina@email.com", password: "$2b$10$Ytla70DJlNIb6T9UQEAQguk5QRzSJ9u6RGCfuBh7/jk4yXmanhsu6", role_id: 2, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "FreyrII", email: "freyrii@email.com", password: "$2b$10$C7Z/BVQBavw7i4ayyPCt6eWafXHAQqaYYtLB1G6u3QUE0hePtNKjy", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Valsev", email: "valsev@email.com", password: "$2b$10$n0JFw/XNwGlUpasz2aD7WusujsOAfaGDUsURZZBYy5yzGk4.AjufO", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Tango06", email: "tango06@email.com", password: "$2b$10$8JwWKZOp.AXmyUczY71fv.4Yr4fyldGQG88CKlpS6KB9FhPQE50/.", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Viti64", email: "viti64@email.com", password: "$2b$10$tnlJNcHQOFvQqKDa7Jk5pOwO9hWBLhuu11Pl9pQ9/mnWDMFfx2NQi", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "PaineCore", email: "painecore@email.com", password: "$2b$10$qyJtNT1yAlBNce/RYTnop..MX2A3GdWaqUoA0cUB3TiYtpAf6h.P2", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {user_name: "Bicho", email: "bicho@email.com", password: "$2b$10$l6x.0uSjuVpIUEhFFvrFVOipKTfVo6nghc8d0UvqOy30GhyKvY7zO", role_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
