/* eslint-disable no-undef */
import dotenv from 'dotenv';
dotenv.config();


export default {
  database: process.env.DATABASE,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
  define: {
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
