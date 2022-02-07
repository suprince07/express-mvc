let users = [];
const knex = require('../knex.js')

const getUsers = async ()=> {
    const user = await knex.select(knex.raw(' * from users;'));
    return user;
}

const createUser = async (email,name, address )=> {
    // const user = await knex.raw(`INSERT INTO users
    // (user_name,user_address,user_email)
    // VALUES 
    // ('${name}','${address}','${email})`);
    await knex.insert({
        user_name: name,
        user_address: address,
        user_email: email
    })
    // return user;
}

module.exports={users, getUsers, createUser};