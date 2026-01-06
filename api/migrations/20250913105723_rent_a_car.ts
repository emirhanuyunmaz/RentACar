import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // users
  await knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name', 100).notNullable();
      table.string('surname', 150).notNullable();
      table.string('email', 150).notNullable().unique();
      table.string('password', 255).notNullable();
      table.string('gender', 32).notNullable();
      table.boolean('isAdmin').notNullable().defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .then(() => console.log('User Table created'));

  // cars
  await knex.schema
    .createTable('cars', (table) => {
      table.increments('id').primary();
      table.string('title', 150).notNullable();
      table.double('price').notNullable();
      table.string('gearBox').notNullable();
      table.boolean('airConditioner').notNullable().defaultTo(false);
      table.string('fuer', 100).notNullable();
      table.integer('doors').notNullable();
      table.integer('seats').notNullable();
      table.integer('distance').notNullable();
      table.timestamps(true, true);
    })
    .then(() => console.log('Car Table created'));

  // car-images
  await knex.schema
    .createTable('car_images', (table) => {
      table.increments('id').primary();
      // İlişkili car_id artık integer olmalı
      table
        .integer('car_id')
        .unsigned()
        .references('id')
        .inTable('cars')
        .onDelete('CASCADE');
      table.string('name').notNullable();
      table.string('link').notNullable();
    })
    .then(() => console.log('Car Images Table created'));

  // equipment
  await knex.schema
    .createTable('equipment', (table) => {
      table.increments('id').primary();
      table.string('value').notNullable();
    })
    .then(() => console.log('Equipment Table created'));

  // car-equipment (junction)
  await knex.schema
    .createTable('car_equipment', (table) => {
      table.increments('id').primary();
      // Foreign key'ler integer olmalı
      table
        .integer('car_id')
        .unsigned()
        .references('id')
        .inTable('cars')
        .onDelete('CASCADE');
      table
        .integer('equipment_id')
        .unsigned()
        .references('id')
        .inTable('equipment')
        .onDelete('CASCADE');
    })
    .then(() => console.log('Car Equipment Table created'));
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('car_equipment');
  await knex.schema.dropTableIfExists('equipment');
  await knex.schema.dropTableIfExists('car_images');
  await knex.schema.dropTableIfExists('cars');
  await knex.schema.dropTableIfExists('users');
}
