const userControl = {};
const userModel = require('../models/users.models.js');

userControl.getUsers = async (req, res) => {
  const users = await userModel.find();
  res.json(users);
}

userControl.createUser = async (req, res) => {
  const { username } = req.body;
  const newUser = new userModel({
    username
  })
  await newUser.save();
  res.json({message: 'Usuario creado exitosamente!'})
}

userControl.deleteUser = async (req, res) => {
  await userModel.findOneAndDelete(req.params.id);
  res.json({message: 'Usuario eliminado!'})
}

module.exports = userControl;
