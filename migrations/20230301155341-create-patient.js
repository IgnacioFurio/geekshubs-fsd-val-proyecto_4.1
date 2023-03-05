'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allownull: false
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      DNI: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      phone_number:{
        type: Sequelize.STRING,
        allownull: false
      },
      post_code: {
        type: Sequelize.INTEGER,
        allownull: false
      },
      birth: {
        type: Sequelize.DATEONLY,
        allownull: false
      },
      allergy: {
        type: Sequelize.STRING
      },
      surgery: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          allowNull: false
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patients');
  }
};