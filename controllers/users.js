const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        title: req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        passwordHash: req.body.passwordHash,
        role: req.body.role,
        loginStatus: req.body.loginStatus,
        lastActivity: req.body.lastActivity,
        apiVersion: req.body.apiVersion
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return User
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
};