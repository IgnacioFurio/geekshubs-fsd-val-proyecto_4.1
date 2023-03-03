'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Users', [
      {name: "Misargyrides", surname: "Valerian", DNI: "47542857A", phone_numbre: "+34 635 765 374", post_code: "18463", birth: "2000-02-22", allergy:"", surgery: "molars extraction", user_id: 2, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Misargyrides", surname: "Valerian", DNI: "47542857A", phone_numbre: "+34 635 765 374", post_code: "18464", birth: "1990-02-22", allergy:"", surgery: "molars extraction", user_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Gripus", surname: "Tasius", DNI: "584736472W", phone_numbre: "+34 683 454 789", post_code: "18465", birth: "2000-02-22", allergy:"", surgery: "molars extraction", user_id: 5, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Misargyrides", surname: "Valerian", DNI: "47542857A", phone_numbre: "+34 635 765 374", post_code: "18470", birth: "1891-02-22", allergy:"", surgery: "molars extraction", user_id: 4, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Misargyrides", surname: "Valerian", DNI: "47542857A", phone_numbre: "+34 635 765 374", post_code: "18485", birth: "1963-02-22", allergy:"", surgery: "molars extraction", user_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Misargyrides", surname: "Valerian", DNI: "47542857A", phone_numbre: "+34 635 765 374", post_code: "18345", birth: "1991-02-22", allergy:"", surgery: "molars extraction", user_id: 4, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Misargyrides", surname: "Valerian", DNI: "47542857A", phone_numbre: "+34 635 765 374", post_code: "18057", birth: "1987-02-22", allergy:"", surgery: "molars extraction", user_id: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
