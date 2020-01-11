const userControl = {}

userControl.getUsers = (req, res) => res.json({
  name: 'Hello',
  last: 'user',
})

userControl.createUser = (req, res) => res.json({
  message: 'user create'
})

userControl.deleteUser = (req, res) => res.json({
  message: 'User delete'
})

module.exports = userControl;
