var express = require('express');
var router = express.Router();
var carsController = require('../controllers/cars'); 

router.get('/', function(req, res, next) {
  res.send('cars api get response');
});

router.get('/list', carsController.show);

module.exports = router;