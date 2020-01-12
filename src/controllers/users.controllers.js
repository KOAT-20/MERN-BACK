const userControl = {};
const userModel = require('../models/users.models.js');

userControl.getUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
}

userControl.getUser = async (req, res) => {
  const note = await userModel.findById(req.params.id);
  res.json (note)
}

userControl.createUser = async (req, res) => {
  const { username, lastname } = req.body;
  const newUser = new userModel({
    username,
    lastname
  })
  await newUser.save();
  res.json({message: 'Usuario creado exitosamente!'})
}

userControl.updateUser = async (req, res) => {
  const { username, lastname } = req.body;
  await userModel.findOneAndUpdate({_id: req.params.id}, {
    username,
    lastname
  });
  res.json({message: 'Usuario actualizado exitosamente!'})
}

userControl.deleteUser = async (req, res) => {
  await userModel.findOneAndDelete(req.params.id);
  res.json({message: 'Usuario eliminado!'})
}

module.exports = userControl;
