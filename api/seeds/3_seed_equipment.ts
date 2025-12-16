import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('equipment').del();

  await knex('equipment').insert([
    { id: 'eq-1', value: 'ABS' },
    { id: 'eq-2', value: 'Airbag' },
    { id: 'eq-3', value: 'Navigasyon' },
    { id: 'eq-4', value: 'Bluetooth' },
    { id: 'eq-5', value: 'Park Sensörü' },
    { id: 'eq-6', value: 'Koltuk Isıtma' },
    { id: 'eq-7', value: 'Elektrikli Camlar' },
    { id: 'eq-8', value: 'Çelik Jant' },
    { id: 'eq-9', value: 'Far Sensörü' },
    { id: 'eq-10', value: 'Yağmur Sensörü' },
  ]);
}
