const { Client } = require('pg');
const users = require('./users');
const cars = require('./cars');
const salePosts = require('./saleposts');


module.exports = {
  users,
  cars,
  salePosts
};
