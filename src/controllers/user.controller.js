const User=require('../models/user.model');

const index = async (req, res) => {
  try{
    const users=await User.getUsers();
    return res.status(200).send(users);
  }catch(e){
    return res.status(400).send(e.toString());
  }
}

const create = async (req, res) => {
  const { name, email, password } = req.body;
  try{
    const result=await User.insertUser({name,email,password});
    return res.status(200).send({message:"user created succesfully"});
  }catch(e){
    return res.status(400).send(e.toString());
  }
  User.users.push({
    id, email, password, address
  })
}

const edit = async (req, res) => {
  const { id } = req.params;
  const { email, password, name } = req.body;
  const user = User.users.find((user) => user.id === id);
  if (user) {
    user.email = email
    user.password = password
    user.address = address
    const index = users.findIndex((user) => user.id == id);
    User.users.splice(index, 1);
    User.users.push(user);
    return res.status(200).send(user);
  } else {
    return res.status(404).send({
      error: `No user found with id=${id}`
    });
  }
}

const destroy = async (req, res) => {
  const { id } = req.params;
  const user = User.users.find((user) => user.id == id);
  if (user) {
    User.users = User.users.filter((user) => user.id != id);
    return res.status(200).send({ message: "User delete successfully" });
  } else {
    return res.status(404).send({
      error: `No user found with id=${id}`
    });
  }
}

module.exports = {
  index, create, edit, destroy
}