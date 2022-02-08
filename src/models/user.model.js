const knex = require('../config/database.config');

const getUsers = () => {
  return knex('users');
}

const insertUser = (data) => {
  return knex('users').insert(data);
}

const updateUser = (id, data) => {
  return knex('users').where('id', '=', id).update(data);
}

const destroyUser = (id) => {
  return knex('users').where('id', '=', id).del();
}

module.exports = {
  getUsers, insertUser, updateUser, destroyUser
}