'use strict'
const router = require('express').Router();
const { Resources } = require('../models');

//load all resources
router.get("/", (req, res, next) => {
    Resources.findAll()
      .then(resources => {
        res.json(resources);
      })
      .catch(next);
  });

//add resource
router.post('/', (req, res, next) => {
    Resources.create({
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        location: req.body.location,
        type: req.body.type,
        author: req.body.author,
        active: req.body.active,
        details: req.body.details
    })
    .then(resource => res.json(resource))
    .catch(next)
})

//update resource
router.put('/:resourceId', (req, res, next) => {
    Resources.findById(req.params.userId)
    .then(resource => {
        resource.update(req.body)
        .then(newResource => res.json(newResource))
    })
    .catch(next)
})


module.exports = router;
