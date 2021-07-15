const { Client } = require('pg');
const SalePost = require('../models').SalePost;
const Car = require('../models').Car;
const { uploadFile } = require("../s3");
const fs =require('fs');


module.exports = {
    show(req, res) {
        return SalePost
        .findAll({
            attributes: ['title', ['description', 'details']]
        })
        .then((salepost) => {
          if(!salepost) res.status(200).send({message: "no salepost found"})
          if(salepost) res.status(200).send(salepost)
        })
        .catch((error) => { res.status(400).send(error); });
    },

    getPostById(req, res) {
        return SalePost
        .findByPk(req.params.id, {
            include: [{
                model: Car,
                as: "cars"
            }]
        })
        .then((salepost) => {
          if(!salepost) res.status(200).send({message: "no salepost found"})
          if(salepost) res.status(200).send(salepost)
        })
        .catch((error) => res.status(400).send(error));
    },

    async create(req, res) {
      const car = Car.findByPk(req.body.carId);
      if (!car) {
        res.status(201).send({message: "No car is binded to this post"})
      }

      let imagesJson = {}
      let videosJson = {} //keep empty, still not implement

      if (req && req.files && req.files.length > 0) {
        const files = req.files

        //only first media file could be added, 
        //need implement multiple files upload later
        const result = await uploadFile(files[0])

        if (result.key) {
          imagesJson[0] = result.key
          fs.unlink("./uploads/" + result.key, function(error) {
            if (error) throw error;
          })
        }
      }

      return SalePost.create({
        carId: req.body.carId,
        merchantId: req.body.carId,
        title: req.body.title,
        description: req.body.description,
        images: imagesJson,
        videos: videosJson,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        status: req.body.status,
        isPopular: req.body.isPopular,
        isHighlighted: req.body.isHighlighted
      })
      .then((salepost) => res.status(201).send(salepost))
      .catch((error) => res.status(400).send(error))
    }
}