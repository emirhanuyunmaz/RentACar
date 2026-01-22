import { Knex } from 'knex';

// 3. CATEGORIES
exports.seed = async function (knex: Knex) {
  await knex('categories').insert([
    { name: 'Sedan' },
    { name: 'SUV' },
    { name: 'Cabriolet' },
    { name: 'Pickup' },
    { name: 'Minivan' },
    { name: 'Hatchback' },
    { name: 'Coupe' },
    { name: 'Electric' },
    { name: 'Luxury' },
    { name: 'Sport' },
  ]);
};
