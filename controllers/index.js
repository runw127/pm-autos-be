const { Client } = require('pg');
const users = require('./users');
const cars = require('./cars');


module.exports = {
  users,
  cars
};
