import type { Knex } from 'knex';

export async function seed(knex: Knex) {
  // await knex('car_equipment').truncate();

  await knex('car_equipment').insert([
    // id alanını yazmıyoruz, otomatik artacak.
    // car_id ve equipment_id artık tam sayı.
    { car_id: 1, equipment_id: 1 }, // car-1 -> eq-1
    { car_id: 1, equipment_id: 2 }, // car-1 -> eq-2
    { car_id: 2, equipment_id: 3 }, // car-2 -> eq-3
    { car_id: 2, equipment_id: 4 }, // car-2 -> eq-4
    { car_id: 3, equipment_id: 5 }, // car-3 -> eq-5
    { car_id: 4, equipment_id: 6 }, // car-4 -> eq-6
    { car_id: 5, equipment_id: 7 }, // car-5 -> eq-7
    { car_id: 6, equipment_id: 8 }, // car-6 -> eq-8
    { car_id: 7, equipment_id: 9 }, // car-7 -> eq-9
    { car_id: 8, equipment_id: 10 }, // car-8 -> eq-10
  ]);
}
