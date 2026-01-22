import type { Knex } from 'knex';

export async function seed(knex: Knex) {
  // await knex('car_images').truncate();

  await knex('car_images').insert([
    {
      car_id: 1,
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      car_id: 2,
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      car_id: 3,
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      car_id: 4,
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      car_id: 5,
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      car_id: 6,
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      car_id: 7,
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      car_id: 8,
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      car_id: 9,
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      car_id: 10,
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
  ]);
}
