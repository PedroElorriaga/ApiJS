/* eslint-disable no-undef */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('alunos', [
      {
        nome: 'Seed',
        sobrenome: '1',
        idade: 1,
        created_at: '2025-01-28 23:23:49',
        updated_at: '2025-01-28 23:23:49'
      },
      {
        nome: 'Seed',
        sobrenome: '2',
        idade: 2,
        created_at: '2025-01-28 23:23:49',
        updated_at: '2025-01-28 23:23:49'
      },
      {
        nome: 'Seed',
        sobrenome: '3',
        idade: 3,
        created_at: '2025-01-28 23:23:49',
        updated_at: '2025-01-28 23:23:49'
      }
    ],
      {});
  },

  async down() {
  }
};
