'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Shelters', {
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone:{ 
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.STRING,
        allowNull: false
      }      
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Shelters')
  }
};
