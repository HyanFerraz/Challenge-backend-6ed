'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('tutors')
    await queryInterface.createTable('Tutors', {
       id:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
       name:{
         type: Sequelize.STRING,
         allowNull: false
       },
       phone:{ 
         type: Sequelize.STRING,
         allowNull: false
       },
       city:{
         type: Sequelize.STRING,
         allowNull: false
       },
       about:{
         type: Sequelize.STRING,
         allowNull: false
       },
       createdAt:{
         type: Sequelize.DATE,
         allowNull: false
       },
       updatedAt:{
         type: Sequelize.DATE,
         allowNull: false
       }
     });
   
 },

 async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('Tutors');
 }
};
