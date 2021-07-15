const { Client } = require('pg');
const Car = require('../models').Car;

module.exports = {
  create(req, res) {
    return Car.create({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      fuelType: req.body.fuelType,
      engineSize: req.body.engineSize,
      color: req.body.color,
      transmission: req.body.transmission,
      bodyType: req.body.bodyType,
      mileage: req.body.mileage,
      doors: req.body.doors,
      seats: req.body.seats,
      registrationCountry: req.body.registrationCountry,
      emission: req.body.emission,
      enginePower: req.body.enginePower,
      roadTax: req.body.roadTax,
      previousOwner: req.body.previousOwner
    })
    .then(car => status(201).send(car))
    .catch(error => res.status(400).send(error))
  },

  show(req, res) {

    // Show index content 
    return Car
      .findAll()
      .then(cars => res.status(200).send(cars))
      .catch(error => res.status(400).send(error));
  }

}