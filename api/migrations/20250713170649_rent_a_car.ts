import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().unique().defaultTo(knex.raw("(UUID())"));
    table.string('name', 100).notNullable();
    table.string('surname', 150).notNullable();
    table.string('email', 150).notNullable().unique();
    table.string('password', 255).notNullable();
    table.string('gender', 32).notNullable();
    table.boolean('isAdmin').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  }).then(() => console.log('User Table created'));
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('users');
}

