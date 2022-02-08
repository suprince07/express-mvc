/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('todos', function (table) {
      table.increments('id');
      table.string('title', 50).notNullable();
      table.string('description', 255).nullable();
      table.integer('userId').unsigned().references('id').inTable('users').onDelete('CASCADE');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("todos")
};
