'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      collegiate_member: {
        type: Sequelize.STRING
      },      
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      DNI: {
        type: Sequelize.STRING
      },
      phone_number:{
        type: Sequelize.STRING
      },
      contract_at: {
        type: Sequelize.DATEONLY
      },
      contract_until: {
        type: Sequelize.DATEONLY
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key:"id",
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
    await queryInterface.dropTable('Doctors');
  }
};