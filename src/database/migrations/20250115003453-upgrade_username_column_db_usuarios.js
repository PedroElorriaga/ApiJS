/* eslint-disable no-undef */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('usuarios', 'username', {
      type: Sequelize.STRING,
      unique: true
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('usuarios');
  }
};
