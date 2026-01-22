import type { Knex } from 'knex';

export async function seed(knex: Knex) {
  // await knex('cars').truncate();

  await knex('cars').insert([
    {
      title: 'Renault Clio',
      category_id: 6, // Hatchback
      price: 500000,
      gearBox: 'manuel',
      airConditioner: true,
      fuel: 'benzin',
      doors: 4,
      seats: 5,
      distance: 45000,
    },
    {
      title: 'Toyota Corolla',
      category_id: 1, // Sedan
      price: 650000,
      gearBox: 'otomatik',
      airConditioner: true,
      fuel: 'dizel',
      doors: 4,
      seats: 5,
      distance: 32000,
    },
    {
      title: 'Fiat Egea',
      category_id: 1, // Sedan
      price: 400000,
      gearBox: 'manuel',
      airConditioner: false,
      fuel: 'benzin',
      doors: 4,
      seats: 5,
      distance: 60000,
    },
    {
      title: 'Volkswagen Golf',
      category_id: 6, // Hatchback
      price: 750000,
      gearBox: 'otomatik',
      airConditioner: true,
      fuel: 'dizel',
      doors: 4,
      seats: 5,
      distance: 28000,
    },
    {
      title: 'Hyundai i20',
      category_id: 6, // Hatchback
      price: 470000,
      gearBox: 'manuel',
      airConditioner: true,
      fuel: 'benzin',
      doors: 4,
      seats: 5,
      distance: 39000,
    },
    {
      title: 'Honda Civic',
      category_id: 1, // Sedan
      price: 800000,
      gearBox: 'otomatik',
      airConditioner: true,
      fuel: 'benzin',
      doors: 4,
      seats: 5,
      distance: 20000,
    },
    {
      title: 'BMW 3.20',
      category_id: 1, // Sedan
      price: 1200000,
      gearBox: 'otomatik',
      airConditioner: true,
      fuel: 'benzin',
      doors: 4,
      seats: 5,
      distance: 15000,
    },
    {
      title: 'Mercedes C200',
      category_id: 1, // Sedan
      price: 1400000,
      gearBox: 'otomatik',
      airConditioner: true,
      fuel: 'dizel',
      doors: 4,
      seats: 5,
      distance: 18000,
    },
    {
      title: 'Peugeot 3008',
      category_id: 2, // SUV
      price: 1100000,
      gearBox: 'otomatik',
      airConditioner: true,
      fuel: 'dizel',
      doors: 4,
      seats: 5,
      distance: 25000,
    },
    {
      title: 'Ford Focus',
      category_id: 6, // Hatchback
      price: 550000,
      gearBox: 'manuel',
      airConditioner: true,
      fuel: 'benzin',
      doors: 4,
      seats: 5,
      distance: 35000,
    },
  ]);
}
