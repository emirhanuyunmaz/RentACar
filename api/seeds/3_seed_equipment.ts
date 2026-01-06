import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Tabloyu temizle ve ID sayacını sıfırla
  // await knex('equipment').truncate();

  await knex('equipment').insert([
    { value: 'ABS' }, // Otomatik ID: 1
    { value: 'Airbag' }, // Otomatik ID: 2
    { value: 'Navigasyon' }, // Otomatik ID: 3
    { value: 'Bluetooth' }, // Otomatik ID: 4
    { value: 'Park Sensörü' }, // Otomatik ID: 5
    { value: 'Koltuk Isıtma' }, // Otomatik ID: 6
    { value: 'Elektrikli Camlar' }, // Otomatik ID: 7
    { value: 'Çelik Jant' }, // Otomatik ID: 8
    { value: 'Far Sensörü' }, // Otomatik ID: 9
    { value: 'Yağmur Sensörü' }, // Otomatik ID: 10
  ]);
}
