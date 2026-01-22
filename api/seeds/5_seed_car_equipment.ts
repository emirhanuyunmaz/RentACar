import type { Knex } from 'knex';

export async function seed(knex: Knex) {
  // await knex('car_equipment').truncate();

  await knex('car_equipment').insert([
    { car_id: 1, equipment_id: 1 },
    { car_id: 1, equipment_id: 2 },
    { car_id: 2, equipment_id: 3 },
    { car_id: 2, equipment_id: 4 },
    { car_id: 3, equipment_id: 5 },
    { car_id: 4, equipment_id: 6 },
    { car_id: 5, equipment_id: 7 },
    { car_id: 6, equipment_id: 8 },
    { car_id: 7, equipment_id: 9 },
    { car_id: 8, equipment_id: 10 },
  ]);
}
