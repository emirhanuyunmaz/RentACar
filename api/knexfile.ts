import type { Knex } from 'knex';
import { config as c } from './src/utils/config';

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: c.DB_NAME,
      password: c.DB_PASSWORD,
      database: 'rent_a_car'
    },
    migrations: {
      extension: 'ts',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};

export default config;