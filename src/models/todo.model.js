const knex = require('../config/database.config');

const getTodos = () => {
  return knex('todos');
}

const insertTodo = (data) => {
  return knex('todos').insert(data);
}

const updateTodo = (id, data) => {
  return knex('todos').where('id', '=', id).update(data);
}

const destroyTodo = (id) => {
  return knex('todos').where('id', '=', id).del();
}

module.exports = {
  getTodos, insertTodo, updateTodo, destroyTodo
}