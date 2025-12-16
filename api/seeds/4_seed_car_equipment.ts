import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('car_equipment').del();

  await knex('car_equipment').insert([
    { id: 'ce-1', car_id: 'car-1', equipment_id: 'eq-1' },
    { id: 'ce-2', car_id: 'car-1', equipment_id: 'eq-2' },
    { id: 'ce-3', car_id: 'car-2', equipment_id: 'eq-3' },
    { id: 'ce-4', car_id: 'car-2', equipment_id: 'eq-4' },
    { id: 'ce-5', car_id: 'car-3', equipment_id: 'eq-5' },
    { id: 'ce-6', car_id: 'car-4', equipment_id: 'eq-6' },
    { id: 'ce-7', car_id: 'car-5', equipment_id: 'eq-7' },
    { id: 'ce-8', car_id: 'car-6', equipment_id: 'eq-8' },
    { id: 'ce-9', car_id: 'car-7', equipment_id: 'eq-9' },
    { id: 'ce-10', car_id: 'car-8', equipment_id: 'eq-10' },
  ]);
}
