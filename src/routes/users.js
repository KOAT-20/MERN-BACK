const { Router } = require('express');
const router = Router();
const {
  getUsers, createUser, deleteUser
} = require('../controllers/users.controllers.js');

router.route('/')
  .get(getUsers)

router.route('/:id')
  .post(createUser)
  .delete(deleteUser)


module.exports = router;
