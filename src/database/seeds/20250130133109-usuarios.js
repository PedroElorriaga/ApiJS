/* eslint-disable no-undef */
const bcryptjs = require('bcryptjs');
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('usuarios', [
      {
        username: 'Seed1',
        email: 'seed1@test.com',
        password_hash: await bcryptjs.hash('wWsee4__@', 8),
        cpf: '00000000001',
        created_at: '2025-01-28 23:23:49',
        updated_at: '2025-01-28 23:23:49'
      },
      {
        username: 'Seed2',
        email: 'seed2@test.com',
        password_hash: await bcryptjs.hash('wWsee4__@', 8),
        cpf: '00000000002',
        created_at: '2025-01-28 23:23:49',
        updated_at: '2025-01-28 23:23:49'
      },
      {
        username: 'Seed3',
        email: 'seed3@test.com',
        password_hash: await bcryptjs.hash('wWsee4__@', 8),
        cpf: '00000000003',
        created_at: '2025-01-28 23:23:49',
        updated_at: '2025-01-28 23:23:49'
      }
    ],
      {});
  },

  async down() {
  }
};
