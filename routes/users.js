var express = require('express');
var router = express.Router();
const usersController = require('../controllers').users;

/* GET users listing. */
router.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to User API',
}));

router.get('/all', usersController.list);

router.post('/new', usersController.create);

module.exports = router;