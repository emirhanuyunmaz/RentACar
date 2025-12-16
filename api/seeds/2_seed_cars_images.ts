import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('car_images').del();

  await knex('car_images').insert([
    {
      id: 'img-1',
      car_id: 'car-1',
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      id: 'img-2',
      car_id: 'car-2',
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      id: 'img-3',
      car_id: 'car-3',
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      id: 'img-4',
      car_id: 'car-4',
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      id: 'img-5',
      car_id: 'car-5',
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      id: 'img-6',
      car_id: 'car-6',
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      id: 'img-7',
      car_id: 'car-7',
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      id: 'img-8',
      car_id: 'car-8',
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      id: 'img-9',
      car_id: 'car-9',
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
    {
      id: 'img-10',
      car_id: 'car-10',
      name: 'rx.png',
      link: 'http://localhost:3002/uploads/rx.png',
    },
  ]);
}
