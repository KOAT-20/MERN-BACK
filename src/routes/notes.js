const { Router } = require('express');
const router = Router();

router.route('/')
  .get((req, res) => res.send('Notes routes'))
  // .post()

// router.route('/:id')
//   .get()
//   .post()
//   .put()
//   .delete()

module.exports = router;
