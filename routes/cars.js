var express = require('express');
var router = express.Router();
var index = require('../controllers/index'); 

router.get('/', function(req, res, next) {
  res.send('cars api get response');
});

router.get('/list', index.show);

module.exports = router;