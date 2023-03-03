'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Appointments', [
      {date_time: "2023-10-12", patient_id: 3, doctor_id: 1, createdAt: "2023-03-03 00:00:00", updatedAt: "2023-03-03 00:00:00"},
      {date_time: "2023-04-09", patient_id: 3, doctor_id: 1, createdAt: "2023-03-03 00:00:00", updatedAt: "2023-03-03 00:00:00"},
      {date_time: "2023-11-23", patient_id: 3, doctor_id: 1, createdAt: "2023-03-03 00:00:00", updatedAt: "2023-03-03 00:00:00"},
      {date_time: "2023-07-05", patient_id: 3, doctor_id: 1, createdAt: "2023-03-03 00:00:00", updatedAt: "2023-03-03 00:00:00"},
      {date_time: "2023-04-28", patient_id: 3, doctor_id: 1, createdAt: "2023-03-03 00:00:00", updatedAt: "2023-03-03 00:00:00"},
      {date_time: "2023-03-02", patient_id: 3, doctor_id: 1, createdAt: "2023-03-03 00:00:00", updatedAt: "2023-03-03 00:00:00"},
      {date_time: "2023-10-27", patient_id: 3, doctor_id: 1, createdAt: "2023-03-03 00:00:00", updatedAt: "2023-03-03 00:00:00"},
      {date_time: "2023-05-15", patient_id: 3, doctor_id: 1, createdAt: "2023-03-03 00:00:00", updatedAt: "2023-03-03 00:00:00"},
      {date_time: "2023-11-12", patient_id: 3, doctor_id: 1, createdAt: "2023-03-03 00:00:00", updatedAt: "2023-03-03 00:00:00"},
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
