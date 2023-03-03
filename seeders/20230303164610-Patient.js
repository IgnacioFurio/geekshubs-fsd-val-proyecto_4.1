'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Patients', [
      {name: "Misargyrides", surname: "Valerian", DNI: "47542857A", phone_number: "+34 635 765 374", post_code: "18463", birth: "2000-02-22", allergy:"", surgery: "molars extraction", user_id: 2, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Minucia", surname: "Publicola", DNI: "584736583E", phone_number: "+34 645 736 657", post_code: "18464", birth: "1990-02-22", allergy:"Latex", surgery: "", user_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Gripus", surname: "Tasius", DNI: "584736472W", phone_number: "+34 683 454 789", post_code: "18465", birth: "2000-02-22", allergy:"", surgery: "", user_id: 5, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Bruttia", surname: "Leontius", DNI: "437898754A", phone_number: "+34 634 758 643", post_code: "18470", birth: "1891-02-22", allergy:"", surgery: "veneer implant", user_id: 4, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Pijus", surname: "Magnificus", DNI: "75634887M", phone_number: "+34 686 654 438", post_code: "18485", birth: "1963-02-22", allergy:"Nikel", surgery: "", user_id: 3, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Incontinencia", surname: "Summa", DNI: "274837653R", phone_number: "+34 696 467 654", post_code: "18345", birth: "1991-02-22", allergy:"Mint", surgery: "Dental implant", user_id: 4, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {name: "Traviesus", surname: "Maximus", DNI: "000000001A", phone_number: "+34 629 946 876", post_code: "18057", birth: "1987-02-22", allergy:"", surgery: "", user_id: 1, createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
