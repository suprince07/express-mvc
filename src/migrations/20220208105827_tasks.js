/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('tasks', function (table) {
    table.increments('id');
    table.string('title', 50).notNullable();
    table.string('description', 255).notNullable();
    table.boolean('completed', 255).defaultTo(false).notNullable();
    table.integer('userId').unsigned().references('id').inTable('users').onDelete('CASCADE');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable("tasks")
};
